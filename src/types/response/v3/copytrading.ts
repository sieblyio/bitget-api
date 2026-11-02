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

/** Follower copy account. Lead accounts use CopyFuturesMaxTransferableV3. */
export interface CopyFuturesCopyMaxTransferableV3 {
  maxTransferable: string;
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

export interface CopyFuturesPortfolioOverviewV3 {
  projectId: string;
  asset: string;
  roi: string;
  totalProfit: string;
  followerProfit: string;
  maxDrawdown: string;
}

export interface CopyFuturesCopySettingsV3 {
  type: 'fixed_ratio' | 'fixed_margin' | string;
  amount: string;
  tradingPairList: string[];
  marginPerOrder: string;
  autoCopy: 'on' | 'off' | string;
  leverage: string;
  maxEntrySlippage: string;
  maxMarginRatio: string;
  /** API field name (Bitget spelling). */
  maxPostionValue: string;
}

export interface CopyFuturesFollowerTransferRecordV3 {
  fromType: string;
  toType: string;
  amount: string;
  coin: string;
  status: string;
  createdTime: string;
}

export interface CopyFuturesFollowerTransferRecordListV3 {
  list: CopyFuturesFollowerTransferRecordV3[];
  nextCursor?: string;
}

export interface CopyFuturesCurrentCopyV3 {
  eliteTrader: string;
  estNetProfit: string;
  profitShare: string;
  estValue: string;
  available: string;
  currentInvestment: string;
}

export interface CopyFuturesCopyProfitDetailItemV3 {
  settleTime: string;
  profit: string;
  allocatedPnl: string;
  pendingPnl: string;
  shareRatio: string;
  shareProfit: string;
}

export interface CopyFuturesCopyProfitDetailsV3 {
  list: CopyFuturesCopyProfitDetailItemV3[];
  nextCursor?: string;
}

export interface CopyFuturesFollowerPositionV3 {
  symbol: string;
  marginCoin: string;
  posSide: 'long' | 'short' | string;
  total: string;
  leverage: string;
  avgPrice: string;
  marginMode: string;
  holdMode: string;
  createdTime: string;
  positionId: string;
}

export interface CopyFuturesFollowerPositionsV3 {
  list: CopyFuturesFollowerPositionV3[];
}

export interface CopyFuturesTpSlOrderV3 {
  strategyId: string;
  category: string;
  symbol: string;
  qty: string;
  posSide: string;
  status: string;
  tpTriggerBy: string;
  slTriggerBy: string;
  takeProfit: string;
  stopLoss: string;
  tpOrderType: string;
  slOrderType: string;
}

export interface CopyFuturesTpSlResponseV3 {
  strategyId: string;
}

export interface CopyFuturesCurrentTpSlOrdersV3 {
  list: CopyFuturesTpSlOrderV3[];
}

export interface CopyFuturesTpSlOrderHistoryV3 {
  list: CopyFuturesTpSlOrderV3[];
  cursor?: string;
}
