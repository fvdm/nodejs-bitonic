# bitonic

Unofficial API wrapper for Bitonic.nl

[![npm](https://img.shields.io/npm/v/bitonic.svg?maxAge=3600)](https://github.com/fvdm/nodejs-bitonic/blob/master/CHANGELOG.md)
[![Build Status](https://github.com/fvdm/nodejs-bitonic/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/fvdm/nodejs-bitonic/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/fvdm/nodejs-bitonic/badge.svg?branch=master)](https://coveralls.io/github/fvdm/nodejs-bitonic?branch=master)

+ [Node.js](https://nodejs.org)
* [Bitonic](https://bitonic.nl)
* [API documentation](https://bitonic.nl/api)


## Example

```js
const Bitonic = require ('bitonic');
const bitonic = new Bitonic;

bitonic.buy (
  from: 'eur',
  amount: 5,
})
  .then (data => console.log (`${data.eur} EUR gets you ${data.btc} BTC`))
  .catch (console.error)
;
```


## Installation

```sh
npm i bitonic
```


## Configuration

You can configure these params in the constructor:

param     | type   | default | description
:---------|:-------|:--------|:-----------
[timeout] | number | 5000    | Request timeout in ms


### Example

```js
// set timeout to 8 seconds
const Bitonic = require ('bitonic');
const bitonic = new Bitonic ({
  timeout: 8000,
});
```


## Methods

The examples below don't include error handling.
See the [code above](#example) for a working example.

### priceBuy
**({ from, amount, [method] })**

Get pricing for buying BTC by providing either the
BTC or EUR amount, including payment method fees.

param    | type     | default | description
:--------|:---------|:--------|:---------------
from     | string   |         | Currency to convert from. `btc` or `eur`
amount   | number   |         | Amount to convert
[method] | string   | ideal   | Payment method. `ideal` or `bancontact`


#### Example

```js
bitonic.priceBuy ({
  from: 'btc',
  amount: 2,
})
  .then (data => console.log (`${data.btc} BTC costs ${data.eur} EUR`))
  .catch (console.error)
;
```


### priceSell
**({ from, amount })**

Get pricing for selling BTC by providing either the
BTC or EUR amount.

param    | type     | description
:--------|:---------|:-------------------------
from     | string   | Currency to convert from. `btc` or `eur`
amount   | number   | Amount to convert


#### Example

```js
bitonic.priceSell ({
  from: 'eur',
  amount: 5.12,
})
  .then (data => console.log (`Sell ${data.btc} BTC to get ${data.eur} EUR`))
  .catch (console.error)
;
```


### priceAverage
**( )**

Get 24H average price in EUR and volume.


#### Example

```js
bitonic.priceAverage()
  .then (data => {
    console.log (`1 BTC is ${data.price} EUR`);
    console.log (`24H volume is ${data.volume}`);
  })
  .catch (console.error)
;
```


## Unlicense

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


## Author

[Franklin](https://fvdm.com)
| [Buy me a coffee](https://fvdm.com/donating/)
