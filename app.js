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
      `Last year, the town wanted to celebrate New Year's Eve with a special event. For weeks, people talked about the programme in shops and at school. Many families decided to dress up in warm coats and scarves because it was cold outside. Children were especially excited – they had never seen so many firework plans in the local newspaper before.`,
      `<span class="fact" data-q="warum">The town planned the festival to bring people together and create a happy atmosphere before the new year.</span> After a difficult winter, many citizens wanted one bright evening in the centre of town. The council also hoped that families would return every year if the celebration became a tradition. That is why they spent extra money on music, lights, and safety barriers around the square.`,
      `Some people arrived early and listened to quiet music from a small speaker near the fountain. <span class="fact" data-q="wie">At twelve o'clock, the mayor blew the candle out, and then everyone watched colourful fireworks in the sky.</span> First there was silence, then loud cheering when the first firework flew up. Babies covered their ears, teenagers filmed the lights, and grandparents smiled at the sudden colours over the rooftops.`,
      `Vendors sold hot drinks in paper cups, and benches were full hours before the show began. <span class="fact" data-q="wo">The celebration took place in the main square, where a large crowd gathered.</span> Latecomers had to stand at the back, but from there everyone could still see the stage and the dark winter sky above the old buildings.`,
      `<span class="fact" data-q="how">They celebrated by lighting firework after firework until the whole square was bright.</span> Each new firework brought another shout from the crowd, and some people danced in small circles with their friends. A few volunteers passed programmes around so that everyone knew what would happen next.`,
      `The mayor wore a dark coat and welcomed the crowd with a short, friendly speech. <span class="fact" data-q="wer">The mayor lit a big candle on the stage, and children from the school choir sang a song.</span> Parents in the audience recorded the choir on their phones while the youngest singers tried not to giggle on stage.`,
      `Others met friends, took photos, and counted down the last minutes of the old year together. <span class="fact" data-q="wann">It started at midnight on 31 December, when everyone wanted to stay up late.</span> When the last spark disappeared, strangers wished each other "Happy New Year" and slowly walked home. Many said it was the best Silvester celebration they could remember.`,
    ],
  },
  {
    title: "The Summer Parade",
    paragraphs: [
      `Our school took part in the summer parade last June. We practised for two weeks after lessons, learning when to walk, when to stop, and how to hold our flags straight. On the morning of the parade, the classroom smelled of face paint and sunscreen, and nobody could concentrate on maths.`,
      `<span class="fact" data-q="wer">A famous juggler drove to the park, got out of his car, and put on a red costume before the show.</span> He had performed on television before, so some children recognised him immediately and pointed excitedly. Two assistants carried his boxes with balls, clubs, and torches to the little stage near the fountain.`,
      `The sun grew hotter minute by minute, and teachers handed out water bottles. <span class="fact" data-q="how">They raised money by selling drinks from a big bucket at a small stand near the park entrance.</span> The stand was simple, but it was always busy because the weather was warm and people were thirsty. Volunteers also sold badges with the festival theme and collected coins in a tin labelled "charity".`,
      `By half past nine, many classes were already waiting in side streets, adjusting hats and checking their shoes. <span class="fact" data-q="wann">It began on Saturday morning at ten o'clock and lasted about two hours.</span> Nobody wanted anyone to feel ill before the parade had even started, so everyone drank water and stayed in the shade.`,
      `Our head teacher explained the theme in assembly and said that even small donations can help. <span class="fact" data-q="warum">The theme of the festival was "Together for Charity" – the school wanted to raise money for a local charity.</span> The charity supports families who cannot afford school trips or sports clubs for their children. That message was printed on posters and on the back of every programme.`,
      `Spectators stood behind barriers in the narrow streets and waved as the groups passed by. <span class="fact" data-q="wo">The parade went through the old town and ended at the city park.</span> Shop owners came to their doors, and tourists took pictures of the costumes and music. The final part of the route was wider, with trees on both sides leading into the sunny park.`,
      `Our class wore blue and white costumes and marched in time with a drum at the front of the line. <span class="fact" data-q="wie">Students dressed up in special costumes and carried flags while the juggler juggled torches in front of the crowd.</span> Every few minutes we stopped, turned towards the spectators, and cheered. By the end of the day, the organiser said they had raised more money than last year.`,
    ],
  },
  {
    title: "Charity Festival in the Park",
    paragraphs: [
      `The local charity organised a festival to help families in need. Volunteers spent days preparing flyers, baking cakes, and calling artists who might want to perform for free. On the evening before the event, a small team put up tents and carried tables across the grass.`,
      `One stand sold Indian snacks, another offered soup and bread, and a third had cakes with fruit on top. <span class="fact" data-q="wie">Visitors could listen to music, watch a short demonstration, and buy tasty food at different stands.</span> Children liked the craft corner most, where they could paint small symbols on stones and take them home.`,
      `Between lunch time and three o'clock, the festival was at its busiest, with long queues at the food stands. <span class="fact" data-q="wann">It took place on the first Sunday in May, from eleven in the morning until five in the afternoon.</span> The park opened to visitors exactly at eleven, although a few early birds were already waiting at the gate. At five, helpers thanked the crowd over the microphone and began to pack everything away.`,
      `In winter, many families spend more money on heating and have less left for everyday things. <span class="fact" data-q="warum">The charity needed money for new school books and warm meals for children.</span> The charity director explained this clearly in her opening speech so that visitors understood the purpose of the day. She also thanked the town for supporting the project year after year.`,
      `Each item had a price tag, and many people bought more than one thing because they wanted to help. <span class="fact" data-q="how">The volunteers raised money by selling cakes, flags, and small symbols of the town.</span> A teacher from our school bought three flags and joked that her garden would look very patriotic by the end of the day. At the exit, there was also a box for extra donations.`,
      `Ducks swam near the bank while visitors walked along the paths between the stands. <span class="fact" data-q="wo">The event was held in Riverside Park, next to the river.</span> The main stage stood on the wide lawn, with benches and picnic blankets in front of it. From the bridge, you could see the whole festival and the colourful flags above the entrance.`,
      `A painter showed children how to mix colours, and a group of students sold handmade bookmarks. <span class="fact" data-q="wer">Many artists, a choir, and volunteers from the charity took part in the programme.</span> The choir sang twice – once after lunch and again before the closing speech. Volunteers in green T-shirts gave directions, sold tickets for small games, and answered questions from visitors.`,
    ],
  },
  {
    title: "The Street Artist",
    paragraphs: [
      `A street artist came to our town and gave a free performance. Posters with his name appeared on lamp posts one day before the show, and soon everyone in our class was talking about him. My friend said she had seen a video of him online, juggling on a bridge in the rain.`,
      `He moved his feet to the music from a small speaker and smiled whenever the crowd reacted. <span class="fact" data-q="how">He entertained the people by juggling five balls at the same time without dropping one.</span> At the end, he collected donations in his hat and thanked the town for being such a warm audience. Many people stayed to talk to him and bought cold drinks at the café across the street.`,
      `Before the show, he had met the mayor for a cup of tea and talked about his plan. <span class="fact" data-q="warum">He wanted to take part in the town festival and promised to pass a hat around for the local charity.</span> He said he did not want money for himself – only donations for families who need help. The crowd liked that idea and clapped before he had even started juggling.`,
      `At two forty-five, a small crowd was already waiting, and children sat on the ground in the front row. <span class="fact" data-q="wann">The show started at three o'clock in the afternoon – not till three, as the poster promised.</span> A shop assistant came out and listened while customers waited patiently inside. The artist appeared exactly on time, put his case down, and greeted everyone with a short bow.`,
      `Market stalls were still open, so the smell of fresh bread mixed with popcorn from a nearby cart. <span class="fact" data-q="wo">He performed on Market Street, right in front of the old town hall.</span> The town hall steps made a natural stage, and shop windows behind him reflected the afternoon sun. People stopped with shopping bags in their hands and stayed longer than they had planned.`,
      `He began slowly, with one apple, then two, then three, while people counted aloud. <span class="fact" data-q="wie">First he juggled apples and torches, then he asked a child from the crowd to help him.</span> When he lit the torches, the audience became very quiet. Later, a shy girl helped him carry a tray, and everyone cheered her as if she were part of the act.`,
      `He told the audience that he had practised every day after school when he was a teenager. <span class="fact" data-q="wer">The artist was a young juggler who had become famous for his funny shows in other cities.</span> Now he travelled from town to town and often worked with charities at local festivals. Two tourists asked him for a photo, and he agreed, still holding three balls in his left hand.`,
    ],
  },
  {
    title: "Choir Concert with Encore",
    paragraphs: [
      `The school choir gave a concert in the community centre. For months, the students had practised after school, often staying later than their parents expected. The music teacher repeated difficult parts again and again until every vowel and consonant sounded clear.`,
      `Families arrived between six thirty and six fifty, greeting teachers in the foyer and buying drinks for the interval. <span class="fact" data-q="wann">It began on Friday evening at seven o'clock and ended probably not till three encores later.</span> The first song started exactly at seven, and for the next hour the hall was completely still except for the music. When the choir finally left the stage, many people thought the evening was over – but the audience had other ideas.`,
      `Some songs were slow and serious, others fast and full of energy. <span class="fact" data-q="how">They performed by singing louder and louder until the whole hall was clapping and singing along.</span> The last encore was the most popular song of the night, and almost everyone knew the words by then. Outside, the summer evening was still light, and the happy noise spilled into the street.`,
      `The mayor wore a dark suit and thanked the choir for representing the town so well. <span class="fact" data-q="wer">Forty students from the choir, their music teacher, and the mayor sat in the front row.</span> Parents sat further back, waving discreetly whenever they saw their child on stage. Two younger brothers in the audience tried to sing along and were shushed gently by their grandmother.`,
      `The audience clapped in rhythm during the livelier pieces and stood up after the final song. <span class="fact" data-q="wie">The choir sang traditional songs, and at the end the crowd shouted for an encore.</span> When the choir returned, even the mayor sang quietly along to the last chorus. Students left the stage with red cheeks and huge smiles, and parents waited in the foyer with flowers.`,
      `On concert day, helpers put programmes on the seats and tested the lights before the doors opened. <span class="fact" data-q="wo">The concert was in the main hall of the community centre on Hill Road.</span> The hall has high windows, wooden chairs, and a small stage with red curtains. From the back row, you could still see the choir clearly, although the sound was a little softer there.`,
      `Tickets were not expensive, so many families could afford to come and support the project. <span class="fact" data-q="warum">The choir wanted to raise money for a new piano and to celebrate the end of the school year.</span> The old piano in the rehearsal room had cracked keys and could not stay in tune. The music teacher said the concert was both a farewell to the summer term and a step towards better rehearsals next year.`,
    ],
  },
  {
    title: "Art Demonstration at School",
    paragraphs: [
      `An artist visited our class and gave a live demonstration. The day before, we pushed tables to the sides of the art room and covered the floor with old newspaper. Our teacher reminded us to take notes because there would be a short test on the vocabulary afterwards.`,
      `She spoke English clearly and wrote new words on the board when we looked confused. <span class="fact" data-q="wer">A Spanish artist, Ms Rivera, showed us how to paint and told us about her work.</span> Ms Rivera had brought photos of her studio, her brushes, and a festival in her hometown. She also showed us how an abbreviation like "e.g." can appear in short notes about art.`,
      `Sunlight came through the tall windows and lit the paints on the table. <span class="fact" data-q="wo">The demonstration took place in the art room on the second floor of our school.</span> The room smelled of turpentine and fresh coffee from the teacher's mug. From the corridor, other classes could hear us applaud when the artist finished her first picture.`,
      `She passed the torch around so everyone could hold it for a moment. <span class="fact" data-q="how">She explained her work by showing us a small torch as a symbol for hope and light.</span> Then she compared it to the bright colours in her painting and to the festival lights in her photos. Before she left, she promised to send us a picture of the finished wall online.`,
      `In the previous weeks, we had studied flags, torches, and other images that stand for ideas like freedom or hope. <span class="fact" data-q="warum">Our teacher planned the visit because we were learning about symbols and colours in art.</span> The teacher wanted us to see a real artist use those ideas in a modern picture. She had invited Ms Rivera after seeing her work in a small magazine.`,
      `Everyone was already in a holiday mood, but the visit gave us something exciting to focus on. <span class="fact" data-q="wann">It happened on Wednesday afternoon during our last lesson before the holidays.</span> The lesson began at half past one and lasted ninety minutes, which was longer than a normal class. When the bell rang at the end, most students stayed to ask one more question.`,
      `She mixed blue and yellow quickly, explained every step, and asked us to guess what the symbol meant. <span class="fact" data-q="wie">The artist painted a big flag on the wall while we took notes about her ideas.</span> Some students photographed the board, others drew small sketches in their notebooks. The flag was not for a real country – it was an invented symbol for teamwork.`,
    ],
  },
  {
    title: "Spanish Painting Workshop",
    paragraphs: [
      `The community centre offered a free workshop for children during the holidays. My mother saw the notice in the library and signed me up because I like drawing but usually stop when my paints get messy. On the first day, I arrived early and watched the helpers unpack brushes, aprons, and large sheets of paper.`,
      `We painted flamenco dancers, village festivals, and summer nights with fireworks in the sky. <span class="fact" data-q="warum">The main theme was Spanish culture – the centre wanted children to learn something new and have fun.</span> The centre also hoped parents would visit more often if their children enjoyed the library programme. A poster at the entrance explained the theme with simple pictures and short sentences.`,
      `The artist showed us how to plan a picture before touching the paint. <span class="fact" data-q="how">They learned step by step: first draw, then paint, and finally put their pictures on the wall.</span> On the last Thursday, parents came to see a mini exhibition in the corridor. My grandmother said my fireworks looked "probably too bright" – and that made me proud.`,
      `The artist spoke Spanish and English and often repeated instructions so nobody felt lost. <span class="fact" data-q="wer">An artist from Spain and two helpers taught twelve children how to paint.</span> The helpers walked between the tables, refilled water jars, and encouraged shy children to use brighter colours. By the second week, everyone knew each other's names and favourite paints.`,
      `Each session started with a five-minute talk about the day's topic, then two hours of painting with short breaks. <span class="fact" data-q="wann">It ran every Tuesday and Thursday in August, from ten to twelve o'clock.</span> Parents waited in the library café or came back just before twelve to collect us. On rainy days, more children arrived wet and cheerful, shaking water off their jackets by the door.`,
      `Some chose red and yellow for Spanish flags, others painted dark blue skies with golden fireworks. <span class="fact" data-q="wie">The children painted colourful pictures of festivals, flags, and fireworks on big sheets of paper.</span> The room was noisy but friendly, with music from a small radio in the corner. At the end of each lesson, we put our wet pictures on a rack to dry near the window.`,
      `The studio has one long table, a sink for washing brushes, and posters of Spanish festivals on the walls. <span class="fact" data-q="wo">The workshop was in the small studio behind the library.</span> Windows face the garden, so we could open them when the smell of paint became too strong. The librarian sometimes looked in quietly to see what we were creating.`,
    ],
  },
  {
    title: "Indian Cooking Competition",
    paragraphs: [
      `The school kitchen hosted a tasty cooking competition last term. Posters in the corridor showed a big pot and the words "Cook, taste, donate!" Teams signed up during lunch break, and soon the list on the door was full. The smell of spices drifted down the hall on practice days, making everyone hungry during afternoon lessons.`,
      `He arrived early, unpacked boxes of rice, lentils, and jars with colourful powder, and checked the stoves. <span class="fact" data-q="how">They cooked by using fresh vegetables and special spices that the chef had brought in his car.</span> Teams shared equipment fairly, and we needn't wash everything alone because helpers worked in a clear routine. When the winner was announced, everyone clapped and tasted a little from each plate.`,
      `Tables were moved to create space for six cooking stations and one long judging table. <span class="fact" data-q="wo">The competition took place in the school canteen on the ground floor.</span> Parents sat on chairs along the wall, and younger siblings watched through the glass door. The canteen normally smells of soup and bread, but that day it smelled of garlic, curry, and fresh herbs.`,
      `The chef wore a white jacket and walked from team to team, giving tips without taking over their work. <span class="fact" data-q="wer">Six teams of students and one Indian chef from a local restaurant took part.</span> Each team had two or three students and one parent helper who washed vegetables and found missing spoons. Our team worked with Priya's mum, who knew a lot about traditional recipes.`,
      `Some teams decorated their tables with flags and photos, while others focused on neat labels and careful pronunciation. <span class="fact" data-q="wie">Each team followed a traditional recipe and presented their dish to a small crowd of teachers and parents.</span> The audience asked polite questions, e.g. about spices, cooking time, and family traditions. A tongue-twister on one team's poster made the whole room laugh.`,
      `Tickets were sold for tasting plates, and all profits went to a charity that buys food for homeless people. <span class="fact" data-q="warum">The school wanted to raise money for charity and teach students about traditional food from other countries.</span> The head teacher said food can be a bridge between cultures if students learn respect and curiosity. That is why every team also wrote a short note about their dish in English.`,
      `Competitors had thirty minutes to prepare their dishes, so the kitchen was busy and loud from the first minute. <span class="fact" data-q="wann">It was on Thursday at four o'clock, right after the last lesson.</span> Teachers announced the rules in English and repeated the safety instructions calmly. By half past four, small plates were ready for the judges and the hungry audience.`,
    ],
  },
  {
    title: "Puppet Show: The Brave Knight",
    paragraphs: [
      `The drama club performed a puppet show about a famous knight. Rehearsals took place every Monday after school for six weeks, and younger students peeked through the gym door to watch. The club built a small castle from painted boxes and practised moving the puppets without tangling the strings.`,
      `Wooden swords clacked, the crowd shouted advice to the knight, and paper clouds moved across the painted sky. <span class="fact" data-q="wie">The puppets fought, the queen gave a short speech, and in the end the knight destroyed the enemy's flag.</span> When the enemy's flag fell, everyone cheered as if their own school team had won a match. The queen then invited the knight to stand beside her for a final bow.`,
      `The queen wore a golden crown made of cardboard, and the knight had a shiny shield from foil. <span class="fact" data-q="wer">The queen, a brave knight, and an evil enemy appeared as colourful puppets.</span> The enemy laughed loudly whenever he appeared, which made the younger children hide their faces for a second and then giggle. Two puppeteers controlled the main characters, and a third handled the castle gate.`,
      `They had practised those voices for weeks, and some teachers did not recognise their own students behind the cloth. <span class="fact" data-q="how">The drama club performed by moving the puppets on strings and speaking in funny voices.</span> After the story, the club showed the audience how a puppet works and answered questions. Many children asked if the knight puppet could visit their classroom next term.`,
      `The head teacher introduced the drama club and asked the audience to wait for the encore at the end. <span class="fact" data-q="wann">It started on Monday morning during assembly and lasted twenty minutes.</span> Small children sat cross-legged at the front, while older students sat behind them on chairs. When the lights went down, the gym became surprisingly quiet.`,
      `At the beginning, the knight was only a simple guard, but he trained every day and learned to be brave. <span class="fact" data-q="warum">The story showed how the knight became famous for defending his country when the enemy tried to invade and attack the castle.</span> The queen explained in a short speech that peace needs people who defend others without cruelty. The message was serious, but the puppet fights were funny enough for the youngest viewers.`,
      `Chairs were set up in rows on the wooden floor, and a red cloth hid the puppeteers at the back. <span class="fact" data-q="wo">The show was on the small stage in the school gym.</span> The gym usually smells of trainers and sports mats, but that morning it felt like a tiny theatre. Teachers brought classes in group by group so that the room would not become too full.`,
    ],
  },
  {
    title: "Clean-Up Day Routine",
    paragraphs: [
      `Our class took part in a clean-up day near the river. The week before, Mr Stein explained the project in class and showed photos of plastic bottles caught in bushes after floods. We learned new words like "rubbish", "routine", and "charity", and wrote them into our vocabulary books.`,
      `Some rubbish was easy to see, other pieces were hidden in grass or under benches. <span class="fact" data-q="how">We worked by walking along the path in small groups and filling bag after bag with old paper and plastic.</span> We found a lost scarf, a broken toy, and a bucket that someone had thrown away near the reeds. At noon, tired but proud, we carried the last bags to the recycling van.`,
      `The mayor did not just give a speech – he picked up rubbish near the bridge like everyone else. <span class="fact" data-q="wer">All students from Class 8b, our teacher Mr Stein, and the mayor joined the project.</span> Two parents helped with hot tea at the meeting point, and a ranger from the park answered questions about birds and fish. A photographer from the local paper took pictures for a short report in Monday's edition.`,
      `Buses dropped off two other classes nearby, and the mayor's car arrived with boxes of gloves and rubbish bags. <span class="fact" data-q="wo">We met at the parking area next to Riverside Park.</span> From the parking area we could see the path along the water and the benches where people usually eat lunch in summer. A sign warned visitors not to leave litter, but today we were there to remove it.`,
      `Last spring, our class had found old cans and broken glass near the water during a geography walk. <span class="fact" data-q="warum">We wanted to pick up rubbish and raise money for a charity that protects the river.</span> The charity uses donations to clean rivers and teach schools about plastic waste. Mr Stein said our work that day was small, but many small actions can change a place over time.`,
      `The weather was cool and dry, which made the work easier than we had expected. <span class="fact" data-q="wann">The clean-up started on Sunday at nine in the morning and finished at noon.</span> At nine fifteen, Mr Stein divided us into groups and reminded us to stay on the path. By eleven, several buckets were already full, and helpers brought empty ones from the car park.`,
      `First we checked the ground for sharp objects, then we worked in pairs so one person could hold the bag open. <span class="fact" data-q="wie">We followed a simple routine: put on gloves, pick up rubbish, and put it into big buckets.</span> The routine repeated every twenty minutes: empty buckets, sort recycling, drink water, continue. Nobody complained much because the groups tried to collect more than the others – in a friendly way.`,
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