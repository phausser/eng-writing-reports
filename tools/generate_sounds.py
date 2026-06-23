#!/usr/bin/env python3
"""Generate MP3 audio files from report texts in app.js using gTTS."""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_JS = ROOT / "app.js"
SOUNDS_DIR = ROOT / "sounds"
MANIFEST_PATH = SOUNDS_DIR / "manifest.json"


def strip_html(text: str) -> str:
    plain = re.sub(r"<[^>]+>", "", text)
    return re.sub(r"\s+", " ", unescape(plain)).strip()


def slugify(title: str) -> str:
    slug = title.lower().replace("&", "and")
    slug = re.sub(r"['’]", "", slug)
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    return slug.strip("-")


def load_reports(app_js_path: Path) -> list[dict[str, list[str] | str]]:
    content = app_js_path.read_text(encoding="utf-8")
    match = re.search(
        r"const REPORTS = \[(.*?)\];\s*\n\s*let currentReport",
        content,
        re.DOTALL,
    )
    if not match:
        raise ValueError(f"Could not find REPORTS in {app_js_path}")

    reports: list[dict[str, list[str] | str]] = []
    for block in re.split(r"\n\s*\},\s*\n\s*\{", match.group(1)):
        title_match = re.search(r'title:\s*"((?:\\"|[^"])*)"', block)
        if not title_match:
            continue

        title = title_match.group(1).replace('\\"', '"')
        paragraphs = [
            strip_html(paragraph)
            for paragraph in re.findall(r"`([^`]*)`", block)
        ]
        paragraphs = [paragraph for paragraph in paragraphs if paragraph]

        reports.append({"title": title, "paragraphs": paragraphs})

    if not reports:
        raise ValueError("No reports parsed from app.js")

    return reports


def build_speech_text(report: dict[str, list[str] | str]) -> str:
    title = str(report["title"])
    paragraphs = report["paragraphs"]
    assert isinstance(paragraphs, list)
    return f"{title}. " + " ".join(paragraphs)


def generate_mp3(text: str, output_path: Path, lang: str, tld: str) -> None:
    try:
        from gtts import gTTS
    except ImportError as exc:
        raise SystemExit(
            "gTTS is not installed. Run: pip install -r tools/requirements.txt"
        ) from exc

    tts = gTTS(text=text, lang=lang, tld=tld)
    tts.save(str(output_path))


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate MP3 files for report texts.")
    parser.add_argument("--lang", default="en", help="gTTS language code (default: en)")
    parser.add_argument(
        "--tld",
        default="co.uk",
        help="gTTS top-level domain for accent, e.g. co.uk or com (default: co.uk)",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Regenerate MP3 files even if they already exist",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.4,
        help="Pause between requests in seconds (default: 0.4)",
    )
    args = parser.parse_args()

    if not APP_JS.exists():
        print(f"Missing app.js at {APP_JS}", file=sys.stderr)
        return 1

    reports = load_reports(APP_JS)
    SOUNDS_DIR.mkdir(parents=True, exist_ok=True)

    manifest = []

    print(f"Found {len(reports)} reports in app.js")
    print(f"Saving MP3 files to {SOUNDS_DIR}")

    for index, report in enumerate(reports, start=1):
        title = str(report["title"])
        slug = slugify(title)
        filename = f"{index:02d}-{slug}.mp3"
        output_path = SOUNDS_DIR / filename
        speech_text = build_speech_text(report)

        if output_path.exists() and not args.force:
            print(f"[skip] {filename}")
        else:
            print(f"[gen ] {filename} ({len(speech_text)} chars)")
            generate_mp3(speech_text, output_path, args.lang, args.tld)
            time.sleep(args.delay)

        manifest.append(
            {
                "index": index,
                "title": title,
                "slug": slug,
                "file": filename,
            }
        )

    MANIFEST_PATH.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote manifest to {MANIFEST_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())