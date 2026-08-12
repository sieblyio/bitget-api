export interface PublicFillV3 {
  execId: string;
  price: string;
  size: string;
  side: 'sell' | 'buy';
  ts: string;
}

export interface CandlestickV3 extends Array<string> {
  0: string; // timestamp
  1: string; // open price
  2: string; // high price
  3: string; // low price
  4: string; // close price
  5: string; // volume
  6: string; // turnover
}

export interface ContractOiV3 {
  symbol: string;
  notionalValue: string;
  totalNotionalValue: string;
}

export interface CurrentFundingRateV3 {
  symbol: string;
  fundingRate: string;
  fundingRateInterval: string;
  nextUpdate: string;
  minFundingRate: string;
  maxFundingRate: string;
  cashDividend?: string;
  cashDividendNextUpdate?: string;
}

export interface DiscountRateTierV3 {
  tierStartValue: string;
  discountRate: string;
}

export interface DiscountRateV3 {
  coin: string;
  list: DiscountRateTierV3[];
}

export interface HistoryFundingRateV3 {
  symbol: string;
  fundingRate: string;
  fundingRateTimestamp: string;
}

export interface MarginLoanV3 {
  dailyInterest: string;
  annualInterest: string;
  limit: string;
  masterSubLimit?: string;
  /** Bitget spelling */
  platformRemaingQuota?: string;
}

export interface OpenInterestItemV3 {
  symbol: string;
  openInterest: string;
}

export interface OpenInterestV3 {
  list: OpenInterestItemV3[];
  ts: string;
}

export interface PositionTierV3 {
  tier: string;
  minTierValue: string;
  maxTierValue: string;
  leverage: string;
  mmr: string;
}

export interface RiskReserveRecordV3 {
  balance: string;
  amount: string;
  ts: string;
  type?: string;
}

export interface RiskReserveV3 {
  totalBalance?: string;
  coin: string;
  riskReserveRecords: RiskReserveRecordV3[];
}

export interface RiskReserveHourRecordV3 {
  amount: string;
  balance: string;
  ts: string;
}

export interface RiskReserveHourV3 {
  coin: string;
  riskReserveRecords: RiskReserveHourRecordV3[];
}

export interface RiskReserveAllItemV3 {
  symbols: string[];
  coin: string;
  balance: string;
}

export interface RiskReserveAllV3 {
  list: RiskReserveAllItemV3[];
}

export interface InstrumentV3 {
  symbol: string;
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  baseCoin: string;
  quoteCoin: string;
  buyLimitPriceRatio: string;
  sellLimitPriceRatio: string;
  feeRateUpRatio: string;
  minOrderQty: string;
  maxOrderQty: string;
  maxMarketOrderQty: string;
  pricePrecision: string;
  quantityPrecision: string;
  quotePrecision: string;
  minOrderAmount: string;
  maxSymbolOrderNum: string;
  maxProductOrderNum: string;
  status:
    | 'listed'
    | 'online'
    | 'limit_open'
    | 'limit_close'
    | 'offline'
    | 'restrictedAPI';
  offTime: string;
  limitOpenTime: string;
  maintainTime: string;
  areaSymbol?: string;

  isRwa?: 'YES' | 'NO';
  /** yes = Reality stock token, no = non-Reality stock token */
  isReality?: 'yes' | 'no';

  // Futures specific fields
  makerFeeRate?: string;
  takerFeeRate?: string;
  openCostUpRatio?: string;
  priceMultiplier?: string;
  quantityMultiplier?: string;
  type?: 'perpetual' | 'delivery';
  symbolType?: 'crypto' | 'metal' | 'stock' | 'commodity';
  maxPositionNum?: string;
  deliveryTime?: string;
  deliveryStartTime?: string;
  deliveryPeriod?: string;
  /** Launch time - Unix millisecond timestamp. Null for some margin pairs. */
  launchTime?: string | null;
  fundInterval?: string;
  minLeverage?: string;
  maxLeverage?: string;

  // Margin specific fields
  isIsolatedBaseBorrowable?: 'YES' | 'NO';
  isIsolatedQuotedBorrowable?: 'YES' | 'NO';
  warningRiskRatio?: string;
  liquidationRiskRatio?: string;
  maxCrossedLeverage?: string;
  maxIsolatedLeverage?: string;
  userMinBorrow?: string;
}

export interface MarketFeeGroupLabelV3 {
  weight: string;
  label: string;
  symbols: string[];
}

