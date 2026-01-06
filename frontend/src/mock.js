// ===================
// CATEGORIES
// ===================
export const mockCategories = [
  'Programming',
  'Geography',
  'Science',
  'React',
  'General Knowledge',
  'Movies & Series'
];

// ===================
// QUIZZES (ONLY ONCE)
// ===================
export const mockQuizzes = [
  {
    id: 'p_1',
    title: 'Programming',
    category: 'Programming',
    description: 'JavaScript programming fundamentals and concepts',
    createdAt: '2024-12-20',
    questions: [
     { id: 'p1', type: 'multiple-choice', question: 'Which keyword declares a variable in JavaScript?', options: ['var','int','string','define'], correctAnswer: 0, explanation: 'var declares variables.' },
    { id: 'p2', type: 'multiple-choice', question: 'Which keyword declares a constant?', options: ['let','var','const','static'], correctAnswer: 2, explanation: 'const creates constants.' },
    { id: 'p3', type: 'multiple-choice', question: 'Which method adds element to array end?', options: ['push()','pop()','shift()','unshift()'], correctAnswer: 0, explanation: 'push() adds to end.' },
    { id: 'p4', type: 'multiple-choice', question: 'Which operator compares value & type?', options: ['==','!=','===','='], correctAnswer: 2, explanation: '=== is strict equality.' },
    { id: 'p5', type: 'multiple-choice', question: 'Which data type is NOT primitive?', options: ['Number','String','Object','Boolean'], correctAnswer: 2, explanation: 'Object is non-primitive.' },

    { id: 'p6', type: 'multiple-choice', question: 'Which loop runs at least once?', options: ['for','while','do-while','foreach'], correctAnswer: 2, explanation: 'do-while runs once minimum.' },
    { id: 'p7', type: 'multiple-choice', question: 'What does typeof null return?', options: ['null','object','undefined','number'], correctAnswer: 1, explanation: 'Known JS bug.' },
    { id: 'p8', type: 'multiple-choice', question: 'Which method converts JSON to object?', options: ['JSON.parse()','JSON.stringify()','JSON.object()','JSON.convert()'], correctAnswer: 0, explanation: 'JSON.parse converts string to object.' },
    { id: 'p9', type: 'multiple-choice', question: 'Which symbol is used for comments?', options: ['//','<!-- -->','**','##'], correctAnswer: 0, explanation: '// is single-line comment.' },
    { id: 'p10', type: 'multiple-choice', question: 'Which keyword creates block scope?', options: ['var','let','static','global'], correctAnswer: 1, explanation: 'let is block-scoped.' },

    { id: 'p11', type: 'multiple-choice', question: 'Which function prints to console?', options: ['print()','log()','console.log()','write()'], correctAnswer: 2, explanation: 'console.log prints output.' },
    { id: 'p12', type: 'multiple-choice', question: 'Which array method removes last item?', options: ['pop()','push()','shift()','slice()'], correctAnswer: 0, explanation: 'pop removes last.' },
    { id: 'p13', type: 'multiple-choice', question: 'Which operator checks property existence?', options: ['has','exists','in','contains'], correctAnswer: 2, explanation: 'in checks property.' },
    { id: 'p14', type: 'multiple-choice', question: 'Which keyword stops a loop?', options: ['stop','exit','break','end'], correctAnswer: 2, explanation: 'break exits loop.' },
    { id: 'p15', type: 'multiple-choice', question: 'Which keyword skips iteration?', options: ['skip','continue','pass','next'], correctAnswer: 1, explanation: 'continue skips iteration.' },

    { id: 'p16', type: 'multiple-choice', question: 'Which method joins array elements?', options: ['join()','merge()','combine()','concat()'], correctAnswer: 0, explanation: 'join joins array.' },
    { id: 'p17', type: 'multiple-choice', question: 'Which operator assigns value?', options: ['==','=','===','!='], correctAnswer: 1, explanation: '= assigns value.' },
    { id: 'p18', type: 'multiple-choice', question: 'Which keyword defines function?', options: ['func','function','def','method'], correctAnswer: 1, explanation: 'function keyword.' },
    { id: 'p19', type: 'multiple-choice', question: 'Which array method creates new array?', options: ['map()','forEach()','push()','pop()'], correctAnswer: 0, explanation: 'map returns new array.' },
    { id: 'p20', type: 'multiple-choice', question: 'Which value is falsy?', options: ['1','true','0','[]'], correctAnswer: 2, explanation: '0 is falsy.' },

    { id: 'p21', type: 'multiple-choice', question: 'Which object stores key-value pairs?', options: ['Array','Map','Set','Object'], correctAnswer: 3, explanation: 'Object stores key-value.' },
    { id: 'p22', type: 'multiple-choice', question: 'Which method removes first element?', options: ['shift()','pop()','slice()','splice()'], correctAnswer: 0, explanation: 'shift removes first.' },
    { id: 'p23', type: 'multiple-choice', question: 'Which function delays execution?', options: ['setTimeout','delay','wait','pause'], correctAnswer: 0, explanation: 'setTimeout delays execution.' },
    { id: 'p24', type: 'multiple-choice', question: 'Which keyword handles errors?', options: ['catch','error','handle','except'], correctAnswer: 0, explanation: 'catch handles errors.' },
    { id: 'p25', type: 'multiple-choice', question: 'Which block always runs?', options: ['try','catch','finally','throw'], correctAnswer: 2, explanation: 'finally always executes.' },

    { id: 'p26', type: 'multiple-choice', question: 'Which array method removes items by index?', options: ['splice()','slice()','pop()','shift()'], correctAnswer: 0, explanation: 'splice removes by index.' },
    { id: 'p27', type: 'multiple-choice', question: 'Which operator checks inequality?', options: ['!=','==','===','='], correctAnswer: 0, explanation: '!= checks inequality.' },
    { id: 'p28', type: 'multiple-choice', question: 'Which keyword creates class?', options: ['object','class','struct','model'], correctAnswer: 1, explanation: 'class creates class.' },
    { id: 'p29', type: 'multiple-choice', question: 'Which function converts string to number?', options: ['Number()','parseInt()','Both','None'], correctAnswer: 2, explanation: 'Both convert to number.' },
    { id: 'p30', type: 'multiple-choice', question: 'Which value means no value?', options: ['null','0','false','NaN'], correctAnswer: 0, explanation: 'null means no value.' },

    { id: 'p31', type: 'multiple-choice', question: 'Which keyword exports module?', options: ['send','export','share','public'], correctAnswer: 1, explanation: 'export exports module.' },
    { id: 'p32', type: 'multiple-choice', question: 'Which keyword imports module?', options: ['include','require','import','use'], correctAnswer: 2, explanation: 'import imports module.' },
    { id: 'p33', type: 'multiple-choice', question: 'Which loop iterates array easily?', options: ['for','for-in','for-of','while'], correctAnswer: 2, explanation: 'for-of iterates values.' },
    { id: 'p34', type: 'multiple-choice', question: 'Which keyword creates promise?', options: ['async','await','Promise','then'], correctAnswer: 2, explanation: 'Promise constructor.' },
    { id: 'p35', type: 'multiple-choice', question: 'Which keyword waits for promise?', options: ['wait','async','await','hold'], correctAnswer: 2, explanation: 'await waits promise.' },

    { id: 'p36', type: 'multiple-choice', question: 'Which method filters array?', options: ['map()','filter()','reduce()','find()'], correctAnswer: 1, explanation: 'filter returns filtered array.' },
    { id: 'p37', type: 'multiple-choice', question: 'Which method finds first match?', options: ['filter()','map()','find()','some()'], correctAnswer: 2, explanation: 'find returns first match.' },
    { id: 'p38', type: 'multiple-choice', question: 'Which operator is logical AND?', options: ['&&','||','!','=='], correctAnswer: 0, explanation: '&& is AND.' },
    { id: 'p39', type: 'multiple-choice', question: 'Which operator is logical OR?', options: ['&&','||','!','==='], correctAnswer: 1, explanation: '|| is OR.' },
    { id: 'p40', type: 'multiple-choice', question: 'Which operator negates value?', options: ['!','&&','||','='], correctAnswer: 0, explanation: '! negates value.' },

    { id: 'p41', type: 'multiple-choice', question: 'Which function checks array condition?', options: ['every()','map()','push()','pop()'], correctAnswer: 0, explanation: 'every checks all elements.' },
    { id: 'p42', type: 'multiple-choice', question: 'Which keyword throws error?', options: ['error','throw','catch','return'], correctAnswer: 1, explanation: 'throw throws error.' },
    { id: 'p43', type: 'multiple-choice', question: 'Which keyword defines async function?', options: ['await','promise','async','then'], correctAnswer: 2, explanation: 'async defines async function.' },
    { id: 'p44', type: 'multiple-choice', question: 'Which operator spreads array?', options: ['...','**','++','--'], correctAnswer: 0, explanation: 'Spread operator.' },
    { id: 'p45', type: 'multiple-choice', question: 'Which method sorts array?', options: ['sort()','order()','arrange()','set()'], correctAnswer: 0, explanation: 'sort sorts array.' },

    { id: 'p46', type: 'multiple-choice', question: 'Which keyword creates object instance?', options: ['new','this','create','make'], correctAnswer: 0, explanation: 'new creates instance.' },
    { id: 'p47', type: 'multiple-choice', question: 'Which value means not a number?', options: ['null','undefined','NaN','0'], correctAnswer: 2, explanation: 'NaN means Not a Number.' },
    { id: 'p48', type: 'multiple-choice', question: 'Which method checks includes?', options: ['has()','contains()','includes()','exists()'], correctAnswer: 2, explanation: 'includes checks presence.' },
    { id: 'p49', type: 'multiple-choice', question: 'Which keyword returns value?', options: ['break','stop','return','exit'], correctAnswer: 2, explanation: 'return returns value.' },
    { id: 'p50', type: 'multiple-choice', question: 'Which operator increments value?', options: ['++','--','+=','*='], correctAnswer: 0, explanation: '++ increments value.' }
  ],
    settings: {
      timePerQuestion: 30,
      timerEnabled: true,
      shuffleQuestions: true
    }
  },

  {
   id: 'g_1',
    title: 'Geography',
    category: 'Geography',
    description: 'World geography covering countries, capitals, rivers, mountains and oceans',
    createdAt: '2024-12-20',
    questions: [
          { id: 'g1', type: 'multiple-choice', question: 'Which is the largest continent in the world?', options: ['Africa','Europe','Asia','North America'], correctAnswer: 2, explanation: 'Asia is the largest continent.' },
    { id: 'g2', type: 'multiple-choice', question: 'What is the capital of Australia?', options: ['Sydney','Melbourne','Canberra','Perth'], correctAnswer: 2, explanation: 'Canberra is the capital of Australia.' },
    { id: 'g3', type: 'multiple-choice', question: 'Which is the longest river in the world?', options: ['Amazon','Nile','Yangtze','Mississippi'], correctAnswer: 1, explanation: 'The Nile is traditionally considered the longest river.' },
    { id: 'g4', type: 'multiple-choice', question: 'Which ocean is the largest?', options: ['Atlantic','Indian','Pacific','Arctic'], correctAnswer: 2, explanation: 'Pacific Ocean is the largest.' },
    { id: 'g5', type: 'multiple-choice', question: 'Mount Everest lies in which mountain range?', options: ['Andes','Alps','Himalayas','Rockies'], correctAnswer: 2, explanation: 'Mount Everest is in the Himalayas.' },

    { id: 'g6', type: 'multiple-choice', question: 'Which country has the largest population?', options: ['USA','China','India','Russia'], correctAnswer: 2, explanation: 'India has the largest population.' },
    { id: 'g7', type: 'multiple-choice', question: 'Which desert is the largest hot desert?', options: ['Gobi','Kalahari','Sahara','Arabian'], correctAnswer: 2, explanation: 'Sahara is the largest hot desert.' },
    { id: 'g8', type: 'multiple-choice', question: 'Which line divides Earth into Northern and Southern Hemispheres?', options: ['Prime Meridian','Equator','Tropic of Cancer','IDL'], correctAnswer: 1, explanation: 'Equator divides Earth.' },
    { id: 'g9', type: 'multiple-choice', question: 'Which continent has the most countries?', options: ['Asia','Europe','Africa','South America'], correctAnswer: 2, explanation: 'Africa has the most countries.' },
    { id: 'g10', type: 'multiple-choice', question: 'Which country is called the Land of the Rising Sun?', options: ['China','Japan','Thailand','Korea'], correctAnswer: 1, explanation: 'Japan is called the Land of the Rising Sun.' },

    { id: 'g11', type: 'multiple-choice', question: 'What is the capital of Canada?', options: ['Toronto','Vancouver','Ottawa','Montreal'], correctAnswer: 2, explanation: 'Ottawa is the capital of Canada.' },
    { id: 'g12', type: 'multiple-choice', question: 'Which is the smallest continent?', options: ['Europe','Australia','Antarctica','South America'], correctAnswer: 1, explanation: 'Australia is the smallest continent.' },
    { id: 'g13', type: 'multiple-choice', question: 'Which sea separates Europe and Africa?', options: ['Red Sea','Black Sea','Mediterranean Sea','Arabian Sea'], correctAnswer: 2, explanation: 'Mediterranean Sea separates Europe and Africa.' },
    { id: 'g14', type: 'multiple-choice', question: 'Which country has the longest coastline?', options: ['USA','Australia','Russia','Canada'], correctAnswer: 3, explanation: 'Canada has the longest coastline.' },
    { id: 'g15', type: 'multiple-choice', question: 'Which is the highest plateau in the world?', options: ['Deccan','Tibetan','Colorado','Iranian'], correctAnswer: 1, explanation: 'The Tibetan Plateau is the highest.' },

    { id: 'g16', type: 'multiple-choice', question: 'Which river flows through Paris?', options: ['Thames','Seine','Danube','Rhine'], correctAnswer: 1, explanation: 'River Seine flows through Paris.' },
    { id: 'g17', type: 'multiple-choice', question: 'Which country is also a continent?', options: ['Greenland','Australia','Iceland','Madagascar'], correctAnswer: 1, explanation: 'Australia is both country and continent.' },
    { id: 'g18', type: 'multiple-choice', question: 'Which mountain range separates Europe and Asia?', options: ['Alps','Himalayas','Ural','Andes'], correctAnswer: 2, explanation: 'Ural Mountains separate Europe and Asia.' },
    { id: 'g19', type: 'multiple-choice', question: 'Which ocean lies between Africa and Australia?', options: ['Pacific','Indian','Atlantic','Southern'], correctAnswer: 1, explanation: 'Indian Ocean lies between them.' },
    { id: 'g20', type: 'multiple-choice', question: 'Which country has the most islands?', options: ['Norway','Philippines','Indonesia','Sweden'], correctAnswer: 3, explanation: 'Sweden has the most islands.' },

    { id: 'g21', type: 'multiple-choice', question: 'Which is the coldest continent?', options: ['Europe','Antarctica','Asia','North America'], correctAnswer: 1, explanation: 'Antarctica is the coldest continent.' },
    { id: 'g22', type: 'multiple-choice', question: 'Which is the largest island in the world?', options: ['Greenland','New Guinea','Borneo','Madagascar'], correctAnswer: 0, explanation: 'Greenland is the largest island.' },
    { id: 'g23', type: 'multiple-choice', question: 'Which country does the Nile NOT flow through?', options: ['Egypt','Sudan','Ethiopia','Nigeria'], correctAnswer: 3, explanation: 'Nile does not flow through Nigeria.' },
    { id: 'g24', type: 'multiple-choice', question: 'Which capital city is also a country?', options: ['Vatican City','Monaco','Singapore','Luxembourg'], correctAnswer: 0, explanation: 'Vatican City is a city-state.' },
    { id: 'g25', type: 'multiple-choice', question: 'Which country has Mount Fuji?', options: ['China','Japan','South Korea','Nepal'], correctAnswer: 1, explanation: 'Mount Fuji is in Japan.' },

    { id: 'g26', type: 'multiple-choice', question: 'Which river is sacred in India?', options: ['Yamuna','Godavari','Ganga','Narmada'], correctAnswer: 2, explanation: 'River Ganga is sacred.' },
    { id: 'g27', type: 'multiple-choice', question: 'Which country is known as the Land of Thousand Lakes?', options: ['Norway','Finland','Canada','Sweden'], correctAnswer: 1, explanation: 'Finland has thousands of lakes.' },
    { id: 'g28', type: 'multiple-choice', question: 'Which continent is completely in the Southern Hemisphere?', options: ['Africa','Australia','South America','Antarctica'], correctAnswer: 3, explanation: 'Antarctica lies entirely in Southern Hemisphere.' },
    { id: 'g29', type: 'multiple-choice', question: 'Which country has the city of Istanbul?', options: ['Greece','Turkey','Iran','Italy'], correctAnswer: 1, explanation: 'Istanbul is in Turkey.' },
    { id: 'g30', type: 'multiple-choice', question: 'Which river flows through London?', options: ['Seine','Thames','Danube','Rhine'], correctAnswer: 1, explanation: 'River Thames flows through London.' },

    { id: 'g31', type: 'multiple-choice', question: 'Which is the deepest ocean trench?', options: ['Java Trench','Mariana Trench','Tonga Trench','Peru Trench'], correctAnswer: 1, explanation: 'Mariana Trench is the deepest.' },
    { id: 'g32', type: 'multiple-choice', question: 'Which country is famous for fjords?', options: ['Sweden','Finland','Norway','Denmark'], correctAnswer: 2, explanation: 'Norway is famous for fjords.' },
    { id: 'g33', type: 'multiple-choice', question: 'Which desert is cold?', options: ['Sahara','Gobi','Thar','Arabian'], correctAnswer: 1, explanation: 'Gobi is a cold desert.' },
    { id: 'g34', type: 'multiple-choice', question: 'Which continent has no permanent population?', options: ['Australia','Antarctica','Europe','Africa'], correctAnswer: 1, explanation: 'Antarctica has no permanent population.' },
    { id: 'g35', type: 'multiple-choice', question: 'Which country has the Great Barrier Reef?', options: ['USA','Australia','Indonesia','Philippines'], correctAnswer: 1, explanation: 'Great Barrier Reef is in Australia.' },

    { id: 'g36', type: 'multiple-choice', question: 'Which river flows into the Bay of Bengal?', options: ['Indus','Ganga','Nile','Amazon'], correctAnswer: 1, explanation: 'Ganga flows into Bay of Bengal.' },
    { id: 'g37', type: 'multiple-choice', question: 'Which country is called the Roof of the World?', options: ['Nepal','Bhutan','Tibet','Peru'], correctAnswer: 2, explanation: 'Tibet is called the Roof of the World.' },
    { id: 'g38', type: 'multiple-choice', question: 'Which continent is the driest?', options: ['Africa','Asia','Australia','Antarctica'], correctAnswer: 3, explanation: 'Antarctica is the driest continent.' },
    { id: 'g39', type: 'multiple-choice', question: 'Which country has the most volcanoes?', options: ['Japan','USA','Indonesia','Philippines'], correctAnswer: 2, explanation: 'Indonesia has the most volcanoes.' },
    { id: 'g40', type: 'multiple-choice', question: 'Which capital city lies on the River Danube?', options: ['Vienna','Paris','Berlin','Madrid'], correctAnswer: 0, explanation: 'Vienna lies on the Danube.' },

    { id: 'g41', type: 'multiple-choice', question: 'Which country is shaped like a boot?', options: ['Spain','Italy','Portugal','Greece'], correctAnswer: 1, explanation: 'Italy is boot-shaped.' },
    { id: 'g42', type: 'multiple-choice', question: 'Which is the largest lake in the world?', options: ['Superior','Victoria','Caspian Sea','Baikal'], correctAnswer: 2, explanation: 'Caspian Sea is the largest lake.' },
    { id: 'g43', type: 'multiple-choice', question: 'Which country has the city of Machu Picchu?', options: ['Chile','Bolivia','Peru','Mexico'], correctAnswer: 2, explanation: 'Machu Picchu is in Peru.' },
    { id: 'g44', type: 'multiple-choice', question: 'Which country has the Sahara Desert?', options: ['Egypt','Sudan','Algeria','All of these'], correctAnswer: 3, explanation: 'Sahara spans multiple countries.' },
    { id: 'g45', type: 'multiple-choice', question: 'Which continent is known as the Dark Continent?', options: ['Asia','Africa','Australia','Europe'], correctAnswer: 1, explanation: 'Africa is historically called the Dark Continent.' },

    { id: 'g46', type: 'multiple-choice', question: 'Which country has the longest river Amazon?', options: ['Brazil','Peru','Colombia','All of these'], correctAnswer: 3, explanation: 'Amazon flows through multiple countries.' },
    { id: 'g47', type: 'multiple-choice', question: 'Which sea is the saltiest?', options: ['Dead Sea','Red Sea','Black Sea','Caspian Sea'], correctAnswer: 0, explanation: 'Dead Sea is the saltiest.' },
    { id: 'g48', type: 'multiple-choice', question: 'Which country has Mount Kilimanjaro?', options: ['Kenya','Tanzania','Uganda','Ethiopia'], correctAnswer: 1, explanation: 'Mount Kilimanjaro is in Tanzania.' },
    { id: 'g49', type: 'multiple-choice', question: 'Which continent is known as the Frozen Continent?', options: ['Europe','Asia','Antarctica','Australia'], correctAnswer: 2, explanation: 'Antarctica is the Frozen Continent.' },
    { id: 'g50', type: 'multiple-choice', question: 'Which country has the capital city Rome?', options: ['Spain','France','Italy','Greece'], correctAnswer: 2, explanation: 'Rome is the capital of Italy.' }
  ],
    settings: {
      timePerQuestion: 35,
      timerEnabled: true,
      shuffleQuestions: true
    }
  },

  {
   id: 's_1',
    title: 'Science',
    category: 'Science',
    description: 'Physics, Chemistry and Biology basics',
    createdAt: '2024-12-20',
    questions: [
       { id: 's1', type: 'multiple-choice', question: 'What is the chemical symbol for water?', options: ['H2O','O2','CO2','HO'], correctAnswer: 0, explanation: 'Water is H2O.' },
    { id: 's2', type: 'multiple-choice', question: 'Which planet is known as the Red Planet?', options: ['Earth','Venus','Mars','Jupiter'], correctAnswer: 2, explanation: 'Mars is called the Red Planet.' },
    { id: 's3', type: 'multiple-choice', question: 'What gas do plants absorb?', options: ['Oxygen','Carbon Dioxide','Nitrogen','Hydrogen'], correctAnswer: 1, explanation: 'Plants absorb CO₂.' },
    { id: 's4', type: 'multiple-choice', question: 'Which organ pumps blood?', options: ['Lungs','Brain','Heart','Liver'], correctAnswer: 2, explanation: 'Heart pumps blood.' },
    { id: 's5', type: 'multiple-choice', question: 'What is the boiling point of water?', options: ['50°C','100°C','150°C','200°C'], correctAnswer: 1, explanation: 'Water boils at 100°C.' },

    { id: 's6', type: 'multiple-choice', question: 'Which vitamin is produced by sunlight?', options: ['Vitamin A','Vitamin B','Vitamin C','Vitamin D'], correctAnswer: 3, explanation: 'Vitamin D is produced by sunlight.' },
    { id: 's7', type: 'multiple-choice', question: 'What is the hardest natural substance?', options: ['Gold','Iron','Diamond','Silver'], correctAnswer: 2, explanation: 'Diamond is the hardest.' },
    { id: 's8', type: 'multiple-choice', question: 'Which gas is essential for respiration?', options: ['Nitrogen','Oxygen','Carbon Dioxide','Helium'], correctAnswer: 1, explanation: 'Oxygen is essential.' },
    { id: 's9', type: 'multiple-choice', question: 'What force pulls objects toward Earth?', options: ['Magnetism','Friction','Gravity','Energy'], correctAnswer: 2, explanation: 'Gravity pulls objects.' },
    { id: 's10', type: 'multiple-choice', question: 'Which organ is responsible for breathing?', options: ['Heart','Kidney','Lungs','Brain'], correctAnswer: 2, explanation: 'Lungs help in breathing.' },

    { id: 's11', type: 'multiple-choice', question: 'What part of the plant makes food?', options: ['Root','Stem','Leaf','Flower'], correctAnswer: 2, explanation: 'Leaves make food.' },
    { id: 's12', type: 'multiple-choice', question: 'Which metal is liquid at room temperature?', options: ['Iron','Mercury','Copper','Aluminium'], correctAnswer: 1, explanation: 'Mercury is liquid.' },
    { id: 's13', type: 'multiple-choice', question: 'What is the unit of force?', options: ['Joule','Pascal','Newton','Watt'], correctAnswer: 2, explanation: 'Force is measured in Newton.' },
    { id: 's14', type: 'multiple-choice', question: 'Which blood cells fight infection?', options: ['Red','White','Platelets','Plasma'], correctAnswer: 1, explanation: 'White blood cells fight infection.' },
    { id: 's15', type: 'multiple-choice', question: 'What is the center of an atom called?', options: ['Electron','Neutron','Nucleus','Proton'], correctAnswer: 2, explanation: 'Nucleus is the center.' },

    { id: 's16', type: 'multiple-choice', question: 'Which organ filters blood?', options: ['Heart','Liver','Kidney','Lungs'], correctAnswer: 2, explanation: 'Kidneys filter blood.' },
    { id: 's17', type: 'multiple-choice', question: 'What is photosynthesis?', options: ['Respiration','Food making','Digestion','Excretion'], correctAnswer: 1, explanation: 'Photosynthesis is food making.' },
    { id: 's18', type: 'multiple-choice', question: 'Which gas is most abundant in air?', options: ['Oxygen','Carbon Dioxide','Nitrogen','Hydrogen'], correctAnswer: 2, explanation: 'Nitrogen is most abundant.' },
    { id: 's19', type: 'multiple-choice', question: 'Which planet has rings?', options: ['Mars','Earth','Saturn','Venus'], correctAnswer: 2, explanation: 'Saturn has rings.' },
    { id: 's20', type: 'multiple-choice', question: 'What is the SI unit of energy?', options: ['Watt','Joule','Newton','Volt'], correctAnswer: 1, explanation: 'Energy is measured in Joules.' },

    { id: 's21', type: 'multiple-choice', question: 'Which vitamin helps in blood clotting?', options: ['Vitamin A','Vitamin B','Vitamin K','Vitamin D'], correctAnswer: 2, explanation: 'Vitamin K helps clotting.' },
    { id: 's22', type: 'multiple-choice', question: 'What is the speed of light?', options: ['150,000 km/s','300,000 km/s','450,000 km/s','600,000 km/s'], correctAnswer: 1, explanation: 'Speed of light is ~300,000 km/s.' },
    { id: 's23', type: 'multiple-choice', question: 'Which part controls the body?', options: ['Heart','Lungs','Brain','Spine'], correctAnswer: 2, explanation: 'Brain controls body.' },
    { id: 's24', type: 'multiple-choice', question: 'Which metal is used in electric wires?', options: ['Iron','Copper','Gold','Silver'], correctAnswer: 1, explanation: 'Copper conducts electricity well.' },
    { id: 's25', type: 'multiple-choice', question: 'What causes rusting?', options: ['Water','Air','Oxygen','All of these'], correctAnswer: 3, explanation: 'Rusting needs oxygen and moisture.' },

    { id: 's26', type: 'multiple-choice', question: 'Which planet is closest to the Sun?', options: ['Venus','Earth','Mercury','Mars'], correctAnswer: 2, explanation: 'Mercury is closest.' },
    { id: 's27', type: 'multiple-choice', question: 'Which organ helps in digestion?', options: ['Heart','Stomach','Lungs','Kidney'], correctAnswer: 1, explanation: 'Stomach digests food.' },
    { id: 's28', type: 'multiple-choice', question: 'What is the unit of electric current?', options: ['Volt','Ampere','Ohm','Watt'], correctAnswer: 1, explanation: 'Current is measured in Ampere.' },
    { id: 's29', type: 'multiple-choice', question: 'Which gas is used in balloons?', options: ['Hydrogen','Oxygen','Nitrogen','Carbon Dioxide'], correctAnswer: 0, explanation: 'Hydrogen is lighter than air.' },
    { id: 's30', type: 'multiple-choice', question: 'Which part of eye controls light entry?', options: ['Lens','Pupil','Retina','Cornea'], correctAnswer: 1, explanation: 'Pupil controls light.' },

    { id: 's31', type: 'multiple-choice', question: 'What is the main source of energy on Earth?', options: ['Moon','Sun','Wind','Water'], correctAnswer: 1, explanation: 'Sun is main energy source.' },
    { id: 's32', type: 'multiple-choice', question: 'Which bone protects the brain?', options: ['Rib','Skull','Spine','Pelvis'], correctAnswer: 1, explanation: 'Skull protects brain.' },
    { id: 's33', type: 'multiple-choice', question: 'Which element is needed for breathing?', options: ['Carbon','Oxygen','Nitrogen','Hydrogen'], correctAnswer: 1, explanation: 'Oxygen is needed.' },
    { id: 's34', type: 'multiple-choice', question: 'Which instrument measures temperature?', options: ['Barometer','Thermometer','Hygrometer','Altimeter'], correctAnswer: 1, explanation: 'Thermometer measures temperature.' },
    { id: 's35', type: 'multiple-choice', question: 'Which vitamin is good for eyesight?', options: ['Vitamin A','Vitamin B','Vitamin C','Vitamin D'], correctAnswer: 0, explanation: 'Vitamin A improves eyesight.' },

    { id: 's36', type: 'multiple-choice', question: 'What is the unit of power?', options: ['Joule','Volt','Watt','Ampere'], correctAnswer: 2, explanation: 'Power is measured in Watt.' },
    { id: 's37', type: 'multiple-choice', question: 'Which gas causes global warming?', options: ['Oxygen','Carbon Dioxide','Nitrogen','Hydrogen'], correctAnswer: 1, explanation: 'CO₂ causes global warming.' },
    { id: 's38', type: 'multiple-choice', question: 'Which part of plant absorbs water?', options: ['Stem','Leaf','Root','Flower'], correctAnswer: 2, explanation: 'Roots absorb water.' },
    { id: 's39', type: 'multiple-choice', question: 'Which acid is in lemon?', options: ['Sulphuric','Citric','Hydrochloric','Acetic'], correctAnswer: 1, explanation: 'Lemon contains citric acid.' },
    { id: 's40', type: 'multiple-choice', question: 'Which planet is called Earth’s twin?', options: ['Mars','Venus','Jupiter','Mercury'], correctAnswer: 1, explanation: 'Venus is Earth’s twin.' },

    { id: 's41', type: 'multiple-choice', question: 'Which blood group is universal donor?', options: ['A','B','AB','O'], correctAnswer: 3, explanation: 'O is universal donor.' },
    { id: 's42', type: 'multiple-choice', question: 'What is the unit of sound?', options: ['Decibel','Hertz','Watt','Volt'], correctAnswer: 0, explanation: 'Sound is measured in decibels.' },
    { id: 's43', type: 'multiple-choice', question: 'Which gas do humans exhale?', options: ['Oxygen','Carbon Dioxide','Nitrogen','Hydrogen'], correctAnswer: 1, explanation: 'Humans exhale CO₂.' },
    { id: 's44', type: 'multiple-choice', question: 'Which part of cell contains DNA?', options: ['Cytoplasm','Ribosome','Nucleus','Cell wall'], correctAnswer: 2, explanation: 'DNA is in nucleus.' },
    { id: 's45', type: 'multiple-choice', question: 'Which organ helps in hearing?', options: ['Eye','Nose','Ear','Tongue'], correctAnswer: 2, explanation: 'Ear helps in hearing.' },

    { id: 's46', type: 'multiple-choice', question: 'Which energy comes from flowing water?', options: ['Solar','Wind','Hydro','Thermal'], correctAnswer: 2, explanation: 'Hydro energy comes from water.' },
    { id: 's47', type: 'multiple-choice', question: 'What is freezing point of water?', options: ['0°C','50°C','100°C','-10°C'], correctAnswer: 0, explanation: 'Water freezes at 0°C.' },
    { id: 's48', type: 'multiple-choice', question: 'Which metal is attracted by magnet?', options: ['Copper','Iron','Gold','Silver'], correctAnswer: 1, explanation: 'Iron is magnetic.' },
    { id: 's49', type: 'multiple-choice', question: 'Which planet has the most moons?', options: ['Earth','Mars','Jupiter','Venus'], correctAnswer: 2, explanation: 'Jupiter has most moons.' },
    { id: 's50', type: 'multiple-choice', question: 'Which gas protects Earth from UV rays?', options: ['Oxygen','Ozone','Nitrogen','Hydrogen'], correctAnswer: 1, explanation: 'Ozone layer protects from UV.' }
  ],
    settings: {
      timePerQuestion: 35,
      timerEnabled: true,
      shuffleQuestions: true
    }
  },

  {
  id: 'react_1',
  title: 'React',
  category: 'React',
  description: 'React.js concepts, hooks and components',
  createdAt: '2024-12-20',
  questions: [

       { id: 'r1', type: 'multiple-choice', question: 'What is React?', options: ['A framework','A library','A language','A database'], correctAnswer: 1, explanation: 'React is a JavaScript library.' },
    { id: 'r2', type: 'multiple-choice', question: 'Who developed React?', options: ['Google','Facebook','Microsoft','Amazon'], correctAnswer: 1, explanation: 'React was developed by Facebook.' },
    { id: 'r3', type: 'multiple-choice', question: 'What is JSX?', options: ['CSS','HTML','JavaScript XML','JSON'], correctAnswer: 2, explanation: 'JSX stands for JavaScript XML.' },
    { id: 'r4', type: 'multiple-choice', question: 'Which hook manages state?', options: ['useEffect','useContext','useState','useRef'], correctAnswer: 2, explanation: 'useState manages state.' },
    { id: 'r5', type: 'multiple-choice', question: 'What does useEffect do?', options: ['Handles UI','Handles side effects','Creates state','Routes pages'], correctAnswer: 1, explanation: 'useEffect handles side effects.' },

    { id: 'r6', type: 'multiple-choice', question: 'React components must start with?', options: ['Lowercase','Number','Uppercase','Symbol'], correctAnswer: 2, explanation: 'Components must start with uppercase.' },
    { id: 'r7', type: 'multiple-choice', question: 'What is props?', options: ['State','Arguments','CSS','Hooks'], correctAnswer: 1, explanation: 'Props are component arguments.' },
    { id: 'r8', type: 'multiple-choice', question: 'Can props be changed?', options: ['Yes','No','Sometimes','Only in hooks'], correctAnswer: 1, explanation: 'Props are read-only.' },
    { id: 'r9', type: 'multiple-choice', question: 'Which hook runs on component mount?', options: ['useState','useEffect','useRef','useMemo'], correctAnswer: 1, explanation: 'useEffect runs on mount.' },
    { id: 'r10', type: 'multiple-choice', question: 'What is virtual DOM?', options: ['Real DOM','Copy of DOM','Browser DOM','HTML'], correctAnswer: 1, explanation: 'Virtual DOM is a lightweight copy.' },

    { id: 'r11', type: 'multiple-choice', question: 'Which hook accesses context?', options: ['useContext','useReducer','useMemo','useRef'], correctAnswer: 0, explanation: 'useContext accesses context.' },
    { id: 'r12', type: 'multiple-choice', question: 'Which hook improves performance?', options: ['useState','useEffect','useMemo','useContext'], correctAnswer: 2, explanation: 'useMemo memoizes values.' },
    { id: 'r13', type: 'multiple-choice', question: 'What does useRef return?', options: ['Value','DOM','Mutable object','Function'], correctAnswer: 2, explanation: 'useRef returns mutable object.' },
    { id: 'r14', type: 'multiple-choice', question: 'Which hook replaces Redux sometimes?', options: ['useEffect','useReducer','useRef','useMemo'], correctAnswer: 1, explanation: 'useReducer manages complex state.' },
    { id: 'r15', type: 'multiple-choice', question: 'Which method renders React app?', options: ['render()','ReactDOM.render()','createRoot','Both B & C'], correctAnswer: 3, explanation: 'Both methods can render apps.' },

    { id: 'r16', type: 'multiple-choice', question: 'Key prop is used for?', options: ['Styling','Routing','Uniqueness','Hooks'], correctAnswer: 2, explanation: 'Key helps identify elements.' },
    { id: 'r17', type: 'multiple-choice', question: 'Fragments are used to?', options: ['Style','Group elements','Add props','Add state'], correctAnswer: 1, explanation: 'Fragments group elements.' },
    { id: 'r18', type: 'multiple-choice', question: 'Which hook handles form input?', options: ['useState','useEffect','useRef','All'], correctAnswer: 3, explanation: 'All can handle forms.' },
    { id: 'r19', type: 'multiple-choice', question: 'Controlled component uses?', options: ['Props','State','Context','Ref'], correctAnswer: 1, explanation: 'Controlled components use state.' },
    { id: 'r20', type: 'multiple-choice', question: 'Uncontrolled component uses?', options: ['State','Props','Ref','Context'], correctAnswer: 2, explanation: 'Uncontrolled uses ref.' },

    { id: 'r21', type: 'multiple-choice', question: 'React Router is used for?', options: ['Styling','API','Routing','State'], correctAnswer: 2, explanation: 'Used for routing.' },
    { id: 'r22', type: 'multiple-choice', question: 'Which hook navigates routes?', options: ['useEffect','useNavigate','useHistory','useRoute'], correctAnswer: 1, explanation: 'useNavigate handles navigation.' },
    { id: 'r23', type: 'multiple-choice', question: 'What is SPA?', options: ['Single Page App','Server App','Static App','Simple App'], correctAnswer: 0, explanation: 'React apps are SPAs.' },
    { id: 'r24', type: 'multiple-choice', question: 'Which hook optimizes re-renders?', options: ['useMemo','useCallback','Both','None'], correctAnswer: 2, explanation: 'Both optimize performance.' },
    { id: 'r25', type: 'multiple-choice', question: 'useCallback returns?', options: ['Value','Function','Object','Array'], correctAnswer: 1, explanation: 'useCallback returns memoized function.' },

    { id: 'r26', type: 'multiple-choice', question: 'Which lifecycle runs once?', options: ['render','componentDidMount','componentDidUpdate','Unmount'], correctAnswer: 1, explanation: 'componentDidMount runs once.' },
    { id: 'r27', type: 'multiple-choice', question: 'Hooks work in?', options: ['Class','Function','Both','None'], correctAnswer: 1, explanation: 'Hooks work in functional components.' },
    { id: 'r28', type: 'multiple-choice', question: 'Which hook accesses DOM?', options: ['useRef','useEffect','useState','useMemo'], correctAnswer: 0, explanation: 'useRef accesses DOM.' },
    { id: 'r29', type: 'multiple-choice', question: 'StrictMode does?', options: ['Break app','Check issues','Improve UI','Add CSS'], correctAnswer: 1, explanation: 'StrictMode checks potential problems.' },
    { id: 'r30', type: 'multiple-choice', question: 'Which hook runs cleanup?', options: ['useEffect','useState','useRef','useMemo'], correctAnswer: 0, explanation: 'Cleanup runs inside useEffect.' },

    { id: 'r31', type: 'multiple-choice', question: 'What is lifting state up?', options: ['Move state down','Share state','Delete state','Duplicate'], correctAnswer: 1, explanation: 'Used to share state.' },
    { id: 'r32', type: 'multiple-choice', question: 'Which hook handles global state?', options: ['useState','useContext','useEffect','useRef'], correctAnswer: 1, explanation: 'useContext handles global data.' },
    { id: 'r33', type: 'multiple-choice', question: 'Which hook prevents re-render?', options: ['useMemo','useRef','Both','None'], correctAnswer: 2, explanation: 'Both prevent unnecessary renders.' },
    { id: 'r34', type: 'multiple-choice', question: 'What is prop drilling?', options: ['Passing props deeply','State bug','Hook error','CSS issue'], correctAnswer: 0, explanation: 'Prop drilling is deep prop passing.' },
    { id: 'r35', type: 'multiple-choice', question: 'Solution for prop drilling?', options: ['Redux','Context','Both','None'], correctAnswer: 2, explanation: 'Redux & Context solve it.' },

    { id: 'r36', type: 'multiple-choice', question: 'Which file starts React app?', options: ['index.js','App.js','main.js','start.js'], correctAnswer: 0, explanation: 'index.js starts app.' },
    { id: 'r37', type: 'multiple-choice', question: 'React keys must be?', options: ['Random','Unique','Index','Optional'], correctAnswer: 1, explanation: 'Keys must be unique.' },
    { id: 'r38', type: 'multiple-choice', question: 'Which hook handles async calls?', options: ['useState','useEffect','useRef','useMemo'], correctAnswer: 1, explanation: 'useEffect handles async.' },
    { id: 'r39', type: 'multiple-choice', question: 'Which tool builds React app?', options: ['Webpack','Vite','CRA','All'], correctAnswer: 3, explanation: 'All can build React apps.' },
    { id: 'r40', type: 'multiple-choice', question: 'React is based on?', options: ['MVC','Component architecture','Monolith','Procedural'], correctAnswer: 1, explanation: 'React uses component architecture.' },

    { id: 'r41', type: 'multiple-choice', question: 'Which hook stores previous value?', options: ['useState','useEffect','useRef','useMemo'], correctAnswer: 2, explanation: 'useRef stores previous value.' },
    { id: 'r42', type: 'multiple-choice', question: 'Which hook memoizes function?', options: ['useMemo','useCallback','useRef','useEffect'], correctAnswer: 1, explanation: 'useCallback memoizes function.' },
    { id: 'r43', type: 'multiple-choice', question: 'JSX allows writing?', options: ['CSS','HTML in JS','SQL','JSON'], correctAnswer: 1, explanation: 'JSX allows HTML in JS.' },
    { id: 'r44', type: 'multiple-choice', question: 'Which hook listens to dependency change?', options: ['useState','useEffect','useRef','useMemo'], correctAnswer: 1, explanation: 'useEffect listens to dependencies.' },
    { id: 'r45', type: 'multiple-choice', question: 'Which hook is synchronous?', options: ['useState','useEffect','useMemo','useRef'], correctAnswer: 0, explanation: 'useState updates state.' },

    { id: 'r46', type: 'multiple-choice', question: 'Which hook is asynchronous?', options: ['useState','useEffect','useMemo','useRef'], correctAnswer: 1, explanation: 'useEffect runs async.' },
    { id: 'r47', type: 'multiple-choice', question: 'Which hook runs before paint?', options: ['useEffect','useLayoutEffect','useMemo','useRef'], correctAnswer: 1, explanation: 'useLayoutEffect runs before paint.' },
    { id: 'r48', type: 'multiple-choice', question: 'Which hook avoids re-creation?', options: ['useMemo','useCallback','Both','None'], correctAnswer: 2, explanation: 'Both avoid re-creation.' },
    { id: 'r49', type: 'multiple-choice', question: 'Which hook manages reducer?', options: ['useReducer','useState','useEffect','useMemo'], correctAnswer: 0, explanation: 'useReducer manages reducer logic.' },
    { id: 'r50', type: 'multiple-choice', question: 'React updates UI using?', options: ['DOM','Virtual DOM','Browser','Server'], correctAnswer: 1, explanation: 'React updates using Virtual DOM.' }
    ],
    settings: {
      timePerQuestion: 30,
      timerEnabled: true,
      shuffleQuestions: true
    }
  },

 {
  id: 'gk_1',   
  title: 'General Knowledge',
  category: 'General Knowledge',
  description: 'General knowledge and current affairs',
  createdAt: '2024-12-20',
  questions: [
      { id: 'gk1', type: 'multiple-choice', question: 'Who is known as the Father of the Nation in India?', options: ['Jawaharlal Nehru','Mahatma Gandhi','Subhash Chandra Bose','Bhagat Singh'], correctAnswer: 1, explanation: 'Mahatma Gandhi is called the Father of the Nation.' },
    { id: 'gk2', type: 'multiple-choice', question: 'What is the national animal of India?', options: ['Lion','Elephant','Tiger','Leopard'], correctAnswer: 2, explanation: 'Tiger is the national animal of India.' },
    { id: 'gk3', type: 'multiple-choice', question: 'Which is the largest democracy in the world?', options: ['USA','India','UK','France'], correctAnswer: 1, explanation: 'India is the largest democracy.' },
    { id: 'gk4', type: 'multiple-choice', question: 'Who wrote the Indian national anthem?', options: ['Bankim Chandra','Rabindranath Tagore','Sarojini Naidu','Subhash Bose'], correctAnswer: 1, explanation: 'Rabindranath Tagore wrote Jana Gana Mana.' },
    { id: 'gk5', type: 'multiple-choice', question: 'Which planet is closest to the Sun?', options: ['Venus','Earth','Mercury','Mars'], correctAnswer: 2, explanation: 'Mercury is closest to the Sun.' },

    { id: 'gk6', type: 'multiple-choice', question: 'Who was the first President of India?', options: ['Rajendra Prasad','Radhakrishnan','Nehru','Patel'], correctAnswer: 0, explanation: 'Dr. Rajendra Prasad was the first President.' },
    { id: 'gk7', type: 'multiple-choice', question: 'Which country gifted the Statue of Liberty to USA?', options: ['France','UK','Germany','Canada'], correctAnswer: 0, explanation: 'France gifted the Statue of Liberty.' },
    { id: 'gk8', type: 'multiple-choice', question: 'Which sport is associated with Wimbledon?', options: ['Cricket','Tennis','Football','Badminton'], correctAnswer: 1, explanation: 'Wimbledon is a tennis tournament.' },
    { id: 'gk9', type: 'multiple-choice', question: 'Which is the longest river in India?', options: ['Yamuna','Brahmaputra','Ganga','Godavari'], correctAnswer: 2, explanation: 'Ganga is the longest river in India.' },
    { id: 'gk10', type: 'multiple-choice', question: 'Who discovered gravity?', options: ['Einstein','Newton','Galileo','Tesla'], correctAnswer: 1, explanation: 'Sir Isaac Newton discovered gravity.' },

    { id: 'gk11', type: 'multiple-choice', question: 'What is the national currency of Japan?', options: ['Won','Yen','Dollar','Peso'], correctAnswer: 1, explanation: 'Yen is Japan’s currency.' },
    { id: 'gk12', type: 'multiple-choice', question: 'Which is the smallest planet?', options: ['Mars','Venus','Mercury','Earth'], correctAnswer: 2, explanation: 'Mercury is the smallest planet.' },
    { id: 'gk13', type: 'multiple-choice', question: 'Who was the first man to walk on the Moon?', options: ['Buzz Aldrin','Yuri Gagarin','Neil Armstrong','Michael Collins'], correctAnswer: 2, explanation: 'Neil Armstrong walked on the Moon.' },
    { id: 'gk14', type: 'multiple-choice', question: 'Which is the national bird of India?', options: ['Sparrow','Peacock','Eagle','Parrot'], correctAnswer: 1, explanation: 'Peacock is the national bird.' },
    { id: 'gk15', type: 'multiple-choice', question: 'Which gas do humans breathe in?', options: ['Nitrogen','Oxygen','Carbon Dioxide','Hydrogen'], correctAnswer: 1, explanation: 'Humans breathe oxygen.' },

    { id: 'gk16', type: 'multiple-choice', question: 'Who is the author of Harry Potter?', options: ['JRR Tolkien','JK Rowling','George Martin','Stephen King'], correctAnswer: 1, explanation: 'Harry Potter is written by JK Rowling.' },
    { id: 'gk17', type: 'multiple-choice', question: 'Which day is celebrated as World Environment Day?', options: ['5 June','22 April','15 August','1 May'], correctAnswer: 0, explanation: 'World Environment Day is on 5 June.' },
    { id: 'gk18', type: 'multiple-choice', question: 'Which country is known as the Land of Rising Sun?', options: ['China','Japan','Thailand','Korea'], correctAnswer: 1, explanation: 'Japan is called Land of Rising Sun.' },
    { id: 'gk19', type: 'multiple-choice', question: 'What is the capital of France?', options: ['Rome','Berlin','Paris','Madrid'], correctAnswer: 2, explanation: 'Paris is the capital of France.' },
    { id: 'gk20', type: 'multiple-choice', question: 'Who invented the telephone?', options: ['Edison','Bell','Tesla','Newton'], correctAnswer: 1, explanation: 'Alexander Graham Bell invented the telephone.' },

    { id: 'gk21', type: 'multiple-choice', question: 'Which Indian city is called Silicon Valley?', options: ['Delhi','Hyderabad','Bengaluru','Pune'], correctAnswer: 2, explanation: 'Bengaluru is Silicon Valley of India.' },
    { id: 'gk22', type: 'multiple-choice', question: 'Which is the largest ocean?', options: ['Atlantic','Indian','Pacific','Arctic'], correctAnswer: 2, explanation: 'Pacific Ocean is the largest.' },
    { id: 'gk23', type: 'multiple-choice', question: 'Which festival is known as Festival of Lights?', options: ['Holi','Eid','Diwali','Christmas'], correctAnswer: 2, explanation: 'Diwali is the festival of lights.' },
    { id: 'gk24', type: 'multiple-choice', question: 'Which country hosted FIFA 2022?', options: ['Brazil','Russia','Qatar','France'], correctAnswer: 2, explanation: 'Qatar hosted FIFA 2022.' },
    { id: 'gk25', type: 'multiple-choice', question: 'Who was the first Prime Minister of India?', options: ['Gandhi','Patel','Nehru','Bose'], correctAnswer: 2, explanation: 'Jawaharlal Nehru was the first PM.' },

    { id: 'gk26', type: 'multiple-choice', question: 'Which is the hardest substance?', options: ['Iron','Gold','Diamond','Silver'], correctAnswer: 2, explanation: 'Diamond is the hardest.' },
    { id: 'gk27', type: 'multiple-choice', question: 'What is the capital of India?', options: ['Mumbai','Delhi','New Delhi','Chennai'], correctAnswer: 2, explanation: 'New Delhi is the capital.' },
    { id: 'gk28', type: 'multiple-choice', question: 'Which blood group is universal donor?', options: ['A','B','AB','O'], correctAnswer: 3, explanation: 'O is universal donor.' },
    { id: 'gk29', type: 'multiple-choice', question: 'Which country has Taj Mahal?', options: ['India','Pakistan','Bangladesh','Nepal'], correctAnswer: 0, explanation: 'Taj Mahal is in India.' },
    { id: 'gk30', type: 'multiple-choice', question: 'Which organ purifies blood?', options: ['Heart','Liver','Kidney','Lungs'], correctAnswer: 2, explanation: 'Kidneys purify blood.' },

    { id: 'gk31', type: 'multiple-choice', question: 'Which is the fastest land animal?', options: ['Lion','Cheetah','Horse','Tiger'], correctAnswer: 1, explanation: 'Cheetah is fastest.' },
    { id: 'gk32', type: 'multiple-choice', question: 'Who invented the light bulb?', options: ['Newton','Bell','Edison','Tesla'], correctAnswer: 2, explanation: 'Thomas Edison invented the bulb.' },
    { id: 'gk33', type: 'multiple-choice', question: 'Which country has Eiffel Tower?', options: ['Italy','France','UK','Germany'], correctAnswer: 1, explanation: 'Eiffel Tower is in France.' },
    { id: 'gk34', type: 'multiple-choice', question: 'Which gas is essential for life?', options: ['Oxygen','Hydrogen','Nitrogen','Carbon'], correctAnswer: 0, explanation: 'Oxygen is essential.' },
    { id: 'gk35', type: 'multiple-choice', question: 'Who is known as Missile Man of India?', options: ['APJ Abdul Kalam','Nehru','Vikram Sarabhai','Homi Bhabha'], correctAnswer: 0, explanation: 'APJ Abdul Kalam is Missile Man.' },

    { id: 'gk36', type: 'multiple-choice', question: 'Which Indian state has the longest coastline?', options: ['Kerala','Tamil Nadu','Gujarat','Maharashtra'], correctAnswer: 2, explanation: 'Gujarat has the longest coastline.' },
    { id: 'gk37', type: 'multiple-choice', question: 'Which is the smallest bone?', options: ['Femur','Stapes','Ulna','Tibia'], correctAnswer: 1, explanation: 'Stapes is the smallest bone.' },
    { id: 'gk38', type: 'multiple-choice', question: 'Which country is famous for pyramids?', options: ['Mexico','Peru','Egypt','India'], correctAnswer: 2, explanation: 'Egypt is famous for pyramids.' },
    { id: 'gk39', type: 'multiple-choice', question: 'Which instrument measures earthquakes?', options: ['Thermometer','Barometer','Seismograph','Hygrometer'], correctAnswer: 2, explanation: 'Seismograph measures earthquakes.' },
    { id: 'gk40', type: 'multiple-choice', question: 'Which metal is liquid?', options: ['Iron','Mercury','Copper','Silver'], correctAnswer: 1, explanation: 'Mercury is liquid.' },

    { id: 'gk41', type: 'multiple-choice', question: 'Which planet is known as Blue Planet?', options: ['Earth','Neptune','Uranus','Mars'], correctAnswer: 0, explanation: 'Earth is the Blue Planet.' },
    { id: 'gk42', type: 'multiple-choice', question: 'Which festival is known as Festival of Colors?', options: ['Diwali','Holi','Eid','Baisakhi'], correctAnswer: 1, explanation: 'Holi is festival of colors.' },
    { id: 'gk43', type: 'multiple-choice', question: 'Who was the first woman Prime Minister of India?', options: ['Sonia Gandhi','Indira Gandhi','Pratibha Patil','Sushma Swaraj'], correctAnswer: 1, explanation: 'Indira Gandhi was first woman PM.' },
    { id: 'gk44', type: 'multiple-choice', question: 'Which country is called the Land of Thousand Lakes?', options: ['Norway','Finland','Sweden','Canada'], correctAnswer: 1, explanation: 'Finland is Land of Thousand Lakes.' },
    { id: 'gk45', type: 'multiple-choice', question: 'Which vitamin is produced by sunlight?', options: ['A','B','C','D'], correctAnswer: 3, explanation: 'Vitamin D is produced.' },

    { id: 'gk46', type: 'multiple-choice', question: 'Which river is sacred in India?', options: ['Yamuna','Ganga','Godavari','Krishna'], correctAnswer: 1, explanation: 'Ganga is sacred.' },
    { id: 'gk47', type: 'multiple-choice', question: 'Which country is the largest by area?', options: ['USA','China','Canada','Russia'], correctAnswer: 3, explanation: 'Russia is the largest country.' },
    { id: 'gk48', type: 'multiple-choice', question: 'Which sport uses a shuttlecock?', options: ['Tennis','Cricket','Badminton','Hockey'], correctAnswer: 2, explanation: 'Badminton uses shuttlecock.' },
    { id: 'gk49', type: 'multiple-choice', question: 'Which gas is used in fire extinguishers?', options: ['Oxygen','Nitrogen','Carbon Dioxide','Hydrogen'], correctAnswer: 2, explanation: 'CO₂ is used in extinguishers.' },
    { id: 'gk50', type: 'multiple-choice', question: 'Which country has the capital Rome?', options: ['Spain','France','Italy','Greece'], correctAnswer: 2, explanation: 'Rome is capital of Italy.' }
    ],
    settings: {
      timePerQuestion: 25,
      timerEnabled: true,
      shuffleQuestions: true
    }
  },


{
 id: 'movie_series_1',
  title: 'Movies & Series',
  category: 'Movies & Series',
  description: 'Popular movies and TV series',
  createdAt: '2024-12-20',
  questions: [
       { id: 'ms1', type: 'multiple-choice', question: 'Who played Iron Man in the MCU?', options: ['Chris Evans','Robert Downey Jr.','Chris Hemsworth','Mark Ruffalo'], correctAnswer: 1, explanation: 'Robert Downey Jr. played Iron Man.' },
    { id: 'ms2', type: 'multiple-choice', question: 'Which movie won Best Picture Oscar 2020?', options: ['Joker','1917','Parasite','Ford v Ferrari'], correctAnswer: 2, explanation: 'Parasite won Best Picture in 2020.' },
    { id: 'ms3', type: 'multiple-choice', question: 'Which Bollywood movie features Mogambo?', options: ['Sholay','Mr. India','Don','Deewar'], correctAnswer: 1, explanation: 'Mogambo appears in Mr. India.' },
    { id: 'ms4', type: 'multiple-choice', question: 'Which series is about the Iron Throne?', options: ['Vikings','The Witcher','Game of Thrones','Rome'], correctAnswer: 2, explanation: 'Game of Thrones revolves around the Iron Throne.' },
    { id: 'ms5', type: 'multiple-choice', question: 'Which K-drama became a global hit on Netflix?', options: ['Goblin','Vincenzo','Crash Landing on You','Squid Game'], correctAnswer: 3, explanation: 'Squid Game became a global hit.' },

    { id: 'ms6', type: 'multiple-choice', question: 'Who directed Inception?', options: ['James Cameron','Christopher Nolan','Steven Spielberg','Ridley Scott'], correctAnswer: 1, explanation: 'Inception was directed by Christopher Nolan.' },
    { id: 'ms7', type: 'multiple-choice', question: 'Which actor is called King Khan?', options: ['Salman Khan','Aamir Khan','Shah Rukh Khan','Saif Ali Khan'], correctAnswer: 2, explanation: 'Shah Rukh Khan is known as King Khan.' },
    { id: 'ms8', type: 'multiple-choice', question: 'Which series features the character Eleven?', options: ['Dark','Money Heist','Stranger Things','The Umbrella Academy'], correctAnswer: 2, explanation: 'Eleven is from Stranger Things.' },
    { id: 'ms9', type: 'multiple-choice', question: 'Which Indian movie won an Oscar in 2023?', options: ['RRR','KGF 2','Pathaan','Brahmastra'], correctAnswer: 0, explanation: 'RRR won Best Original Song at Oscars 2023.' },
    { id: 'ms10', type: 'multiple-choice', question: 'Money Heist was originally made in which language?', options: ['English','Spanish','French','Italian'], correctAnswer: 1, explanation: 'Money Heist is a Spanish series.' },

    { id: 'ms11', type: 'multiple-choice', question: 'Which movie series has Jack Sparrow?', options: ['Harry Potter','Pirates of the Caribbean','The Mummy','Avatar'], correctAnswer: 1, explanation: 'Jack Sparrow appears in Pirates of the Caribbean.' },
    { id: 'ms12', type: 'multiple-choice', question: 'Which Bollywood movie is based on Milkha Singh?', options: ['Mary Kom','MS Dhoni','Bhaag Milkha Bhaag','Chak De India'], correctAnswer: 2, explanation: 'Bhaag Milkha Bhaag is based on Milkha Singh.' },
    { id: 'ms13', type: 'multiple-choice', question: 'Who played Joker in The Dark Knight?', options: ['Joaquin Phoenix','Jared Leto','Heath Ledger','Jack Nicholson'], correctAnswer: 2, explanation: 'Heath Ledger played Joker.' },
    { id: 'ms14', type: 'multiple-choice', question: 'Which series features a professor planning a heist?', options: ['Narcos','Money Heist','Elite','Dark'], correctAnswer: 1, explanation: 'Money Heist is about a professor-led heist.' },
    { id: 'ms15', type: 'multiple-choice', question: 'Who played Wolverine in X-Men?', options: ['Tom Hardy','Hugh Jackman','Chris Pratt','Ben Affleck'], correctAnswer: 1, explanation: 'Hugh Jackman played Wolverine.' },

    { id: 'ms16', type: 'multiple-choice', question: 'Which movie features the blue aliens called Na’vi?', options: ['Avatar','Dune','Star Wars','Matrix'], correctAnswer: 0, explanation: 'Na’vi appear in Avatar.' },
    { id: 'ms17', type: 'multiple-choice', question: 'Which Bollywood actor starred in Lagaan?', options: ['Salman Khan','Aamir Khan','Akshay Kumar','Ajay Devgn'], correctAnswer: 1, explanation: 'Lagaan starred Aamir Khan.' },
    { id: 'ms18', type: 'multiple-choice', question: 'Which series is based on time travel in Germany?', options: ['Dark','1899','Stranger Things','Loki'], correctAnswer: 0, explanation: 'Dark is a German time-travel series.' },
    { id: 'ms19', type: 'multiple-choice', question: 'Which movie features the quote “I am inevitable”?', options: ['Avengers: Endgame','Infinity War','Age of Ultron','Civil War'], correctAnswer: 0, explanation: 'Thanos says it in Avengers: Endgame.' },
    { id: 'ms20', type: 'multiple-choice', question: 'Which actress played Wonder Woman?', options: ['Scarlett Johansson','Gal Gadot','Brie Larson','Emma Stone'], correctAnswer: 1, explanation: 'Gal Gadot played Wonder Woman.' },

    { id: 'ms21', type: 'multiple-choice', question: 'Which Bollywood movie is based on chess prodigy?', options: ['Queen','Raazi','Queen of Katwe','Dangal'], correctAnswer: 2, explanation: 'Queen of Katwe is based on chess.' },
    { id: 'ms22', type: 'multiple-choice', question: 'Which web series features Walter White?', options: ['Ozark','Breaking Bad','Narcos','Dexter'], correctAnswer: 1, explanation: 'Walter White is from Breaking Bad.' },
    { id: 'ms23', type: 'multiple-choice', question: 'Which movie won Best Picture Oscar 1998?', options: ['Titanic','Gladiator','Forrest Gump','Braveheart'], correctAnswer: 0, explanation: 'Titanic won Best Picture.' },
    { id: 'ms24', type: 'multiple-choice', question: 'Which Indian web series is based on elections?', options: ['Sacred Games','Panchayat','The Family Man','Mirzapur'], correctAnswer: 1, explanation: 'Panchayat revolves around village politics.' },
    { id: 'ms25', type: 'multiple-choice', question: 'Which series features Demogorgon?', options: ['Dark','Stranger Things','The Boys','Loki'], correctAnswer: 1, explanation: 'Demogorgon is in Stranger Things.' },

    { id: 'ms26', type: 'multiple-choice', question: 'Who directed Titanic?', options: ['James Cameron','Nolan','Spielberg','Ridley Scott'], correctAnswer: 0, explanation: 'Titanic was directed by James Cameron.' },
    { id: 'ms27', type: 'multiple-choice', question: 'Which Bollywood film stars Rancho?', options: ['PK','3 Idiots','Taare Zameen Par','Munna Bhai'], correctAnswer: 1, explanation: 'Rancho is from 3 Idiots.' },
    { id: 'ms28', type: 'multiple-choice', question: 'Which K-drama is about a zombie outbreak?', options: ['Kingdom','Goblin','Vincenzo','My Name'], correctAnswer: 0, explanation: 'Kingdom is a zombie K-drama.' },
    { id: 'ms29', type: 'multiple-choice', question: 'Which movie is about dreams within dreams?', options: ['Interstellar','Inception','Tenet','Matrix'], correctAnswer: 1, explanation: 'Inception explores layered dreams.' },
    { id: 'ms30', type: 'multiple-choice', question: 'Which character says “Why so serious?”', options: ['Batman','Joker','Iron Man','Deadpool'], correctAnswer: 1, explanation: 'Joker says “Why so serious?”.' },

    { id: 'ms31', type: 'multiple-choice', question: 'Which series is about superheroes with dark humor?', options: ['Loki','The Boys','Arrow','Flash'], correctAnswer: 1, explanation: 'The Boys is a dark superhero series.' },
    { id: 'ms32', type: 'multiple-choice', question: 'Which Bollywood movie is based on cricket?', options: ['Lagaan','MS Dhoni','83','All of these'], correctAnswer: 3, explanation: 'All are cricket-based movies.' },
    { id: 'ms33', type: 'multiple-choice', question: 'Which actor played Deadpool?', options: ['Ryan Gosling','Ryan Reynolds','Chris Evans','Hugh Jackman'], correctAnswer: 1, explanation: 'Ryan Reynolds played Deadpool.' },
    { id: 'ms34', type: 'multiple-choice', question: 'Which series is about Vikings?', options: ['Rome','Spartacus','Vikings','Knightfall'], correctAnswer: 2, explanation: 'Vikings is about Norse warriors.' },
    { id: 'ms35', type: 'multiple-choice', question: 'Which movie features the song “My Heart Will Go On”?', options: ['Titanic','Avatar','Notebook','Pearl Harbor'], correctAnswer: 0, explanation: 'Titanic features the song.' },

    { id: 'ms36', type: 'multiple-choice', question: 'Which Indian series stars Nawazuddin Siddiqui?', options: ['Mirzapur','Sacred Games','Paatal Lok','Aarya'], correctAnswer: 1, explanation: 'Nawaz starred in Sacred Games.' },
    { id: 'ms37', type: 'multiple-choice', question: 'Which movie is about space survival?', options: ['Gravity','Arrival','Moon','All'], correctAnswer: 3, explanation: 'All are space-related movies.' },
    { id: 'ms38', type: 'multiple-choice', question: 'Which K-drama stars Song Hye-kyo?', options: ['Descendants of the Sun','Goblin','Vincenzo','My Name'], correctAnswer: 0, explanation: 'Song Hye-kyo starred in DOTS.' },
    { id: 'ms39', type: 'multiple-choice', question: 'Which Hollywood movie is about dinosaurs?', options: ['King Kong','Jurassic Park','Godzilla','Avatar'], correctAnswer: 1, explanation: 'Jurassic Park is about dinosaurs.' },
    { id: 'ms40', type: 'multiple-choice', question: 'Which series is based on chess?', options: ['The Crown','Queen’s Gambit','House of Cards','Sherlock'], correctAnswer: 1, explanation: 'The Queen’s Gambit is about chess.' },

    { id: 'ms41', type: 'multiple-choice', question: 'Which Bollywood movie stars Kabir Khan as coach?', options: ['Dangal','Chak De India','Sultan','83'], correctAnswer: 1, explanation: 'Chak De India stars Kabir Khan.' },
    { id: 'ms42', type: 'multiple-choice', question: 'Which Marvel movie introduced Black Panther?', options: ['Civil War','Black Panther','Infinity War','Ultron'], correctAnswer: 0, explanation: 'Black Panther debuted in Civil War.' },
    { id: 'ms43', type: 'multiple-choice', question: 'Which series is about forensic investigation?', options: ['Dexter','CSI','Mindhunter','All'], correctAnswer: 3, explanation: 'All involve investigation.' },
    { id: 'ms44', type: 'multiple-choice', question: 'Which Indian movie is about astronaut Rakesh Sharma?', options: ['Rocketry','Mission Mangal','Swades','Antariksh'], correctAnswer: 0, explanation: 'Rocketry is about Rakesh Sharma.' },
    { id: 'ms45', type: 'multiple-choice', question: 'Which series features Loki as protagonist?', options: ['Avengers','Loki','Thor','WandaVision'], correctAnswer: 1, explanation: 'Loki series features Loki.' },

    { id: 'ms46', type: 'multiple-choice', question: 'Which Bollywood actor is called Khiladi?', options: ['Ajay Devgn','Akshay Kumar','Salman Khan','Hrithik Roshan'], correctAnswer: 1, explanation: 'Akshay Kumar is called Khiladi.' },
    { id: 'ms47', type: 'multiple-choice', question: 'Which movie features AI named Jarvis?', options: ['Iron Man','Avengers','Age of Ultron','All'], correctAnswer: 3, explanation: 'Jarvis appears across MCU.' },
    { id: 'ms48', type: 'multiple-choice', question: 'Which K-drama is about revenge and law?', options: ['Vincenzo','Goblin','Reply 1988','My Name'], correctAnswer: 0, explanation: 'Vincenzo is about revenge and law.' },
    { id: 'ms49', type: 'multiple-choice', question: 'Which movie is about a theme park gone wrong?', options: ['Avatar','Jurassic Park','King Kong','Jumanji'], correctAnswer: 1, explanation: 'Jurassic Park theme park goes wrong.' },
    { id: 'ms50', type: 'multiple-choice', question: 'Which series is based on Sherlock Holmes?', options: ['Sherlock','Elementary','Enola Holmes','All'], correctAnswer: 3, explanation: 'All are based on Sherlock Holmes.' }

  ],
    settings: {
      timePerQuestion: 30,
      timerEnabled: true,
      shuffleQuestions: true
    }
  },
];



export const getQuizzesFromStorage = () => {
  const stored = localStorage.getItem('quizzes');
  return stored ? JSON.parse(stored) : mockQuizzes;
};

export const saveQuizzesToStorage = (quizzes) => {
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
};

export const getAttemptsFromStorage = () => {
  const stored = localStorage.getItem('quizAttempts');
  return stored ? JSON.parse(stored) : [];
};

export const saveAttemptToStorage = (attempt) => {
  const attempts = getAttemptsFromStorage();
  attempts.push(attempt);
  localStorage.setItem('quizAttempts', JSON.stringify(attempts));
};
