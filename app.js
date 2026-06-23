const VOCABULARY = [
  ["(to) celebrate", "feiern"],
  ["celebration", "Feier"],
  ["parade", "Parade, Umzug"],
  ["mayor", "Bürgermeister/in"],
  ["(to) light, lit, lit", "anzünden"],
  ["candle", "Kerze"],
  ["(to) blow sth. out, blew, blown", "etwas auspusten, ausblasen"],
  ["New Year's Eve", "Silvester"],
  ["(to) stay up late", "lange aufbleiben"],
  ["fireworks", "Feuerwerk"],
  ["firework", "Feuerwerkskörper"],
  ["(to) dress up", "sich verkleiden, sich schick anziehen"],
  ["costume", "Kostüm, Verkleidung"],
  ["special", "besondere(r, s)"],
  ["bucket", "Eimer"],
  ["crowd", "(Menschen-)Menge"],
  ["festival", "Fest, Festival"],
  ["flag", "Fahne, Flagge"],
  ["(to) raise money (for sth.)", "Geld sammeln (für etwas)"],
  ["charity", "Wohlfahrtsorganisation; Wohltätigkeit"],
  ["(to) take part in sth.", "an etwas teilnehmen"],
  ["(to) plan", "planen"],
  ["theme", "Thema"],
  ["juggler", "Jongleur/in"],
  ["(to) juggle sth.", "mit etwas jonglieren"],
  ["(to) drive, drove, driven", "(mit dem Auto) fahren"],
  ["(to) get out (of a car)", "(aus einem Auto) aussteigen"],
  ["(to) put sth. on", "etwas anziehen; etwas aufsetzen"],
  ["(to) put sth. off", "etwas ausziehen; etwas absetzen"],
  ["choir", "Chor"],
  ["not till three", "erst um drei, nicht vor drei"],
  ["probably", "wahrscheinlich"],
  ["artist", "Künstler/in"],
  ["torch", "Fackel"],
  ["(to) pass sth. (around)", "etwas (herum)reichen"],
  ["encore", "Zugabe"],
  ["(to) promise", "versprechen"],
  ["(to) fly, flew, flown", "fliegen"],
  ["(to) take notes", "(sich) Notizen machen"],
  ["symbol", "Symbol"],
  ["abbreviation", "Abkürzung"],
  ["e.g.", "z.B. (zum Beispiel)"],
  ["demonstration", "Demonstration, Vorführung"],
  ["speech", "(offizielle) Rede"],
  ["competition", "Wettbewerb"],
  ["workshop", "Workshop, Lehrgang"],
  ["(to) paint", "(an)streichen; (an)malen"],
  ["Spanish", "spanisch"],
  ["main", "Haupt-"],
  ["we mustn't do it", "wir dürfen es nicht tun"],
  ["tasty", "lecker"],
  ["Indian", "Inder/in, indisch"],
  ["traditional", "traditionell"],
  ["(to) repeat", "wiederholen"],
  ["tongue-twister", "Zungenbrecher"],
  ["we needn't do it", "wir müssen es nicht tun"],
  ["puppet", "Marionette, Handpuppe"],
  ["May I have a word with you?", "Kann ich Sie kurz sprechen?"],
  ["may", "dürfen"],
  ["queen", "Königin"],
  ["knight", "Ritter"],
  ["(to) become, became, become", "werden"],
  ["famous (for)", "berühmt (für, wegen)"],
  ["(to) defend sb./sth.", "jn./etwas verteidigen"],
  ["enemy", "Feind/in"],
  ["(to) invade (a country)", "(in ein Land) einmarschieren"],
  ["(to) attack", "angreifen"],
  ["(to) destroy", "zerstören"],
  ["recipe", "(Koch-)Rezept"],
  ["consonant", "Konsonant, Mitlaut"],
  ["vowel", "Vokal, Selbstlaut"],
  ["routine", "Routine"],
  ["(to) pick sth. up", "etwas aufheben"],
  ["rubbish", "Müll, Abfall"],
  ["(to) be made of sth.", "aus etwas (gemacht) sein"],
  ["to pick sb. up", "jn. abholen"],
];

