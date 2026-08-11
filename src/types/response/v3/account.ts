// Account Management Response Types
import type { CollateralTypeV3 } from '../../request/v3/account.js';

export interface AccountSymbolConfigV3 {
  category: string;
  symbol: string;
  marginMode: string;
  leverage: string;
}

export interface AccountCoinConfigV3 {
  coin: string;
  leverage: string;
}

export type AccountPermissionV3 =
  | 'uta_mgt'
  | 'uta_trade'
  | 'withdraw'
  | 'copy_futures_position'
  | 'copy_futures_order';

export interface AccountInfoV3 {
  userId: string;
  inviterId: string;
  /** Only set when the calling account is a sub-account */
  parentId: string;
  channelCode: string;
  channel: string;
  ips: string;
  permType: 'read-only' | 'read-and-write';
  permissions: AccountPermissionV3[];
  regisTime: string;
}

export type AccountLevelV3 = 'basic' | 'advanced' | 'isolated' | 'delta';

export interface AccountSettingsV3 {
  uid: string;
  accountMode: 'unified' | 'hybrid' | 'upgrading' | 'switching';
  assetMode: string;
  accountLevel: AccountLevelV3;
  holdMode: string;
  stpMode: 'none' | 'cancel_taker' | 'cancel_maker' | 'cancel_both';
  symbolConfigList: AccountSymbolConfigV3[];
  coinConfigList: AccountCoinConfigV3[];
}

export interface AccountDeltaCoinPositionV3 {
  coin: string;
  positionRatio: string;
}

/** Delta-neutral mode metrics. Only available when accountLevel is delta. */
export interface AccountDeltaInfoV3 {
  deltaEquityRatio: string;
  deltaThreshold: string;
  positionThreshold: string;
  list: AccountDeltaCoinPositionV3[];
}

export interface AccountAssetV3 {
  coin: string;
  equity: string;
  usdValue: string;
  balance: string;
  available: string;
  debt: string;
  locked: string;
  /** Position value in USD */
  positionValue?: string;
  /** Account leverage (non-negative) */
  leverage?: string;
  /** USDT bonus amount */
  bonus?: string;
}

export interface AccountAssetsV3 {
  accountEquity: string;
  usdtEquity: string;
  btcEquity: string;
  unrealisedPnl: string;
  usdtUnrealisedPnl: string;
  btcUnrealizedPnl: string;
  effEquity: string;
  mmr: string;
  imr: string;
  mgnRatio: string;
  positionMgnRatio: string;
  assets: AccountAssetV3[];
}

export interface ConvertRecordV3 {
  fromCoin: string;
  fromCoinSize: string;
  toCoin: string;
  toCoinSize: string;
  price: string;
  ts: string;
}

export interface FinancialRecordV3 {
  category: string;
  id: string;
  symbol: string;
  coin: string;
  type: string;
  amount: string;
  fee: string;
  balance: string;
  ts: string;
  /** crossed | isolated */
  positionType?: string;
  positionAmount?: string;
  positionBalance?: string;
}

export interface PaymentCoinV3 {
  coin: string;
  size: string;
  amount: string;
}

export interface RepayableCoinV3 {
  coin: string;
  size: string;
  amount: string;
}

export interface RepayResponseV3 {
  result: string;
  repayAmount: string;
}

// Sub-account Management Response Types

export interface CreateSubAccountApiKeyResponseV3 {
  note: string;
  apiKey: string;
  secret: string;
  type: string;
  permissions: string[];
  ips: string[];
}
export interface SubAccountApiKeyV3 {
  apiKey: string;
  note: string;
  type: string;
  permissions: string[];
  ips: string[];
  ts?: string;
}

export interface UpdateSubAccountApiKeyResponseV3 {
  note: string;
  apiKey: string;
  type: string;
  permissions: string[];
  ips: string[];
}

export interface CreateSubAccountResponseV3 {
  username: string;
  subUid: string;
  status: string;
  note: string;
  createdTime: string;
  updatedTime: string;
}

export interface CreateAgentSubAccountResponseV3 {
  username: string;
  subUid: string;
  apiKey: string;
  secret: string;
  note: string;
  createdTime: string;
}

export interface SubAccountV3 {
  subUid: string;
  username: string;
  status: string;
  accountMode: string;
  type: 'normal' | 'virtual' | 'custodian';
  note: string;
  createdTime: string;
  updatedTime: string;
}

export interface WithdrawAddressBookEntryV3 {
  coin: string;
  chain: string;
  address: string;
  countryCode: string;
  label: string;
  memo: string;
  type: 'regular' | 'EVM' | 'universal' | 'internal';
  internalType: '' | 'uid' | 'mobile' | 'email';
  createdTime: string;
}

export interface WithdrawAddressBookV3 {
  addressList: WithdrawAddressBookEntryV3[];
  cursor?: string;
}

// Transfer Response Types

export interface AllSymbolFeeRateV3 {
  symbol: string;
  makerFeeRate: string;
  takerFeeRate: string;
}

export interface TransferResponseV3 {
  transferId: string;
  clientOid?: string;
}

