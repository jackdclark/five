# five.js

![travis](https://api.travis-ci.org/jackdcrawford/five.svg)

A library to overcomplicate `5`.

### Usage
##### Require the module
```javascript
var five = require('five');
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

### Development
##### The code
All of the logic & heavy lifting is achieved in one self-contained file:
```
./index.js
```

##### Tests
```
npm test
```