const QUESTIONS = [
  { key: "wo", label: "Wo?", hint: "Wo hat das stattgefunden?", theme: "rot" },
  { key: "wann", label: "Wann?", hint: "Wann ist es passiert?", theme: "blau" },
  { key: "wer", label: "Wer?", hint: "Wer war beteiligt?", theme: "gelb" },
  { key: "warum", label: "Warum?", hint: "Warum gab es das Ereignis?", theme: "gruen" },
  { key: "wie", label: "Wie?", hint: "Wie ist es abgelaufen?", theme: "orange" },
  { key: "how", label: "How?", hint: "How did it happen? (Englisch)", theme: "lila" },
];

const REPORTS = [
  {
    title: "New Year's Eve Celebration",
    paragraphs: [
      `Last year, the town wanted to celebrate New Year's Eve with a special event. Many families dressed up warmly because it was cold outside.`,
      `<span class="fact" data-q="warum">The town planned the festival to bring people together and create a happy atmosphere before the new year.</span> After a difficult winter, the council hoped families would come back every year.`,
      `People arrived early near the fountain. <span class="fact" data-q="wie">At twelve o'clock, the mayor blew the candle out, and then everyone watched colourful fireworks in the sky.</span> There was loud cheering when the first firework flew up.`,
      `<span class="fact" data-q="wo">The celebration took place in the main square, where a large crowd gathered.</span> <span class="fact" data-q="how">They celebrated by lighting firework after firework until the whole square was bright.</span> Vendors sold hot drinks, and latecomers stood at the back.`,
      `<span class="fact" data-q="wer">The mayor lit a big candle on the stage, and children from the school choir sang a song.</span> Parents recorded the choir on their phones.`,
      `<span class="fact" data-q="wann">It started at midnight on 31 December, when everyone wanted to stay up late.</span> When the last spark disappeared, people wished each other "Happy New Year".`,
    ],
  },
  {
    title: "The Summer Parade",
    paragraphs: [
      `Our school took part in the summer parade last June. We practised for two weeks and learned how to hold our flags straight.`,
      `<span class="fact" data-q="wer">A famous juggler drove to the park, got out of his car, and put on a red costume before the show.</span> Some children recognised him from television and pointed excitedly.`,
      `Teachers handed out water because the sun was hot. <span class="fact" data-q="how">They raised money by selling drinks from a big bucket at a small stand near the park entrance.</span> Volunteers also collected coins for charity.`,
      `<span class="fact" data-q="wann">It began on Saturday morning at ten o'clock and lasted about two hours.</span> Many classes waited in side streets before the start.`,
      `<span class="fact" data-q="warum">The theme of the festival was "Together for Charity" – the school wanted to raise money for a local charity.</span> Our head teacher explained the theme in assembly.`,
      `Spectators waved from behind barriers. <span class="fact" data-q="wo">The parade went through the old town and ended at the city park.</span> <span class="fact" data-q="wie">Students dressed up in special costumes and carried flags while the juggler juggled torches in front of the crowd.</span>`,
    ],
  },
  {
    title: "Charity Festival in the Park",
    paragraphs: [
      `The local charity organised a festival to help families in need. Volunteers spent days baking cakes and putting up tents.`,
      `One stand sold soup, another had cakes with fruit. <span class="fact" data-q="wie">Visitors could listen to music, watch a short demonstration, and buy tasty food at different stands.</span> Children painted small symbols on stones.`,
      `<span class="fact" data-q="wann">It took place on the first Sunday in May, from eleven in the morning until five in the afternoon.</span> Between lunch and three o'clock, the queues were longest.`,
      `<span class="fact" data-q="warum">The charity needed money for new school books and warm meals for children.</span> The director explained this in her opening speech.`,
      `<span class="fact" data-q="how">The volunteers raised money by selling cakes, flags, and small symbols of the town.</span> At the exit, there was also a box for extra donations.`,
      `Ducks swam near the bank. <span class="fact" data-q="wo">The event was held in Riverside Park, next to the river.</span> <span class="fact" data-q="wer">Many artists, a choir, and volunteers from the charity took part in the programme.</span>`,
    ],
  },
  {
    title: "The Street Artist",
    paragraphs: [
      `A street artist came to our town and gave a free performance. Posters appeared on lamp posts one day before the show.`,
      `He smiled whenever the crowd reacted. <span class="fact" data-q="how">He entertained the people by juggling five balls at the same time without dropping one.</span> At the end, he collected donations in his hat.`,
      `Before the show, he met the mayor. <span class="fact" data-q="warum">He wanted to take part in the town festival and promised to pass a hat around for the local charity.</span> He did not want money for himself.`,
      `Children sat in the front row. <span class="fact" data-q="wann">The show started at three o'clock in the afternoon – not till three, as the poster promised.</span> The artist appeared exactly on time.`,
      `Market stalls were still open nearby. <span class="fact" data-q="wo">He performed on Market Street, right in front of the old town hall.</span> People stopped with shopping bags and stayed to watch.`,
      `He began with one apple, then two, then three. <span class="fact" data-q="wie">First he juggled apples and torches, then he asked a child from the crowd to help him.</span> <span class="fact" data-q="wer">The artist was a young juggler who had become famous for his funny shows in other cities.</span>`,
    ],
  },
  {
    title: "Choir Concert with Encore",
    paragraphs: [
      `The school choir gave a concert in the community centre. The students had practised after school for months.`,
      `Families arrived early and bought drinks. <span class="fact" data-q="wann">It began on Friday evening at seven o'clock and ended probably not till three encores later.</span> For the next hour, the hall was completely still except for the music.`,
      `Some songs were slow, others fast and full of energy. <span class="fact" data-q="how">They performed by singing louder and louder until the whole hall was clapping and singing along.</span> Almost everyone knew the words of the last encore.`,
      `<span class="fact" data-q="wer">Forty students from the choir, their music teacher, and the mayor sat in the front row.</span> Parents waved whenever they saw their child on stage.`,
      `<span class="fact" data-q="wie">The choir sang traditional songs, and at the end the crowd shouted for an encore.</span> When the choir returned, even the mayor sang along quietly.`,
      `Helpers put programmes on the seats. <span class="fact" data-q="wo">The concert was in the main hall of the community centre on Hill Road.</span> <span class="fact" data-q="warum">The choir wanted to raise money for a new piano and to celebrate the end of the school year.</span>`,
    ],
  },
  {
    title: "Art Demonstration at School",
    paragraphs: [
      `An artist visited our class and gave a live demonstration. Our teacher told us to take notes during the lesson.`,
      `She wrote new words on the board. <span class="fact" data-q="wer">A Spanish artist, Ms Rivera, showed us how to paint and told us about her work.</span> She had brought photos of her studio and a festival in her hometown.`,
      `Sunlight lit the paints on the table. <span class="fact" data-q="wo">The demonstration took place in the art room on the second floor of our school.</span> Other classes could hear us applaud from the corridor.`,
      `She passed an object around the class. <span class="fact" data-q="how">She explained her work by showing us a small torch as a symbol for hope and light.</span> Then she compared it to the colours in her painting.`,
      `<span class="fact" data-q="warum">Our teacher planned the visit because we were learning about symbols and colours in art.</span> We had studied flags and torches in the weeks before.`,
      `Everyone was already in a holiday mood. <span class="fact" data-q="wann">It happened on Wednesday afternoon during our last lesson before the holidays.</span> <span class="fact" data-q="wie">The artist painted a big flag on the wall while we took notes about her ideas.</span>`,
    ],
  },
  {
    title: "Spanish Painting Workshop",
    paragraphs: [
      `The community centre offered a free workshop for children during the holidays. My mother signed me up at the library.`,
      `We painted dancers and village festivals. <span class="fact" data-q="warum">The main theme was Spanish culture – the centre wanted children to learn something new and have fun.</span> A poster at the entrance explained the theme.`,
      `The artist showed us how to plan a picture first. <span class="fact" data-q="how">They learned step by step: first draw, then paint, and finally put their pictures on the wall.</span> On the last day, parents saw a mini exhibition.`,
      `<span class="fact" data-q="wer">An artist from Spain and two helpers taught twelve children how to paint.</span> The helpers encouraged shy children to use brighter colours.`,
      `<span class="fact" data-q="wann">It ran every Tuesday and Thursday in August, from ten to twelve o'clock.</span> Parents waited in the library café until noon.`,
      `Some chose red and yellow for flags. <span class="fact" data-q="wie">The children painted colourful pictures of festivals, flags, and fireworks on big sheets of paper.</span> <span class="fact" data-q="wo">The workshop was in the small studio behind the library.</span>`,
    ],
  },
  {
    title: "Indian Cooking Competition",
    paragraphs: [
      `The school kitchen hosted a tasty cooking competition last term. Teams signed up quickly during lunch break.`,
      `The chef arrived early with boxes of rice and spices. <span class="fact" data-q="how">They cooked by using fresh vegetables and special spices that the chef had brought in his car.</span> Teams shared equipment fairly.`,
      `Tables were moved to make space for six stations. <span class="fact" data-q="wo">The competition took place in the school canteen on the ground floor.</span> That day the canteen smelled of garlic and curry.`,
      `<span class="fact" data-q="wer">Six teams of students and one Indian chef from a local restaurant took part.</span> Each team had a parent helper in the kitchen.`,
      `Some teams decorated their tables with flags. <span class="fact" data-q="wie">Each team followed a traditional recipe and presented their dish to a small crowd of teachers and parents.</span> A tongue-twister on one poster made everyone laugh.`,
      `Tickets were sold for tasting plates. <span class="fact" data-q="warum">The school wanted to raise money for charity and teach students about traditional food from other countries.</span> <span class="fact" data-q="wann">It was on Thursday at four o'clock, right after the last lesson.</span>`,
    ],
  },
  {
    title: "Puppet Show: The Brave Knight",
    paragraphs: [
      `The drama club performed a puppet show about a famous knight. They rehearsed every Monday after school for six weeks.`,
      `Wooden swords clacked and the crowd shouted advice. <span class="fact" data-q="wie">The puppets fought, the queen gave a short speech, and in the end the knight destroyed the enemy's flag.</span> Everyone cheered when the flag fell.`,
      `The queen wore a golden cardboard crown. <span class="fact" data-q="wer">The queen, a brave knight, and an evil enemy appeared as colourful puppets.</span> The enemy laughed loudly whenever he appeared.`,
      `The puppeteers spoke in funny voices. <span class="fact" data-q="how">The drama club performed by moving the puppets on strings and speaking in funny voices.</span> Afterwards, they showed how a puppet works.`,
      `<span class="fact" data-q="wann">It started on Monday morning during assembly and lasted twenty minutes.</span> When the lights went down, the gym became very quiet.`,
      `<span class="fact" data-q="warum">The story showed how the knight became famous for defending his country when the enemy tried to invade and attack the castle.</span> <span class="fact" data-q="wo">The show was on the small stage in the school gym.</span>`,
    ],
  },
  {
    title: "Clean-Up Day Routine",
    paragraphs: [
      `Our class took part in a clean-up day near the river. Mr Stein showed us photos of plastic bottles in the bushes.`,
      `Some rubbish was easy to see, others were hidden in the grass. <span class="fact" data-q="how">We worked by walking along the path in small groups and filling bag after bag with old paper and plastic.</span> We even found a broken toy.`,
      `The mayor picked up rubbish near the bridge. <span class="fact" data-q="wer">All students from Class 8b, our teacher Mr Stein, and the mayor joined the project.</span> A ranger answered questions about birds and fish.`,
      `Buses dropped off two other classes. <span class="fact" data-q="wo">We met at the parking area next to Riverside Park.</span> From there we could see the path along the water.`,
      `<span class="fact" data-q="warum">We wanted to pick up rubbish and raise money for a charity that protects the river.</span> Last spring we had found glass near the water on a geography walk.`,
      `The weather was cool and dry. <span class="fact" data-q="wann">The clean-up started on Sunday at nine in the morning and finished at noon.</span> <span class="fact" data-q="wie">We followed a simple routine: put on gloves, pick up rubbish, and put it into big buckets.</span>`,
    ],
  },
];

