import {
  BitgetInstTypeV3,
  WsPublicTopicV3,
} from '../../src/types/websockets/ws-general.js';
import { isPrivateChannel } from '../../src/util/websocket-util.js';
import { WebsocketClientV3 } from '../../src/websocket-client-v3.js';

class TestWebsocketClientV3 extends WebsocketClientV3 {
  public subscribeTopicsForWsKey = jest.fn().mockResolvedValue(undefined);
}

describe('Bitget V3 financial parameter channels', () => {
  const subscriptions: {
    topic: WsPublicTopicV3;
    payload: { instType: BitgetInstTypeV3; symbol?: string; coin?: string };
  }[] = [
    { topic: 'instruments', payload: { instType: 'usdt-futures' } },
    {
      topic: 'open-interest-limit',
      payload: { instType: 'usdt-futures', symbol: 'BTCUSDT' },
    },
    {
      topic: 'position-tier',
      payload: { instType: 'usdt-futures', symbol: 'BTCUSDT' },
    },
    {
      topic: 'funding-rate',
      payload: { instType: 'usdt-futures', symbol: 'BTCUSDT' },
    },
    { topic: 'margin-loan', payload: { instType: 'uta', coin: 'BTC' } },
    { topic: 'margin-coins', payload: { instType: 'uta', coin: 'BTC' } },
  ];

  it.each(subscriptions)(
    'subscribes to $topic without authentication',
    async (request) => {
      const api = new TestWebsocketClientV3();

      expect(isPrivateChannel(request.topic)).toBe(false);
      await api.subscribe(request, 'v3Public');
      expect(api.subscribeTopicsForWsKey).toHaveBeenCalledWith(
        [request],
        'v3Public',
      );
    },
  );
});