export interface SubTransferRecordV3 {
  transferId: string;
  oldTransferId?: string;
  fromType: string;
  toType: string;
  amount: string;
  coin: string;
  fromUserId: string;
  toUserId: string;
  status: string;
  clientOid: string;
  createdTime: string;
  updatedTime: string;
}

export interface SubUnifiedAssetV3 {
  coin: string;
  equity: string;
  usdValue: string;
  balance: string;
  available: string;
  debt: string;
  locked: string;
}

export interface SubUnifiedAssetV3 {
  subUid: string;
  cursor: string;
  assets: SubUnifiedAssetV3[];
}

export interface GetFeeRateResponseV3 {
  makerFeeRate: string;
  takerFeeRate: string;
}

export interface FundingAssetV3 {
  coin: string;
  available: string;
  frozen: string;
  balance: string;
}

// Deposit Response Types

export interface DepositAddressV3 {
  address: string;
  chain: string;
  coin: string;
  tag: string;
  url: string;
}

export interface DepositRecordV3 {
  orderId: string;
  recordId: string;
  coin: string;
  type: 'deposit';
  dest: 'on_chain' | 'internal_transfer';
  size: string;
  status: 'pending' | 'success' | 'fail';
  fromAddress: string;
  toAddress: string;
  chain: string;
  createdTime: string;
  updatedTime: string;
}

// Withdraw Response Types

export interface WithdrawResponseV3 {
  orderId: string;
  clientOid: string;
}

export interface WithdrawRecordV3 {
  orderId: string;
  clientOid: string;
  recordId: string;
  coin: string;
  type: 'withdraw';
  dest: 'on_chain' | 'internal_transfer';
  size: string;
  status: 'pending' | 'success' | 'fail';
  fromAddress: string;
  toAddress: string;
  chain: string;
  fee: string;
  confirm: string;
  tag: string;
  createdTime: string;
  updatedTime: string;
}

export interface MaxTransferableV3 {
  coin: string;
  maxTransfer: string;
  borrowMaxTransfer: string;
}

export interface OpenInterestLimitV3 {
  symbol: string;
  singleUserLimit: string;
  masterSubLimit: string;
  marketMakerLimit: string;
}

export interface TaxRecordV3 {
  id: string;
  coin: string;
  type: string;
  amount: string;
  fee: string;
  balance: string;
  ts: string;
}

export interface CollateralTypeConfigV3 {
  collateralType: CollateralTypeV3;
  /** Returned when collateralType=custom */
  collateralCoins?: string;
}

export interface CustomCollateralCoinV3 {
  collateralCoin: string;
}

export interface PreSetLeverageV3 {
  estMaxOpen?: string;
  estMaxBorrowable?: string;
  requiredMargin: string;
  marginChange: string;
}

export interface MaxWithdrawalV3 {
  coin: string;
  otcMaxWithdrawal: string;
  spotMaxWithdrawal: string;
  utaMaxWithdrawal: string;
  totalMaxWithdrawal: string;
}

export interface MovePositionOrderResultV3 {
  orderId: string;
  clientOid: string;
  code: string;
  msg: string;
}

export interface MovePositionsResponseV3 {
  closePosition: MovePositionOrderResultV3[];
  openPosition: MovePositionOrderResultV3[];
}

export interface MovePositionHistoryV3 {
  category: string;
  fromUid: string;
  toUid: string;
  orderId: string;
  openExecId: string;
  closeExecId: string;
  symbol: string;
  posSide: 'long' | 'short';
  qty: string;
  price: string;
  status: 'processing' | 'completed' | 'failed';
  createdTime: string;
  updatedTime: string;
}

export interface EligibleSymbolV3 {
  symbol: string;
  category: string;
  baseCoin: string;
  quoteCoin: string;
  symbolType?: string;
  buyLimitPriceRatio: string;
  sellLimitPriceRatio: string;
  minOrderQty: string;
  maxOrderQty: string;
  pricePrecision: string;
  quantityPrecision: string;
  quotePrecision: string;
  minOrderAmount: string;
  maxSymbolOrderNum: string;
  maxProductOrderNum: string;
  status: string;
  maintainTime: string;
  areaSymbol?: string;
  maxPositionNum?: string;
  isReality?: string;
  launchTime?: string;
}

export interface EligibleMarginTierItemV3 {
  tier: string;
  minTierValue: string;
  maxTierValue: string;
  leverage: string;
  mmr: string;
}

export interface EligibleMarginTierV3 {
  coin: string;
  tiers: EligibleMarginTierItemV3[];
}

export interface EligibleLoanInfoV3 {
  limit: string;
  masterSubLimit: string;
  /** Bitget spelling */
  platformRemaingQuota: string;
}

export interface RateLimitQuotaItemV3 {
  uid: string;
  quota: string;
}

export interface RateLimitQuotaV3 {
  category: 'spot' | 'futures' | string;
  quotaList: RateLimitQuotaItemV3[];
  masterSubQuota: string;
  masterSubCap: string;
  cursor: string;
}
