/*
Name:           bitonic
Description:    Node.js API wrapper for Bitonic.nl (unofficial)
License:        The Unlicense (see LICENSE file)
Author:         Franklin van de Meent (https://frankl.in)
Source & dcod:  https://github.com/fvdm/nodejs-bitonic
Feedback:       https://github.com/fvdm/nodejs-bitonic/issues
*/

const httpreq = require ('httpreq');

// Defaults
const config = {
  timeout: 5000
};


/**
 * Process httpreq response
 *
 * @callback  callback
 * @param     {Error|null}  err  httpreq Error
 * @param     {object}      res  httpreq response
 * @param     {function}    callback  `(err, data)`
 * @return    {void}
 */

function response (err, res, callback) {
  let data;
  let error;

  if (err) {
    callback (err);
    return;
  }

  try {
    data = JSON.parse (res.body);
    callback (null, data);
  }
  catch (e) {
    callback (e);
  }
}


/**
 * Send API request
 *
 * @callback  callback
 * @param     {string}    method    HTTP method, i.e. GET
 * @param     {string}    path      API path, i.e. /sell
 * @param     {function}  callback  `(err, data)`
 * @return    {void}
 */

function request (method, path, parameters, callback) {
  const options = {
    method,
    parameters,
    url: 'https://bitonic.nl/api',
    timeout: config.timeout
  };

  if (typeof parameters === 'function') {
    callback = parameters;
    options.parameters = null;
  }

  httpreq.doRequest (options, (err, res) => {
    response (err, res, callback);
  });
}


/**
 * Method: price.average
 *
 * @callback  callback
 * @param     {function}  callback  `(err, data)`
 * @return    {void}
 */

function priceAverage (callback) {
  request ('GET', '/price', callback);
}


/**
 * Method: price.sell
 *
 * @callback  callback
 * @param     {string}    from      Currency to convert from
 * @param     {number}    amount    Amount to convert
 * @param     {function}  callback  `(err, data)`
 * @return    {void}
 */

function priceSell (from, amount, callback) {
  const parameters = {};

  if (typeof amount === 'function') {
    callback = amount;
    amount = 1;
  }

  if (typeof from === 'number') {
    amount = from;
    from = 'btc';
  }

  parameters[from] = amount;
  request ('GET', '/sell', parameters, callback);
}


/**
 * Method: price.buy
 *
 * @callback  callback
 * @param     {string}    from      Currency to convert from
 * @param     {number}    amount    Amount to convert
 * @param     {function}  callback  `(err, data)`
 * @return    {void}
 */

function priceBuy (from, amount, callback) {
  const parameters = {};

  if (typeof amount === 'function') {
    callback = amount;
    amount = 1;
  }

  if (typeof from === 'number') {
    amount = from;
    from = 'btc';
  }

  parameters[from] = amount;
  request ('GET', '/buy', parameters, callback);
}


/**
 * Package interface & config
 *
 * @param   {object}  [conf]               Configuration
 * @param   {number}  [conf.timeout=5000]  Request timeout in ms
 * @return  {object}                       Interface methods
 */

function setup (conf) {
  if (conf instanceof Object) {
    conf.forEach ((val, key) => {
      config[key] = val;
    });
  }

  return {
    price: {
      buy: priceBuy,
      sell: priceSell,
      average: priceAverage
    }
  };
}

module.exports = setup;