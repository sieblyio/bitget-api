import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .validateNeutralGridBot({
    category: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
    maxPrice: '70000',
    minPrice: '60000',
    gridNum: '10',
    gridOrderMode: 'arithmetic',
    investmentAmount: [
      {
        coin: 'USDT',
        amount: '1000',
      },
    ],
    fundsSource: ['uta'],
    leverage: '5',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
