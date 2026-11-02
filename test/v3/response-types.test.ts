import { RestClientV3 } from '../../src/rest-client-v3.js';

describe('Bitget V3 empty responses', () => {
  const api = new RestClientV3();

  afterEach(() => jest.restoreAllMocks());

  it.each([null, []])('accepts an empty position list: %p', async (list) => {
    const response: Awaited<ReturnType<RestClientV3['getCurrentPosition']>> = {
      code: '00000',
      msg: 'success',
      requestTime: 1,
      data: { list },
    };
    const request = jest.spyOn(api, 'getPrivate').mockResolvedValue(response);
    const params = { category: 'USDT-FUTURES' as const, symbol: 'BTCUSDT' };

    expect(await api.getCurrentPosition(params)).toBe(response);
    expect(request).toHaveBeenCalledWith(
      '/api/v3/position/current-position',
      params,
    );
  });

  it.each([
    { list: null, cursor: null },
    { list: [], cursor: null },
    { list: [], cursor: '' },
    {
      list: [
        {
          category: 'USDT-FUTURES',
          id: '1',
          symbol: 'BTCUSDT',
          coin: 'USDT',
          type: 'TRANSFER_IN' as const,
          amount: '10',
          fee: '0',
          balance: '10',
          ts: '1',
        },
      ],
      cursor: '1',
    },
  ])('preserves financial record pagination: %p', async (data) => {
    const response: Awaited<ReturnType<RestClientV3['getFinancialRecords']>> = {
      code: '00000',
      msg: 'success',
      requestTime: 1,
      data,
    };
    const request = jest.spyOn(api, 'getPrivate').mockResolvedValue(response);
    const params = { category: 'USDT-FUTURES' as const };

    expect(await api.getFinancialRecords(params)).toBe(response);
    expect(request).toHaveBeenCalledWith(
      '/api/v3/account/financial-records',
      params,
    );
  });
});
