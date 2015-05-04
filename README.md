# five.js

A library to overcomplicate `5`.

[![Build Status](https://travis-ci.org/jackdcrawford/five.svg?branch=master)](https://travis-ci.org/jackdcrawford/five)
[![Code Climate](https://codeclimate.com/github/jackdcrawford/five.png)](https://codeclimate.com/github/jackdcrawford/five)
[![Test Coverage](https://codeclimate.com/github/jackdcrawford/five/coverage.png)](https://codeclimate.com/github/jackdcrawford/five)

[![NPM](https://nodei.co/npm/five.png?downloads=true)](https://nodei.co/npm/five)

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
five.morseCode() // di-di-di-di-dit
five.negative() // -5
five.loud() // FIVE
five.smooth() // S
```

##### 5 goes multilingual
```javascript
five.arabic() // خمسة
five.azerbaijani() // beş
five.basque() // bost
five.bosnian() // pet
five.bulgarian() // пет
five.catalan() // cinc
five.chinese() // 五
five.choctaw() // tahlapi
five.croatian() // pet
five.czech() // pět
five.dovah() // hen
five.dutch() // vijf
five.elvish() // lempe
five.english() // Five
five.finnish() // viisi
five.french() // cinq
five.german() // fünf
five.hebrew() // חמש
five.hindi() // पांच
five.hungarian() // öt
five.indonesian() // lima
five.irish() // cúig
five.italian() // cinque
five.japanese() // 五
five.kannada() // ಐದು
five.klingon() // vagh
five.korean() // 오
five.latin() // quinque
five.latvian() // pieci
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
five.law(); // The Law of Fives states simply that: All things happen in fives, or are divisible by or are multiples of five, or are somehow directly or indirectly appropriate to 5. The Law of Fives is never wrong.
```

##### Rotation
```javascript
five.rot("five.js"); //"knaj.ox"
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
