# five.js

A library to overcomplicate `5`.

[![Build Status](https://travis-ci.org/jackdcrawford/five.svg?branch=master)](https://travis-ci.org/jackdcrawford/five)
[![Code Climate](https://codeclimate.com/github/jackdcrawford/five.png)](https://codeclimate.com/github/jackdcrawford/five)
[![Test Coverage](https://codeclimate.com/github/jackdcrawford/five/coverage.png)](https://codeclimate.com/github/jackdcrawford/five)

[![NPM](https://nodei.co/npm/five.png?downloads=true)](https://nodei.co/npm/five)

![five logo](https://camo.githubusercontent.com/998f93c5cf3c1f6ff1d29a697e6a7f2a103c0c8b/68747470733a2f2f736c61636b2d66696c65732e636f6d2f66696c65732d7072692d736166652f54303234473052314a2d4630413352473536572f756e6f6666696369616c5f666976655f6a735f6c6f676f2e7376673f633d313434313238353430302d61326462326339373530353762353234656131626337343033623762373730333463643337663031)

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
```

##### 5 goes multilingual
```javascript
five.arabic() // خمسة
five.azerbaijani() // beş
five.basque() // bost
five.belarusian // пяць
five.bosnian() // pet
five.bulgarian() // пет
five.catalan() // cinc
five.chinese() // 五
five.choctaw() // tahlapi
five.croatian() // pet
five.czech() // pět
five.dothraki() // mek
five.dovah() // hen
five.dutch() // vijf
five.elvish() // lempe
five.english() // Five
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
five.mongolian() // таван
five.norwegian() // fem
five.persian() // پنج
five.piglatin() // ivefay
five.polish() // pięć
five.portuguese() // cinco
five.romanian() // cinci
five.russian() // пять
five.serbian() // pet
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
```

##### Map and Reduce
```javascript
five.map([1, 2, 3]); // [5, 5, 5]
five.reduce([1, 2, 3]); // 5
```

##### Novelty
```javascript
five.fab(); // ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']
five.jackson(); // ['Jackie','Tito','Jermaine','Marlon','Michael']
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
