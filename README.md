# five.js

A library to overcomplicate `5`.

[![Build Status](https://travis-ci.org/jackdcrawford/five.svg?branch=master)](https://travis-ci.org/jackdcrawford/five)
[![Code Climate](https://codeclimate.com/github/jackdcrawford/five.png)](https://codeclimate.com/github/jackdcrawford/five)
[![Test Coverage](https://codeclimate.com/github/jackdcrawford/five/coverage.png)](https://codeclimate.com/github/jackdcrawford/five)

<img src="https://cldup.com/kwFz0lhg1u.png" width="300" alt="logo" />

### Usage
##### Require the module
```javascript
var five = require('five');
```

##### In the browser
```html
<script type="text/javascript" src="./five.js"></script>
```

##### Basic 5
```javascript
five(); // 5
```

## The Law of Fives
```javascript
five.law(); // The Law of Fives states simply that: All things happen in fives, or are divisible by or are multiples of five, or are somehow directly or indirectly appropriate to 5. The Law of Fives is never wrong.
```

##### Addition
```javascript
five() + five(); // 10
```

##### Multiplication
```javascript
five() * five(); // 25
```

##### Division
```javascript
five() / five(); // 1
```
##### Combinatorics
```javascript
five.factorial(); // 120
```

##### Different sorts of 5
```javascript
five.upHigh() // ⁵
five.downLow() // ₅
five.tooSlow() // 5, with a ~500 millisecond delay
five.roman() // V
five.morseCode() // .....
five.negative() // -5
five.loud() // FIVE
five.loud('piglatin') // IVEFAY
five.smooth() // S
five.bucks() // $5.00
```

##### Cryptography
```javascript
five.mdFive() // 30056e1cab7a61d256fc8edd970d14f5
five.golden() // 1.618033988749895
```

##### 5 goes multilingual
```javascript
five.arabic() // خمسة
five.azerbaijani() // beş
five.basque() // bost
five.belarusian() // пяць
five.bosnian() // pet
five.bulgarian() // пет
five.catalan() // cinc
five.chinese() // 五
five.chinese('pinyin') // wǔ
five.chinese('financial') // 伍
five.choctaw() // tahlapi
five.croatian() // pet
five.czech() // pět
five.dothraki() // mek
five.dovah() // hen
five.dutch() // vijf
five.elvish() // lempë
five.elvish('quenya') // lempë
five.elvish('sindarin') // leben
five.english() // five
five.esperanto() // kvin
five.estonian() // viis
five.finnish() // viisi
five.french() // cinq
five.german() // fünf
five.greek() // πέντε
five.hebrew() // חמש
five.hindi() // पांच
five.hungarian() // öt
five.icelandic() // fimm
five.indonesian() // lima
five.irish() // cúig
five.italian() // cinque
five.japanese() // 五
five.kannada() // ಐದು
five.klingon() // vagh
five.korean() // 오
five.latin() // quinque
five.latvian() // pieci
five.lithuanian() // penki
five.maltese() // ħamsa
five.mongolian() // таван
five.nepali() // पाँच
five.norwegian() // fem
five.persian() // پنج
five.piglatin() // ivefay
five.polish() // pięć
five.portuguese() // cinco
five.punjabi() // ਪੰਜ
five.romanian() // cinci
five.russian() // пять
five.serbian() // pet
five.sinhala() // පහ
five.slovakian() // päť
five.slovenian() // pet
five.spanish() // cinco
five.swedish() // fem
five.tamil() // ஐந்து
five.telugu() // ఐదు
five.thai() // ห้า
five.turkish() // beş
five.ukrainian() // п’ять
five.welsh() // pump
```

##### Different radices
```javascript
five.binary(); // 101
five.octal(); // 5
five.hex(); // 5
five.base(4); // 11
five.base(3); // 12
```

##### Assertion
```javascript
five.isFive(10); // false
```

##### Filter, Map and Reduce
```javascript
five.filter([5, true, 5]); // [5, 5]
five.map([1, 2, 3]); // [5, 5, 5]
five.reduce([1, 2, 3]); // 5
```

##### Novelty
```javascript
five.fab(); // ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']
five.jackson(); // ['Jackie','Tito','Jermaine','Marlon','Michael']
five.furious(); // ['Tigress','Viper','Crane','Monkey','Mantis']
five.luniz(); // ‘I Got 5 on It’
five.r(); // '£5'
five.funk(); // '5 bad boys with the power to rock you'
five.high(); // 'o/'
five.members(); //['Sean Conlon', 'Ritchie Neville', 'Scott Robinson', 'Jason \'J\' Brown', 'Abz Love']
five.discography(); //['5ive', 'Invincible', 'Kingsize']
five.singles(); //['Slam Dunk (Da Funk)', 'When the Lights Go Out', 'Got the Feelin\'', 'Everybody Get Up', 'It\'s the Things You Do', 'Until the Time Is Through', 'If Ya Gettin\' Down', 'Keep On Movin\'', 'Don\'t Wanna Let You Go', 'We Will Rock You', 'Let\'s Dance', 'Closer to Me', 'Rock the Party', 'I Wish It Could Be Christmas Everyday']
five.famous(); // ['Julian', 'Dick', 'George', 'Anne', 'Timmy']
```

##### Rotation
```javascript
five.rot("five.js"); //"knaj.ox"
```

##### Asynchronous Usage
```javascript
five.async(function(err, five) {
	// five === 5
});
```

##### Unicode
```javascript
five.oclock(); // '🕔'

five.oclockSomewhere(); // '🍺'

five.guys(); // '🍔'
```

##### Money
```javascript
five.euro(); // '5€'
five.dollar(); // '$5'
```


### Development
##### The code
All of the logic & heavy lifting is achieved in one self-contained file:
```
./five.js
```

##### Tests
```
npm test
```
### License
MIT
