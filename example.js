const bitonic = require ('bitonic');

// Get BTC price for 10.54 BTC
bitonic.price.buy ('eur', 10.54, (err, data) => {
  if (err) {
    console.error (err);
    return;
  }

  console.log ('For 10.54 EUR you get ' + data.price + ' BTC');
});

// Get EUR price for selling 2 BTC
bitonic.price.sell ('btc', 2, (err, data) => {
  if (err) {
    console.error (err);
    return;
  }

  console.log ('Selling 2 BTC will earn you ' + data.price + ' EUR');
});
