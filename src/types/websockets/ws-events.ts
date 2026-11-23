export interface MessageEventLike {
  target: WebSocket;
  type: 'message';
  data: string;
}

export function isMessageEvent(msg: unknown): msg is MessageEventLike {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike;
  return message['type'] === 'message' && typeof message['data'] === 'string';
}

export interface WsBaseEvent<TAction = 'snapshot' | string, TData = unknown> {
  action: TAction;
  arg: unknown;
  data: TData[];
}

export interface WsSnapshotChannelEvent extends WsBaseEvent<'snapshot'> {
  arg: {
    instType: string;
    channel: string;
    instId: string;
  };
}

export interface WsSnapshotAccountEvent extends WsBaseEvent<'snapshot'> {
  arg: {
    instType: string;
    channel: 'account';
    instId: string;
  };
}

export interface WsSnapshotPositionsEvent extends WsBaseEvent<'snapshot'> {
  arg: {
    instType: string;
    channel: 'positions';
    instId: string;
  };
}

export interface WsAccountSnapshotDataUMCBL {
  marginCoin: string;
  locked: string;
  available: string;
  maxOpenPosAvailable: string;
  maxTransferOut: string;
  equity: string;
  usdtEquity: string;
}

export interface WsAccountSnapshotUMCBL extends WsBaseEvent<'snapshot'> {
  arg: {
    instType: 'umcbl';
    channel: 'account';
    instId: string;
  };
  data: WsAccountSnapshotDataUMCBL[];
}

export interface WsPositionSnapshotDataUMCBL {
  posId: string;
  instId: string;
  instName: string;
  marginCoin: string;
  margin: string;
  marginMode: string;
  holdSide: string;
  holdMode: string;
  total: string;
  available: string;
  locked: string;
  averageOpenPrice: string;
  leverage: number;
  achievedProfits: string;
  upl: string;
  uplRate: string;
  liqPx: string;
  keepMarginRate: string;
  marginRate: string;
  cTime: string;
  uTime: string;
  markPrice: string;
  /** Cash dividend, USDT (Classic V2 positions channel) */
  cashDividend?: string;
}

/** UTA reality-fills public trade row. All fills are from the taker's perspective */
export interface WsRealityFillDataV3 {
  symbol: string;
  execId: string;
  price: string;
  size: string;
  side: 'buy' | 'sell';
  execVenue: 'internal_market' | 'lit_market';
  ts: string;
}

/**
 * UTA reality-fills push. No historical snapshot is sent on subscription.
 * Requires API key authentication and BD whitelist access.
 * https://www.bitget.com/docs/uta/websocket/reality/public/Reality-Fills-Channel
 */
export interface WsRealityFillsEventV3
  extends WsBaseEvent<'update', WsRealityFillDataV3> {
  arg: {
    instType: 'UTA';
    topic: 'reality-fills';
    symbol: string;
  };
  ts: string;
}

/** UTA fast-fill push data. Only the calling user's fills are returned */
export interface WsFastFillDataV3 {
  category:
    | 'spot'
    | 'margin'
    | 'usdt-futures'
    | 'coin-futures'
    | 'usdc-futures';
  orderId: string;
  clientOid: string;
  symbol: string;
  execId: string;
  side: 'buy' | 'sell';
  holdSide: 'long' | 'short';
  execPrice: string;
  execQty: string;
  tradeScope: 'taker' | 'maker';
  /** Empty for fills outside Reality (rToken) trading */
  execVenue: 'internal_market' | 'lit_market' | '';
  execTime: string;
  updatedTime: string;
}

/**
 * UTA fast-fill push. data is a single object, not an array.
 * https://www.bitget.com/docs/uta/websocket/private/Fast-Fill-Channel
 */
export interface WsFastFillEventV3 {
  arg: {
    instType: 'UTA';
    topic: 'fast-fill';
  };
  action: 'update';
  ts: number;
  data: WsFastFillDataV3;
}

/** UTA reality-orderbook push (ts/seq/pseq removed July 2026). Every push is a full snapshot. */
export interface WsRealityOrderBookDataV3 {
  a: [string, string][];
  b: [string, string][];
}

/**
 * UTA reality-orderbook-segmented push.
 * Each level is [price, onshoreQty, offshoreQty].
 * Every push is a full snapshot. Whitelist required.
 * Go-live 20 Oct 2026. Pairs that have not finished the matching-engine upgrade do not push.
 * A crossed book after the upgrade is expected.
 */
export interface WsRealityOrderBookSegmentedDataV3 {
  a: [string, string, string][];
  b: [string, string, string][];
}

export interface WSPositionSnapshotUMCBL extends WsBaseEvent<'snapshot'> {
  arg: {
    instType: 'umcbl';
    channel: 'positions';
    instId: string;
  };
  data: WsPositionSnapshotDataUMCBL[];
}

/** Classic V2 depth channel push data. checksum removed May 2026 - use seq instead */
export interface WsDepthBookDataV2 {
  asks: [string, string][];
  bids: [string, string][];
  ts: string;
  seq: string;
  /** Futures books channel only - previous push serial number */
  pseq?: string;
}

/** UTA account channel coin row */
export interface WsAccountCoinV3 {
  coin: string;
  balance: string;
  /** Coin balance before borrowing-related amounts are deducted */
  balanceOriginal?: string;
  available: string;
  locked: string;
  equity: string;
  usdValue: string;
  borrow: string;
  debts: string;
  bonus?: string;
  /** Platform collateral limit status */
  collateralLimitStatus?:
    | 'normal'
    | 'user_warning'
    | 'platform_warning'
    | 'user_limited'
    | 'platform_limited';
}

/** UTA account channel push. action is snapshot or update */
export interface WsAccountDataV3 {
  totalEquity: string;
  effEquity: string;
  mmr: string;
  imr: string;
  mgnRatio: string;
  positionMgnRatio: string;
  unrealisedPnL: string;
  coin: WsAccountCoinV3[];
}

/**
 * UTA depth push.
 * books1 and books5: every message is a full snapshot.
 * books and books50: the first message is a snapshot, later messages are incremental updates.
 * Do not replace the local book with a books or books50 update.
 * pseq is set on books and books50.
 * rToken: books1 pushes at all times. books5, books50, and books push only outside US market hours.
 */
export interface WsOrderBookDataV3 {
  a: [string, string][];
  b: [string, string][];
  seq: string | number;
  pseq?: string | number;
  /** Present on the books topic */
  maxDepth?: string;
  ts: string;
}
