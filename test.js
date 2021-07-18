const dotest = require ('dotest');
const pkg = require ('./');

let app = new pkg();

dotest.add ('Interface', test => {
  test()
    .isClass ('fail', 'exports', pkg)
    .isClass ('fail', 'instance', app)
    .isObject ('fail', '.price', app && app.price)
    .isFunction ('fail', '.price.average', app && app.avg)
    .isFunction ('fail', '.price.buy', app && app.buy)
    .isFunction ('fail', '.price.sell', app && app.sell)
    .done()
  ;
});


dotest.add ('price.average', test => {
  app.price.average()
    .then (data => {
      test()
        .isObject ('fail', 'data', data)
        .isNumber ('fail', 'data.price', data && data.price)
        .isNumber ('fail', 'data.volume', data && data.volume)
        .done()
      ;
    })
    .catch (err => test (err).done())
  ;
});


dotest.add ('price.buy - default method', test => {
  app.price.buy ({
    from: 'btc',
    amount: 2,
  })
    .then (data => {
      test()
        .isObject ('fail', 'data', data)
        .isNumber ('fail', 'data.price', data && data.price)
        .isNumber ('fail', 'data.eur', data && data.eur)
        .isExactly ('fail', 'data.btc', data && data.btc, 2)
        .isExactly ('fail', 'data.method', data && data.method, 'ideal')
        .done()
      ;
    })
    .catch (err => test (err).done())
  ;
});


dotest.add ('price.buy - set method', test => {
  app.price.buy ({
    from: 'eur',
    amount: 20,
    method: 'bancontact',
  })
    .then (data => {
      test()
        .isObject ('fail', 'data', data)
        .isNumber ('fail', 'data.price', data && data.price)
        .isNumber ('fail', 'data.btc', data && data.btc)
        .isExactly ('fail', 'data.eur', data && data.eur, 20)
        .isExactly ('fail', 'data.method', data && data.method, 'bancontact')
        .done()
      ;
    })
    .catch (err => test (err).done())
  ;
});


dotest.add ('price.sell', test => {
  app.price.sell ({
    from: 'btc',
    amount: 2.5,
  })
    .then (data => {
      test()
        .isObject ('fail', 'data', data)
        .isNumber ('fail', 'data.price', data && data.price)
        .isNumber ('fail', 'data.eur', data && data.eur)
        .isNumber ('fail', 'data.price', data && data.price)
        .isExactly ('fail', 'data.btc', data && data.btc, 2.5)
        .done()
      ;
    })
    .catch (err => test (err).done())
  ;
});


dotest.add ('Error: timeout', test => {
  const tmp = new pkg ({
    timeout: 1,
  });

  let error;
  let data;

  tmp.price.average()
    .then (dat => data = dat)
    .catch (err => error = err)
    .finally (() => {
      test()
        .isError ('fail', 'error', error)
        .isUndefined ('fail', 'data', data)
        .isExactly ('fail', 'error.code', error && error.code, 'TIMEOUT')
        .done()
      ;
    })
  ;
});


dotest.run (1000);
