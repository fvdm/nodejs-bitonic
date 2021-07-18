/*
Name:           bitonic
Description:    Node.js API wrapper for Bitonic.nl (unofficial)
License:        The Unlicense (see LICENSE file)
Author:         Franklin (https://fvdm.com)
Source & docs:  https://github.com/fvdm/nodejs-bitonic
*/

const { doRequest } = require ('httpreq');

// Defaults
const config = {
  timeout: 5000,
};


/**
 * Process httpreq response
 *
 * @param     {object}
 * @param     {Error|null}  err       httpreq Error
 * @param     {object}      res       httpreq response
 * @param     {function}    callback  `(err, data)`
 *
 * @callback  callback
 * @return    {void}
 */

function httpResponse ({
  err,
  res,
  callback,
}) {
  let data;

  if (err) {
    callback (err);
    return;
  }

  data = JSON.parse (res.body);
  callback (null, data);
}


/**
 * Send API request
 *
 * @param     {string}    method    HTTP method, i.e. GET
 * @param     {string}    path      API path, i.e. /sell
 * @param     {function}  callback  `(err, data)`
 *
 * @callback  callback
 * @return    {void}
 */

function httpRequest ({
  path,
  parameters = null,
  callback,
}) {
  const options = {
    method: 'GET',
    parameters,
    url: `https://bitonic.nl/api${path}`,
    timeout: config.timeout,
    headers: {
      'User-Agent': 'nodejs-bitonic (https://github.com/fvdm/nodejs-bitonic)',
    },
  };

  doRequest (options, (err, res) => {
    httpResponse (err, res, callback);
  });
}


/**
 * Method: price.average
 *
 * @param     {function}  callback  `(err, data)`
 *
 * @callback  callback
 * @return    {void}
 */

function priceAverage (callback) {
  httpRequest ({
    path: '/price',
    callback,
  });
}


/**
 * Method: price.sell
 *
 * @param     {string}    from      Currency to convert from
 * @param     {number}    amount    Amount to convert
 * @param     {function}  callback  `(err, data)`
 *
 * @callback  callback
 * @return    {void}
 */

function priceSell (from, amount, callback) {
  httpRequest ({
    path: '/sell',
    parameters: {
      from: amount,
    },
    callback,
  });
}


/**
 * Method: price.buy
 *
 * @param     {string}    from            Currency to convert from
 * @param     {number}    amount          Amount to convert
 * @param     {string}    [method=ideal]  Payment method. `ideal` or `bancontact`
 * @param     {function}  callback        `(err, data)`
 *
 * @callback  callback
 * @return    {void}
 */

function priceBuy (from, amount, method, callback) {
  httpRequest ({
    path: '/buy',
    parameters: {
      method,
      from: amount,
    },
    callback,
  });
}


/**
 * Package interface & config
 *
 * @param   {object}
 * @param   {number}  [timeout=5000]  Request timeout in ms
 *
 * @return  {object}                  Interface methods
 */

function setup ({
  timeout = 5000,
}) {
  config.timeout = timeout;

  return {
    price: {
      buy: priceBuy,
      sell: priceSell,
      average: priceAverage,
    },
  };
}

module.exports = setup;
