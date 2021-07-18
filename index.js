/*
Name:           bitonic
Description:    Node.js API wrapper for Bitonic.nl (unofficial)
License:        The Unlicense (see LICENSE file)
Author:         Franklin (https://fvdm.com)
Source & docs:  https://github.com/fvdm/nodejs-bitonic
*/

const { doRequest } = require ('httpreq');

module.exports = class Bitonic {

  /**
   * Configuration
   *
   * @param   {object}
   * @param   {numbet}  [.timeout]  Request time out in ms
   */

  constuctor ({
    timeout = 5000,
  }) {
    this._config = {
      timeout;
    };
  }


  /**
   * Promisify httpreq.doRequest
   *
   * @param   {object}  options  doRequest options
   *
   * @return  {Promise<object>}
   */

  _httpRequest (options) {
    return new Promise ((resolve, reject) => {
      doRequest (options, (err, res) => {
        if (err) {
          reject (err);
          return;
        }

        resolve (res);
      });
    });
  }


  /**
   * Send API request
   *
   * @param   {object}  args
   * @param   {string}  args.path          API path, i.e. /sell
   * @param   {object}  [args.parameters]  Request parameters
   *
   * @return  {Promise<object>}
   */

  async _apiRequest ({
    path,
    parameters = null,
  }) {
    const options = {
      method: 'GET',
      parameters,
      url: `https://bitonic.nl/api${path}`,
      timeout: this._config.timeout,
      headers: {
        'User-Agent': 'nodejs-bitonic (https://github.com/fvdm/nodejs-bitonic)',
      },
    };

    return this._httpRequest (options)
      .then (res => res.body)
      .then (JSON.parse)
    ;
  }


  /**
   * Method: price.average
   *
   * @return  {Promise<object>}
   */

  async priceAverage () {
    return this._apiRequest ({
      path: '/price',
    });
  }


  /**
   * Method: price.sell
   *
   * @param   {object}  args
   * @param   {string}  args.from    Currency to convert from
   * @param   {number}  args.amount  Amount to convert
   *
   * @return  {Promise<object>}
   */

  async priceSell ({
    from,
    amount,
  }) {
    return this._apiRequest ({
      path: '/sell',
      parameters: {
        [from]: amount,
      },
    });
  }


  /**
   * Method: price.buy
   *
   * @param   {object}  args
   * @param   {string}  args.from            Currency to convert from
   * @param   {number}  args.amount          Amount to convert
   * @param   {string}  [args.method=ideal]  Payment method. `ideal` or `bancontact`
   *
   * @return  {Promise<object>}
   */

  async priceBuy ({
    from,
    amount,
    method = 'ideal',
  }) {
    return this._apiRequest ({
      path: '/buy',
      parameters: {
        [from]: amount,
        method,
      },
    });
  }

};