let currentReport = 0;
let currentQuestion = 0;
let reportOrder = [];

function shuffleReports() {
  reportOrder = REPORTS.map((_, i) => i);
  for (let i = reportOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [reportOrder[i], reportOrder[j]] = [reportOrder[j], reportOrder[i]];
  }
}

function getActiveReport() {
  return REPORTS[reportOrder[currentReport]];
}

const app = document.getElementById("app");
const reportTitle = document.getElementById("report-title");
const reportBody = document.getElementById("report-body");
const questionLabel = document.getElementById("question-label");
const questionHint = document.getElementById("question-hint");
const btnWeiter = document.getElementById("btn-weiter");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const overlay = document.getElementById("overlay");
const btnRestart = document.getElementById("btn-restart");
const btnVocab = document.getElementById("btn-vocab");
const vocabPanel = document.getElementById("vocab-panel");

function renderVocabulary() {
  vocabPanel.innerHTML = VOCABULARY.map(
    ([en, de]) => `<div class="vocab-item"><strong>${en}</strong> – ${de}</div>`
  ).join("");
}

function renderReport() {
  const report = getActiveReport();
  reportTitle.textContent = `Bericht ${currentReport + 1}: ${report.title}`;
  reportBody.innerHTML = report.paragraphs.map((p) => `<p>${p}</p>`).join("");
  updateProgress();
}

