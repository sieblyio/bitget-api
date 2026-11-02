import { InternalAxiosRequestConfig } from 'axios';

import {
  GetStockPlusMaxPurchaseRequestV3,
  RestClientV3,
  StockPlusMaxPurchaseV3,
} from '../../src/index.js';

describe('Bitget Stock+ max purchase', () => {
  it.each<{
    params: GetStockPlusMaxPurchaseRequestV3;
    data: StockPlusMaxPurchaseV3;
  }>([
    {
      params: { symbol: 'AAPL.US', orderType: 'MO', side: 'Buy' },
      data: { cashMaxQty: '', marginMaxQty: '' },
    },
    {
      params: {
        symbol: 'AAPL.US',
        orderType: 'LO',
        side: 'Sell',
        price: '200',
        currency: 'USD',
        orderId: '1',
      },
      data: { cashMaxQty: '100', marginMaxQty: '300' },
    },
  ])('queries max purchase with $params', async ({ params, data }) => {
    const response = { code: '00000', msg: 'success', requestTime: 1, data };
    const adapter = jest.fn(async (config: InternalAxiosRequestConfig) => ({
      data: response,
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    }));
    const api = new RestClientV3({}, { adapter });
    const privateRequest = jest.spyOn(api, 'getPrivate');

    const result = await api.getStockPlusMaxPurchase(params);

    expect(result).toEqual(response);
    expect(privateRequest).toHaveBeenCalledWith(
      '/api/v3/stockplus/trade/max-purchase',
      params,
    );
    expect(adapter).toHaveBeenCalledTimes(1);
    expect(adapter.mock.calls[0][0]).toMatchObject({
      method: 'get',
      url: 'https://api.bitget.com/api/v3/stockplus/trade/max-purchase',
      params,
    });
  });
});
