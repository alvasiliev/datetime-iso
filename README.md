# datetime-iso

Convert Date to string in ISO format: YYYY-MM-DDTHH:mm:ss.SSS

## Installation
```bash
npm install datetime-iso
```

## Usage

```js
const local = require('./datetime-iso').local,
    utc = require('./datetime-iso').utc;

console.log(local()); // now date and time: 2017-02-28T13:47:55.773
console.log(utc()); // now date and time (UTC): 2017-02-28T10:47:55.775
console.log(local(new Date(2017, 0, 1, 0, 0, 0))); // 2017-01-01T00:00:00.000
console.log(utc(new Date(2017, 0, 1, 0, 0, 0))); // 2016-12-31T21:00:00.000
```

## License
[MIT](https://tldrlegal.com/license/mit-license)