function updateProgress() {
  const totalSteps = REPORTS.length * QUESTIONS.length;
  const doneSteps = currentReport * QUESTIONS.length + currentQuestion;
  const percent = Math.round((doneSteps / totalSteps) * 100);
  progressFill.style.width = `${Math.max(percent, 5)}%`;
  progressText.textContent = `Bericht ${currentReport + 1} von ${REPORTS.length} · Frage ${Math.min(currentQuestion + 1, QUESTIONS.length)} von ${QUESTIONS.length}`;
}

function applyTheme(theme) {
  const cls = `theme-${theme}`;
  app.className = `app ${cls}`;
  document.body.className = cls;
}

function showQuestion() {
  const q = QUESTIONS[currentQuestion];
  applyTheme(q.theme);
  questionLabel.textContent = q.label;
  questionHint.textContent = q.hint;
  updateProgress();
}

function revealFact(key) {
  const el = reportBody.querySelector(`.fact[data-q="${key}"]`);
  if (el) {
    const q = QUESTIONS.find((item) => item.key === key);
    el.classList.add("revealed");
    if (q) el.classList.add(`revealed-${q.theme}`);
  }
}

function handleWeiter() {
  const q = QUESTIONS[currentQuestion];
  revealFact(q.key);
  currentQuestion++;

  if (currentQuestion >= QUESTIONS.length) {
    currentQuestion = 0;
    currentReport++;

    if (currentReport >= REPORTS.length) {
      overlay.classList.remove("hidden");
      return;
    }

    setTimeout(() => {
      renderReport();
      showQuestion();
    }, 600);
    return;
  }

  setTimeout(showQuestion, 350);
}

function restart() {
  currentReport = 0;
  currentQuestion = 0;
  shuffleReports();
  overlay.classList.add("hidden");
  renderReport();
  showQuestion();
}

btnWeiter.addEventListener("click", handleWeiter);
btnRestart.addEventListener("click", restart);

btnVocab.addEventListener("click", () => {
  const open = vocabPanel.classList.toggle("hidden");
  btnVocab.setAttribute("aria-expanded", String(!open));
  btnVocab.textContent = open ? "Vokabelliste anzeigen" : "Vokabelliste ausblenden";
});

renderVocabulary();
shuffleReports();
renderReport();
showQuestion();