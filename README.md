# five.js

A library to overcomplicate `5`.

![travis](https://api.travis-ci.org/jackdcrawford/five.svg) [![Code Climate](https://codeclimate.com/github/jackdcrawford/five.png)](https://codeclimate.com/github/jackdcrawford/five)

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
```

##### 5 goes multilingual
```javascript
five.arabic() // خمسة
five.choctaw() // tahlapi
five.croatian() // pet
five.czech() // pět
five.english() // Five
five.french() // cinq
five.german() // fünf
five.irish() // cúig
five.mongolian() // таван
five.piglatin() // ivefay
five.polish() // pięć
five.slovenian() // pet
five.swedish() // fem
five.thai() // ห้า
five.tamil() //ஐந்து
five.hindi() // पाँच
```

##### Different radices
```javascript
five.binary(); // 101
five.octal(); // 5
```

##### Map and Reduce
```javascript
five.map([1, 2, 3]); // [5, 5, 5]
five.reduce([1, 2, 3]); // 5
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
