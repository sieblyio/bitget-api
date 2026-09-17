import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .submitNewOrder({
    category: 'SPOT',
    symbol: 'BGBUSDT',
    orderType: 'limit',
    qty: '123',
    price: '1.11',
    side: 'buy',
    posSide: 'long',
    timeInForce: 'gtc',
    reduceOnly: 'no',
    autoBorrow: 'no',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
