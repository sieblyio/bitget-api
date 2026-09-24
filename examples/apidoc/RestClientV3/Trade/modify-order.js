import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .modifyOrder({
    orderId: '1',
    qty: '123',
    price: '123',
    autoCancel: 'no',
    symbol: 'BTCUSDT',
    category: 'SPOT',
    requestId: 123456,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
