const dotest = require( 'dotest' );
const pkg = require( './' );

let app = new pkg();

dotest.add( 'Interface', test => {
  test()
    .isClass( 'fail', 'exports', pkg )
    .isFunction( 'fail', '.priceAverage', app && app.priceAverage )
    .isFunction( 'fail', '.priceBuy', app && app.priceBuy )
    .isFunction( 'fail', '.priceSell', app && app.priceSell )
    .done()
  ;
} );


dotest.add( 'priceAverage', test => {
  app.priceAverage()
    .then( data => {
      test()
        .isObject( 'fail', 'data', data )
        .isNumber( 'fail', 'data.price', data && data.price )
        .isNumber( 'fail', 'data.volume', data && data.volume )
        .done()
      ;
    } )
    .catch( err => test( err ).done() )
  ;
} );


dotest.add( 'priceBuy - default method', test => {
  app.priceBuy( {
    from: 'btc',
    amount: 2,
  } )
    .then( data => {
      test()
        .isObject( 'fail', 'data', data )
        .isNumber( 'fail', 'data.price', data && data.price )
        .isNumber( 'fail', 'data.eur', data && data.eur )
        .isExactly( 'fail', 'data.btc', data && data.btc, 2 )
        .isExactly( 'fail', 'data.method', data && data.method, 'ideal' )
        .done()
      ;
    } )
    .catch( err => test( err ).done() )
  ;
} );


dotest.add( 'priceBuy - set method', test => {
  app.priceBuy( {
    from: 'eur',
    amount: 20,
    method: 'bancontact',
  } )
    .then( data => {
      test()
        .isObject( 'fail', 'data', data )
        .isNumber( 'fail', 'data.price', data && data.price )
        .isNumber( 'fail', 'data.btc', data && data.btc )
        .isExactly( 'fail', 'data.eur', data && data.eur, 20 )
        .isExactly( 'fail', 'data.method', data && data.method, 'bancontact' )
        .done()
      ;
    } )
    .catch( err => test( err ).done() )
  ;
} );


dotest.add( 'priceSell', test => {
  app.priceSell( {
    from: 'btc',
    amount: 2.5,
  } )
    .then( data => {
      test()
        .isObject( 'fail', 'data', data )
        .isNumber( 'fail', 'data.price', data && data.price )
        .isNumber( 'fail', 'data.eur', data && data.eur )
        .isNumber( 'fail', 'data.price', data && data.price )
        .isExactly( 'fail', 'data.btc', data && data.btc, 2.5 )
        .done()
      ;
    } )
    .catch( err => test( err ).done() )
  ;
} );


dotest.add( 'Error: timeout', test => {
  const tmp = new pkg( {
    timeout: 1,
  } );

  let error;
  let data;

  tmp.priceAverage()
    .then( dat => { data = dat; } )
    .catch( err => { error = err; } )
    .finally( () => {
      test()
        .isError( 'fail', 'error', error )
        .isUndefined( 'fail', 'data', data )
        .isExactly( 'fail', 'error.name', error && error.name, 'TimeoutError' )
        .done()
      ;
    } )
  ;
} );


dotest.run( 1000 );
