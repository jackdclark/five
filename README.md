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
```

##### 5 goes multilingual
```javascript
five.arabic() // خمسة
five.croatian() // pet
five.czech() // pět
five.english() // Five
five.french() // cinq
five.german() // fünf
five.irish() // cúig
five.mongolian() // таван
five.polish() // pięć
five.swedish() // fem
five.thai() // ห้า
```

##### 5 goes multinumerical
```javascript
five.one() // 1
five.two() // 2
five.three() // 3
five.four() // 4
five.five() // 5
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
