/*
Name:           bitonic
Description:    Node.js API wrapper for Bitonic.nl (unofficial)
License:        The Unlicense (see LICENSE file)
Author:         Franklin (https://fvdm.com)
Source & docs:  https://github.com/fvdm/nodejs-bitonic
*/

module.exports = class Bitonic {

  /**
   * Configuration
   *
   * @param   {object}  args
   * @param   {number}  [args.timeout=5000]  Request time out in ms
   */

  constructor ({
    timeout = 5000,
  } = {}) {
    this._config = {
      timeout,
    };
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
  }) {
    parameters = {},
    const options = {
      method: 'GET',
      signal: AbortSignal.timeout( this._config.timeout ),
      headers: {
        'User-Agent': 'nodejs-bitonic (https://github.com/fvdm/nodejs-bitonic)',
      },
    };

    const params = new URLSearchParams( parameters );
    const url = `https://bitonic.nl/api${path}?${params}`; 

    return fetch( url, options )
      .then( res => res.json() )
    ; 
  }


  /**
   * Method: priceAverage
   *
   * @return  {Promise<object>}
   */

  async priceAverage () {
    return this._apiRequest ({
      path: '/price',
    });
  }


  /**
   * Method: priceSell
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
   * Method: priceBuy
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
