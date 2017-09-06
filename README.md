# bitonic

Unofficial API wrapper for Bitonic.nl

[![npm](https://img.shields.io/npm/v/bitonic.svg?maxAge=3600)](https://github.com/fvdm/nodejs-bitonic/blob/master/CHANGELOG.md)
[![Build Status](https://travis-ci.org/fvdm/nodejs-bitonic.svg?branch=master)](https://travis-ci.org/fvdm/nodejs-bitonic)
[![Coverage Status](https://coveralls.io/repos/github/fvdm/nodejs-bitonic/badge.svg?branch=master)](https://coveralls.io/github/fvdm/nodejs-bitonic?branch=master)
[![bitHound Dependencies](https://www.bithound.io/github/fvdm/nodejs-bitonic/badges/dependencies.svg)](https://www.bithound.io/github/fvdm/nodejs-bitonic/develop/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/fvdm/nodejs-bitonic/badges/code.svg)](https://www.bithound.io/github/fvdm/nodejs-bitonic)

+ [Node.js](https://nodejs.org)
* [Bitonic](https://bitonic.nl)
* [API documentation](https://bitonic.nl/api)


# Example

```js
const bitonic = require ('bitonic')();

bitonic.price.buy ('eur', 5, (err, data) => {
  if (err) {
    return console.error (err);
  }

  console.log ('5 euro gets you ' + data.btc + ' BTC');
});
```


# Installation

```sh
npm i bitonic --save
```


# Configuration

With the require you can define configuration options.

param.  | type   | default | description
:-------|:-------|:--------|:-----------
timeout | number | 5000.   | Request timeout in ms


### Example

```js
// set timeout to 8 seconds
const bitonic = require ('bitonic') ({
  timeout: 8000
});
```


# Methods

The examples below don't include error handling.
See the [code above](#example) for a working example.

## price.buy
**( from, amount, [method], callback )**

Get pricing for buying BTC by providing either the
BTC or EUR amount, including payment method fees.

param    | type     | default | description
:--------|:---------|:--------|:---------------
from     | string   |         | Currency to convert from. `btc` or `eur`
amount   | number   |         | Amount to convert
method   | string   | ideal   | Payment method. `ideal` or `bancontact`
callback | function |         | `(err, data)`


### Example

```js
bitonic.price.buy ('btc', 2, (err, data) => {
  console.log ('2 BTC costs %s EUR', data.eur);
});

bitonic.price.buy ('eur', 5.12, (err, data) => {
  console.log ('For 5.12 EUR you get %s BTC', data.btc);
});
```


## price.sell
**( from, amount, callback )**

Get pricing for selling BTC by providing either the
BTC or EUR amount.

param    | type     | description
:--------|:---------|:-------------------------
from     | string   | Currency to convert from. `btc` or `eur`
amount   | number   | Amount to convert
callback | function | `(err, data)`


### Example

```js
bitonic.price.sell ('btc', 2, (err, data) => {
  console.log ('You get %s EUR for selling 2 BTC', data.eur);
});

bitonic.price.sell ('eur', 5.12, (err, data) => {
  console.log ('Sell %s BTC to get 5.12 EUR', data.btc);
});
```


## price.average
**( callback )**

Get 24H average price in EUR and volume.

param    | type     | description
:--------|:---------|:-------------
callback | function | `(err, data)`


### Example

```js
bitonic.price.average ((err, data) => {
  console.log ('1 BTC is %s EUR', data.price);
  console.log ('24H volume is ', data.volume);
});
```


# Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>


# Author

[Franklin van de Meent](https://frankl.in)

Do you like this project?
[Buying me a coffee](https://ko-fi.com/franklin) keeps me motivated to maintain the code.