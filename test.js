const dotest = require ('dotest');
const pkg = require ('./');

let app = pkg();

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


dotest.add ('price.buy - default method', test => {
  app.price.buy ('btc', 2, (err, data) => {
    test (err)
      .isObject ('fail', 'data', data)
      .isNumber ('fail', 'data.price', data && data.price)
      .isNumber ('fail', 'data.eur', data && data.eur)
      .isExactly ('fail', 'data.btc', data && data.btc, 2)
      .isExactly ('fail', 'data.method', data && data.method, 'ideal')
      .done();
  });
});


dotest.add ('Error: timeout', test => {
  const tmp = pkg ({
    timeout: 1
  });

  tmp.price.average ((err, data) => {
    test()
      .isError ('fail', 'err', err)
      .isUndefined ('fail', 'data', data)
      .isExactly ('fail', 'err.code', err && err.code, 'TIMEOUT')
      .done();
  });
});


dotest.run (1000);
