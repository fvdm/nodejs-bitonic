const Bitonic = require ('bitonic');
const bitonic = new Bitonic;

// Get BTC price for 10.54 EUR
bitonic.priceBuy ({
  from: 'eur',
  amount: 10.54,
})
  .then (data => console.log (`For ${data.eur} EUR you get ${data.btc} BTC`))
  .catch (console.error)
;

// Get EUR price for selling 2 BTC
bitonic.priceSell ({
  from: 'btc',
  amount: 2,
})
  .then (data => console.log (`Selling ${data.btc} BTC will earn you ${data.eur} EUR`))
  .catch (console.error)
;
