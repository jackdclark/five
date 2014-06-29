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
