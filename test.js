const dotest = require ('dotest');
const pkg = require ('./');

let config = {
  timeout: String (process.env.BITONIC_TIMEOUT)
};

let app = pkg (config);

dotest.add ('Interface', test => {
  const price = app && app.price;
  const avg = price && price.average;
  const buy = price && price.buy;
  const sell = price && price.sell;

  test()
    .isFunction ('fail', 'exports', pkg)
    .isObject ('fail', 'app', app)
    .isObject ('fail', '.price', price)
    .isFunction ('fail', '.price.average', avg)
    .isFunction ('fail', '.price.buy', buy)
    .isFunction ('fail', '.price.sell', sell)
    .done();
});


dotest.add ('price.average', test => {
  app.price.average ((err, data) => {
    test (err)
      .isObject ('fail', 'data', data)
      .isNumber ('fail', 'data.price', data && data.price)
      .isNumber ('fail', 'data.volume', data && data.volume)
      .done();
  });
});


dotest.run (1000);
