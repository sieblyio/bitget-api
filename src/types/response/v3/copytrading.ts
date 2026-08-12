/**
 *
 *
 * Copy Trading | Futures (UTA)
 *
 *
 */

export interface CopyFuturesMarginDetailV3 {
  marginCoin: string;
  maxLongCount: string;
  remainingLongCount: string;
  maxShortCount: string;
  remainingShortCount: string;
}

export interface CopyFuturesTradingPairV3 {
  symbol: string;
  leverage: string;
  marginDetails: CopyFuturesMarginDetailV3[];
}

export interface CopyFuturesPositionSummaryV3 {
  unrealizedPnl: string;
  realizedPnl: string;
  holdSize: string;
  avgPrice: string;
  symbol: string;
  leverage: string;
  marginMode: string;
  liqPrice: string;
  margin: string;
  holdSide: string;
  roi: string;
  markPrice: string;
  positionValue: string;
}

export interface CopyFuturesMaxTransferableV3 {
  maxTransferable: string;
  available: string;
}

export interface CopyFuturesTransferResponseV3 {
  transferId: string;
}

/** May be a single value or comma-separated values */
export type CopyFuturesTransferAccountTypeV3 =
  | 'spot'
  | 'uta'
  | 'lead'
  | 'otc'
  | string;

export interface CopyFuturesTransferRecordV3 {
  transferId: string;
  fromType: CopyFuturesTransferAccountTypeV3;
  toType: CopyFuturesTransferAccountTypeV3;
  amount: string;
  coin: string;
  status: 'Successful' | 'Failed' | 'Processing';
  createdTime: string;
}

export interface CopyFuturesTransferRecordListV3 {
  list: CopyFuturesTransferRecordV3[];
}

export interface CopyFuturesCurrentFollowerV3 {
  followerName: string;
  estimateAssets: string;
  totalProfit: string;
  totalShareProfit: string;
  totalInvestment: string;
  canRemove: 'yes' | 'no';
  followDays: string;
  totalAssets: string;
  startTime: string;
}

export interface CopyFuturesCurrentFollowersV3 {
  list: CopyFuturesCurrentFollowerV3[];
}

export interface CopyFuturesHistoryFollowerV3 {
  followerName: string;
  totalProfit: string;
  totalShareProfit: string;
  totalInvestment: string;
  startTime: string;
  endTime: string;
}

export interface CopyFuturesHistoryFollowersV3 {
  list: CopyFuturesHistoryFollowerV3[];
}

export interface CopyFuturesProfitSummaryV3 {
  totalProfit: string;
  totalAllocatedProfit: string;
  totalPendingProfit: string;
}

export interface CopyFuturesProfitDetailV3 {
  followerName: string;
  profit: string;
  allocatedPnl: string;
  pendingPnl: string;
  shareRatio: string;
  shareProfit: string;
  reason: 'period' | 'unfollow' | string;
  settleTime: string;
}

export interface CopyFuturesProfitDetailsV3 {
  list: CopyFuturesProfitDetailV3[];
  nextCursor: string;
}
