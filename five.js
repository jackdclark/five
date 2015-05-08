(function () {

  var five = function() { return 5; };

  five.upHigh = function() { return '⁵'; };
  five.downLow = function() { return '₅'; };
  five.roman = function() { return 'V'; };

  five.convertTo = function(anotherNumber) {
    // If you need other numbers I'd strongly suggest you call
    // this function when your app starts up and cache the result.
    var oneFifthOfFive = five() / five();

    while(anotherNumber < oneFifthOfFive) {
      anotherNumber += oneFifthOfFive;
    }

    return anotherNumber;
  };

  five.arabic = function() { return 'خمسة'; };
  five.azerbaijani = function() { return 'beş'; };
  five.basque = function() { return 'bost'; };
  five.belarusian = function() { return 'пяць'; };
  five.bosnian = function() { return 'pet'; };
  five.bulgarian = function() { return 'пет'; };
  five.catalan = function() { return 'cinc'; };
  five.chinese = function() { return '五'; };
  five.choctaw = function() { return 'tahlapi'; };
  five.croatian = function() { return 'pet'; };
  five.czech = function() { return 'pět'; };
  five.dovah = function() { return 'hen'; };
  five.dutch = function() { return 'vijf'; };
  five.elvish = function() { return 'lempe'; };
  five.english = function() { return 'five'; };
  five.estonian = function() { return 'viis'; };
  five.finnish = function() { return 'viisi'; };
  five.french = function() { return 'cinq'; };
  five.german = function() { return 'fünf'; };
  five.greek = function() { return 'πέντε'; };
  five.hebrew = function() { return 'חמש'; };
  five.hindi = function() { return 'पांच'; };
  five.hungarian = function() { return 'öt'; };
  five.indonesian = function() { return 'lima'; };
  five.irish = function() { return 'cúig'; };
  five.italian = function() { return 'cinque'; };
  five.japanese = function() { return '五'; };
  five.kannada = function() { return 'ಐದು'; };
  five.klingon = function() { return 'vagh'; };
  five.korean = function() { return '오'; };
  five.latin = function() { return 'quinque'; };
  five.latvian = function() { return 'pieci'; };
  five.lithuanian = function() { return 'penki'; };
  five.mongolian = function() { return 'таван'; };
  five.norwegian = function() { return 'fem'; };
  five.persian = function() { return 'پنج'; };
  five.piglatin = function() { return 'ivefay'; };
  five.polish = function() { return 'pięć'; };
  five.portuguese = function () { return 'cinco'; };
  five.romanian = function() { return 'cinci'; };
  five.russian = function() { return 'пять'; };
  five.serbian = function() { return 'pet'; };
  five.slovakian = function() { return 'päť'; };
  five.slovenian = function() { return 'pet'; };
  five.spanish = function() { return 'cinco'; };
  five.swedish = function() { return 'fem'; };
  five.tamil = function() { return 'ஐந்து'; };
  five.telugu = function() { return 'ఐదు'; };
  five.turkish = function() { return 'beş'; };
  five.thai = function() { return 'ห้า'; };
  five.ukrainian = function() { return 'п’ять'; };
  five.welsh = function() { return 'pump'; };
  
  five.morseCode = function() { return '....-'; };
  five.binary = function() { return '101'; };
  five.octal = function() { return '5'; };
  five.hex = function() { return '5'; };

  five.negative = function() { return -5; };
  five.loud = function (lang) { return (lang && typeof five[lang] === 'function') ? five[lang]().toUpperCase() : five.english().toUpperCase();};
  five.smooth = function() { return 'S'; };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

    return five();
  };

  five.map = function(array) { return array.map(five); };
  five.reduce = function(array) { return array.reduce(five); };

  five.fab = function() {
    return ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber'];
  };
  
  five.jackson = function() {
    return ['Jackie','Tito','Jermaine','Marlon','Michael'];
  };

  five.async = function(callback) {
    process.nextTick(function() {
      callback(null, five());
    });
  };

  five.rot = function(word) {
    if(typeof(word) != 'string') {
      return word;
    }
    function replaceLetter(z) {
      if('0' <= z && z <= '9') {
        return ((parseInt(z)+5)%10).toString();
      }
      var aLetter = (z <= 'Z' ? 'A': 'a').charCodeAt(0);
      var x = 5 + z.charCodeAt(0) - aLetter;
      x %= 26;
      return String.fromCharCode(x+aLetter);
    }
    return word.replace(/[a-zA-Z0-9]/g, replaceLetter);
  };

  five.valueOf = five;

  five.letterWord = function() {
    var words = ["abase","abate","abbot","abort","about","abuse","abyss","aches","acids","acorn","acres","actor","adapt","admit","adopt","adorn","adult","after","again","agent","agile","agony","agree","ahead","aisle","alarm","alert","alias","alibi","alien","align","alive","alley","allow","alloy","alone","along","aloof","alpha","altar","alter","amaze","amber","amend","among","ample","amuse","angel","anger","angle","angry","angst","ankle","annex","annoy","antes","antic","anvil","aorta","apart","apple","arbor","arena","array","arrow","arson","ashes","aside","asset","atoms","aunts","avian","await","awake","award","aware","backs","badge","bagel","baggy","bails","baits","baker","bakes","bales","balls","balms","balsa","bands","bangs","banks","barge","barns","bases","basic","basil","basin","bawdy","bayou","beads","beaks","beams","beans","beard","bears","beast","beats","beeps","beers","beets","began","begin","begun","being","belay","belch","bells","belly","below","belts","bench","bends","berry","bevel","bicep","bikes","bills","binds","binge","birch","birds","birth","bites","black","blade","blame","bland","blank","blast","blaze","bleak","bleed","bleep","blend","blimp","blink","bloop","blows","blues","bluff","blurb","blurs","blush","boars","boast","boats","boils","bombs","bones","bonus","books","boost","bosom","botch","bowls","boxes","brags","braid","brain","brake","brand","brass","brave","brawl","bread","break","breed","brews","bribe","brick","bride","brief","bring","broil","brook","brown","brows","brunt","build","bulbs","bulge","bulls","burst","butch","buyer","cabin","cable","cafes","cages","cakes","camel","cameo","camps","campy","canal","candy","canoe","canon","capes","cards","cares","carry","carts","carve","catch","cater","caulk","cause","caves","cease","cedar","cello","chafe","chaff","chain","chair","chalk","chaos","charm","chart","chase","cheap","cheat","check","cheek","cheer","chess","chest","chews","chick","chide","chief","child","chili","chill","chime","chimp","china","chips","chirp","chive","chock","choir","choke","chore","chose","chump","chunk","cider","cigar","claim","clamp","claps","class","claws","clean","clear","clerk","click","climb","clips","cloak","clock","close","cloth","cloud","clown","clubs","clues","clump","clung","coast","coats","codes","coins","colon","color","combo","comet","comic","comma","conch","cones","coral","corks","couch","cough","could","count","court","cover","covet","crabs","crack","craft","cramp","crank","crate","crave","crawl","craze","crazy","creak","cream","creek","creep","crepe","crest","cribs","crime","croak","crook","cross","crowd","crown","crows","cruel","crumb","crust","crypt","cubes","cupid","curly","curry","curse","curve","cyber","cycle","cynic","daddy","daily","dairy","daisy","dance","dandy","dares","darts","dates","deals","death","debit","debts","debug","debut","decaf","decay","decor","decoy","defer","delay","delta","demon","denim","dense","dents","depot","depth","desks","deter","devil","dials","diets","diner","disco","docks","dolls","donor","donut","dooms","doubt","dough","dowel","dozen","draft","drags","drain","drape","drawn","draws","dream","drift","drink","drips","drive","drone","drool","drops","drown","druid","drums","ducks","duels","dumps","dunes","dunks","dwarf","dwell","eager","eagle","early","earns","earth","eaten","ebony","edits","eight","eject","elbow","elder","elect","elegy","elite","elope","elude","email","ember","empty","enact","enjoy","enter","entry","envoy","epoxy","equal","equip","erase","erect","erode","error","erupt","essay","ether","evade","event","every","evict","evils","evoke","exact","excel","exert","exile","exist","exits","extra","fable","faces","facts","fades","fails","faint","faith","falls","fancy","fangs","farce","farms","fatal","fates","fault","favor","fears","feast","felon","fence","feral","ferns","ferry","fiber","field","fiend","fifth","fifty","fight","filth","fires","first","flags","flail","flair","flake","flame","flank","flaps","flare","flash","flask","flaws","fleas","flees","flesh","flick","flies","flint","flips","flirt","flock","flood","floor","floss","flour","fluff","fluid","fluke","flung","flunk","flush","flute","foamy","focal","focus","foggy","foist","folly","foods","fools","force","forge","forks","forty","forum","found","foyer","frail","frame","fraud","freak","fresh","fries","frill","frisk","frogs","front","frost","froth","frown","froze","fruit","fudge","funds","funky","funny","furry","fussy","futon","fuzzy","gable","gamma","gates","gaudy","gauge","gaunt","gauze","gavel","gears","gecko","geeky","geese","genes","genre","germs","ghost","ghoul","giant","gifts","girly","girth","given","glade","gland","glare","glass","glaze","glide","glint","gloat","globe","gloom","glory","gloss","glove","glows","glues","glyph","gnats","gnome","goals","goats","golem","goner","goods","gooey","goofy","goose","gouge","gourd","grace","grade","graft","grail","grain","grant","grape","graph","grass","grate","grave","gravy","graze","great","green","greet","grief","grill","grime","grind","grins","gripe","groan","groom","grope","gross","group","grows","gruel","grunt","guard","guess","guide","guild","gulch","habit","hacks","hairy","halls","hands","handy","hangs","happy","harpy","harsh","haste","hasty","hates","haunt","haven","havoc","hawks","hazel","heads","heard","hears","heart","heats","heave","heavy","hedge","heels","helix","hello","hence","herbs","heron","highs","hiker","hikes","hills","hilly","hinge","hints","hitch","hoard","hoist","holds","holes","homes","honey","honor","horde","horns","horse","hotel","hotly","hound","hours","house","hover","human","humor","hunch","hunts","hurts","hyena","icons","ideal","ideas","idiom","idiot","idles","idols","image","incur","index","inept","inert","infer","ingot","inner","input","inset","irate","irons","irony","issue","itchy","items","ivory","jails","jaunt","jeans","jelly","jerks","jerky","jewel","joint","joker","jokes","jolly","jolts","joust","judge","juice","juicy","jumbo","jumps","jumpy","juror","karma","kayak","kazoo","kebab","khaki","kicks","kills","kiosk","kitty","knack","knead","kneel","knees","knife","knobs","knock","knots","known","knows","koala","kudzu","label","labor","laces","laden","ladle","lager","lamps","lance","lands","lanes","lapel","lapse","large","larva","laser","lasso","lasts","latch","latex","lathe","laugh","lawns","layer","leafy","leaks","leaky","learn","lease","leash","least","leave","ledge","leech","legal","lemon","lemur","lends","level","lever","libel","light","likes","lilac","limbo","linen","liner","lipid","liver","lives","llama","locks","lodge","logic","loner","loose","loser","lower","loyal","lucky","lumpy","lunar","lunch","lungs","lurid","lynch","macaw","madam","madly","mafia","maids","makes","males","malls","mange","mango","mania","manic","manly","manor","manta","maple","marsh","masks","mason","maybe","mayor","meals","means","meant","meaty","medal","medic","melon","melts","mercy","merge","merit","messy","metal","might","miles","milks","milky","minds","mines","minor","mints","mirth","missy","misty","model","moist","molds","moldy","money","monks","month","mooch","moods","moons","moose","moral","moron","motel","motor","mound","mourn","mouse","mouth","movie","muddy","muggy","mulch","mural","musky","myths","nails","names","needs","needy","neigh","nerds","nerdy","nerve","nests","never","niche","niece","night","noise","nomad","noose","north","notes","nurse","occur","ocean","oddly","odors","olive","onion","orbit","order","organ","other","otter","ought","ounce","ovals","ovary","ovens","overt","ozone","packs","pages","pains","paint","pairs","pales","palms","panda","panic","pants","paper","parka","parks","parse","parts","party","patch","patio","pause","peaks","pearl","pears","pecan","pedal","peril","perks","perky","pesky","pesto","pests","petal","petty","phase","phone","piano","piece","pilot","pinch","pines","pipes","pitch","pixel","pizza","place","plaid","plain","plane","plank","plant","plate","plaza","plead","plugs","plump","plums","poems","poets","point","polar","poles","polka","ponds","pools","poppy","porch","pores","ports","poser","poses","posts","pours","power","prank","press","price","pride","prime","prior","prize","probe","prong","proof","proud","prove","prowl","prude","prune","puffy","pulls","pumps","punch","pupil","puree","purge","purse","pylon","quack","quaff","quail","quake","qualm","quark","quart","quash","queen","quell","query","quick","quiet","quill","quilt","quips","quirk","quits","races","racks","radio","rafts","rages","rails","rains","rainy","raise","rakes","rally","ramps","ranch","range","rapid","raspy","rates","ratio","ravel","raven","razor","reach","react","reads","ready","realm","rebar","rebel","rebut","recap","recon","refer","reign","relax","relay","relic","remit","remix","renew","repay","repel","reply","rerun","reset","resin","rests","retry","reuse","revel","ridge","right","rinse","riots","rises","risks","rival","river","rivet","roach","roads","roast","robin","robot","rocks","rocky","rooms","roost","roots","ropes","roses","rosin","rotor","rouge","rough","round","route","rover","rowdy","royal","rugby","ruins","ruler","rules","rumba","rumor","rural","rusty","saber","sacks","safer","sails","saint","salad","sales","salon","salsa","salts","salty","salve","salvo","samba","sands","sappy","sassy","satay","satin","satyr","sauce","saucy","savor","savvy","scald","scale","scalp","scams","scans","scant","scare","scarf","scars","scene","scent","scold","scope","score","scout","scowl","scrap","screw","scrub","scuff","seals","seams","seats","sedan","seeds","seedy","segue","seize","sense","sepia","serif","serve","servo","setup","seven","sever","sewer","shack","shade","shaft","shake","shall","shame","shape","shard","share","shark","shave","shawl","shear","sheep","sheer","sheet","shelf","shell","shift","shine","shirt","shoal","shock","shoes","shone","shook","shoot","shops","shore","short","shots","shout","shove","shrew","shrub","shrug","shuck","shush","sides","siege","sieve","sight","sigil","signs","silky","silly","since","sinew","singe","siren","sixty","sizes","skate","skeet","skiff","skill","skirt","skulk","skull","skunk","slack","slain","slake","slang","slant","slaps","slash","slate","slave","sleek","sleep","sleet","slept","slice","slick","slide","slime","slink","sloop","slope","slosh","sloth","slows","slump","slung","slurp","smack","small","smart","smash","smear","smell","smile","smirk","smite","smith","smock","smoke","smush","snack","snail","snake","snare","snore","snort","snout","snows","soaps","sober","socks","solar","songs","soups","south","spade","spank","spark","spasm","speed","spell","spend","spice","spies","spike","spill","spine","spins","spire","spits","split","spook","spool","spoon","sport","spots","spray","squid","stack","staff","stage","stain","stair","stake","stale","stalk","stall","stamp","stand","stank","stare","stark","stars","start","state","steak","steal","steam","steel","steep","steer","stern","stews","stick","stiff","still","sting","stink","stoke","stole","stomp","stone","stood","stool","stoop","store","stork","story","stout","stove","strap","straw","stray","strip","strum","stuff","stump","stunt","sucks","sugar","suits","super","surge","sushi","swank","swarm","sways","swear","sweat","sweep","sweet","swell","swept","swift","swims","swine","swipe","swoon","sword","sworn","syrup","table","taboo","tacit","tacos","taffy","tails","taint","taken","takes","talks","talon","tango","tangy","tardy","tarot","tarry","tasks","taste","tasty","taunt","taupe","teams","tears","tease","teddy","teeth","tempt","tenor","tents","terms","testy","thank","thaws","theft","their","theme","there","these","thigh","thing","think","thorn","those","three","throw","thumb","thyme","tidal","tiger","tight","tiles","timer","tires","titan","title","toast","today","token","tools","tooth","total","totem","tours","towel","towns","toxic","toxin","trace","trade","trail","train","traps","trash","tread","treat","trend","triad","trial","tribe","trick","tripe","trite","troll","troop","trope","trout","trove","truce","truck","truly","trump","trunk","trust","truth","tuber","tubes","tulip","tumor","tunic","turbo","tutor","twang","tweak","twice","twill","twine","twins","twirl","twist","types","udder","ulcer","ultra","umbra","unbox","uncle","under","unfit","union","unite","unity","unjam","unlit","untie","until","upend","upper","upset","urban","usage","usher","usual","usury","utter","valet","valid","valor","value","valve","vapid","vapor","vault","vaunt","vegan","veils","venom","verse","vests","video","vigil","villa","viper","viral","visit","vital","vocal","voter","vowel","wacky","wafer","wager","wages","wagon","waist","waits","waive","walls","waltz","wands","warms","warns","warps","waste","watch","water","wedge","weigh","whale","wharf","wheel","where","which","whine","white","widow","width","wield","wispy","witch","wives","woods","words","works","worms","would","wound","wraps","wreck","wrist","write","wrong","yacht","yards","yawns","years","youth","zones","zooms"];
    return words[Math.floor(Math.random() * words.length)];
  };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (window) {
    window.five = five;
  }
}());
