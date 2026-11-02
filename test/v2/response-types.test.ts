import { RestClientV2 } from '../../src/rest-client-v2.js';

describe('Bitget V2 empty pending orders', () => {
  const api = new RestClientV2();

  afterEach(() => jest.restoreAllMocks());

  it.each([null, []])(
    'accepts an empty order list: %p',
    async (entrustedList) => {
      const response: Awaited<
        ReturnType<RestClientV2['getFuturesOpenOrders']>
      > = {
        code: '00000',
        msg: 'success',
        requestTime: 1,
        data: { entrustedList, endId: '' },
      };
      const request = jest.spyOn(api, 'getPrivate').mockResolvedValue(response);
      const params = { productType: 'USDT-FUTURES' as const };

      expect(await api.getFuturesOpenOrders(params)).toBe(response);
      expect(request).toHaveBeenCalledWith(
        '/api/v2/mix/order/orders-pending',
        params,
      );
    },
  );

  it.each([null, []])(
    'accepts an empty plan order list: %p',
    async (entrustedList) => {
      const response: Awaited<
        ReturnType<RestClientV2['getFuturesPlanOrders']>
      > = {
        code: '00000',
        msg: 'success',
        requestTime: 1,
        data: { entrustedList, endId: '' },
      };
      const request = jest.spyOn(api, 'getPrivate').mockResolvedValue(response);
      for (const planType of [
        'normal_plan',
        'track_plan',
        'profit_loss',
      ] as const) {
        const params = { productType: 'USDT-FUTURES' as const, planType };

        expect(await api.getFuturesPlanOrders(params)).toBe(response);
        expect(request).toHaveBeenLastCalledWith(
          '/api/v2/mix/order/orders-plan-pending',
          params,
        );
      }
    },
  );
});