export interface MarketFeeGroupTierV3 {
  level: string;
  makerFeeRate: string;
  /** PRO1~PRO6 only. Taker fee rate in decimal form */
  takerFeeRate?: string;
}

export interface MarketFeeGroupV3 {
  category: string;
  group: string;
  labelList: MarketFeeGroupLabelV3[];
  tierList: MarketFeeGroupTierV3[];
}

export interface MarketScoreWeightV3 {
  category: string;
  label: string;
  symbol: string;
  requiredSpread: string;
  minMakerVolume: string;
  weight: string;
}

export interface LiquidationV3 {
  symbol: string;
  side: 'buy' | 'sell';
  price: string;
  amount: string;
  ts: string;
}

export interface LiquidationsV3 {
  list: LiquidationV3[];
  cursor?: string;
}

export interface OrderBookV3 {
  a: string[][]; // asks - [price, size]
  b: string[][]; // bids - [price, size]
  ts: string;
}

export interface RealityOrderBookV3 {
  symbol: string;
  a: string[][];
  b: string[][];
  ts: string;
}

export interface RealityFillV3 {
  execId: string;
  price: string;
  size: string;
  side: 'buy' | 'sell';
  ts: string;
}

export interface TickerV3 {
  category: 'SPOT' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  lastPrice: string;
  openPrice24h: string;
  highPrice24h: string;
  lowPrice24h: string;
  ask1Price: string;
  bid1Price: string;
  bid1Size: string;
  ask1Size: string;
  price24hPcnt: string;
  volume24h: string;
  turnover24h: string;
  /** 24h platform turnover; only available for rtoken */
  platformTurnover24h?: string;

  // Futures specific fields
  indexPrice?: string;
  markPrice?: string;
  fundingRate?: string;
  openInterest?: string;
  deliveryStartTime?: string;
  deliveryTime?: string;
  deliveryStatus?: string;
}

export interface ProofOfReservesV3 {
  merkleRootHash: string;
  totalReserveRatio: string;
  list: {
    coin: string;
    userAssets: string;
    platformAssets: string;
    reserveRatio: string;
  }[];
}

export interface IndexComponentV3 {
  exchange: string;
  spotPair: string;
  equivalentPrice: string;
  weight: string;
}

export interface IndexPriceComponentsV3 {
  symbol: string;
  componentList: IndexComponentV3[];
}

export interface RpiSymbolV3 {
  category: 'spot' | 'usdt-futures' | 'coin-futures' | 'usdc-futures';
  symbol: string;
}

/** RPI order book depth: [price, nonRpiQty, rpiQty] */
export interface RpiOrderBookV3 {
  a: [string, string, string][];
  b: [string, string, string][];
  ts: string;
}

export interface CashDividendRecordV3 {
  symbol: string;
  exDividendDate: string;
  cashDividendPerShare: string;
  cashDividendTimestamp: string;
}

export interface SpotWhaleFlowV3 {
  volume: string;
  date: string;
}

export interface SpotNetFlowV3 {
  netFlow: string;
  ts: string;
}

export interface SpotFundFlowV3 {
  whaleBuyVolume: string;
  dolphinBuyVolume: string;
  fishBuyVolume: string;
  whaleSellVolume: string;
  dolphinSellVolume: string;
  fishSellVolume: string;
  whaleBuyRatio: string;
  dolphinBuyRatio: string;
  fishBuyRatio: string;
  whaleSellRatio: string;
  dolphinSellRatio: string;
  fishSellRatio: string;
}

export interface MarginLongShortV3 {
  longShortRatio: string;
  ts: string;
}

export interface MarginLoanGrowthV3 {
  growthRate: string;
  ts: string;
}

export interface MarginIsolatedBorrowV3 {
  borrowRate: string;
  ts: string;
}

export interface FuturesActiveBuySellV3 {
  buyVolume: string;
  sellVolume: string;
  ts: string;
}

export interface FuturesLongShortV3 {
  longRatio: string;
  shortRatio: string;
  longShortRatio: string;
  ts: string;
}

export interface FuturesPositionLongShortV3 {
  longPositionRatio: string;
  shortPositionRatio: string;
  longShortPositionRatio: string;
  ts: string;
}

export interface FuturesAccountLongShortV3 {
  longAccountRatio: string;
  shortAccountRatio: string;
  longShortAccountRatio: string;
  ts: string;
}
