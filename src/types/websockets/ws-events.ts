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

/** UTA reality-orderbook push (ts/seq/pseq removed July 2026) */
export interface WsRealityOrderBookDataV3 {
  a: [string, string][];
  b: [string, string][];
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
