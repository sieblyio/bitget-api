// Account Management Request Types

export type AccountAdjustModeV3 = 'basic' | 'advanced' | 'delta' | 'isolated';

export interface AdjustAccountModeRequestV3 {
  mode: AccountAdjustModeV3;
  /** Enable/disable delta-neutral mode when mode is advanced. `delta` mode is deprecated. */
  deltaSwitch?: 'yes' | 'no';
  /** Sub-account UID when the master account switches mode for a sub-account */
  targetUid?: string;
}

export interface SetLeverageRequestV3 {
  category: 'MARGIN' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  leverage: string;
  coin?: string;
  posSide?: 'long' | 'short';
  /** Futures only. Defaults to crossed */
  marginMode?: 'crossed' | 'isolated';
  /** Isolated two-way mode: long leverage. Takes priority over leverage when both set */
  longLeverage?: string;
  /** Isolated two-way mode: short leverage. Takes priority over leverage when both set */
  shortLeverage?: string;
}

export interface GetAllFeeRatesRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol?: string;
}

export interface GetConvertRecordsRequestV3 {
  fromCoin?: string;
  toCoin?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetFinancialRecordsRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  coin?: string;
  type?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface RepayRequestV3 {
  repayableCoinList: string[];
  paymentCoinList: string[];
}

// Sub-account Management Request Types

export interface CreateSubAccountApiKeyRequestV3 {
  subUid: string;
  note: string;
  type: 'read_write' | 'read_only';
  passphrase: string;
  permissions: string[];
  ips: string[];
}

export interface DeleteSubAccountApiKeyRequestV3 {
  apiKey: string;
}

export interface GetSubAccountApiKeysRequestV3 {
  subUid: string;
  limit?: string;
  cursor?: string;
}

export interface UpdateSubAccountApiKeyRequestV3 {
  apiKey: string;
  passphrase: string;
  type?: 'read_write' | 'read_only';
  permissions?: string[];
  ips?: string[];
}

export interface CreateSubAccountRequestV3 {
  username: string;
  accountMode?: 'classic' | 'unified';
  note?: string;
}

export interface FreezeSubAccountRequestV3 {
  subUid: string;
  operation: 'freeze' | 'unfreeze';
}

export interface GetSubAccountListRequestV3 {
  limit?: string;
  cursor?: string;
}

// Transfer Request Types

export interface TransferRequestV3 {
  clientOid?: string;
  fromType:
    | 'spot'
    | 'p2p'
    | 'coin_futures'
    | 'usdt_futures'
    | 'usdc_futures'
    | 'crossed_margin'
    | 'isolated_margin'
    | 'uta';
  toType:
    | 'spot'
    | 'p2p'
    | 'coin_futures'
    | 'usdt_futures'
    | 'usdc_futures'
    | 'crossed_margin'
    | 'isolated_margin'
    | 'uta';
  amount: string;
  coin: string;
  symbol?: string;
  /** Enable automatic margin borrowing when balance insufficient. yes | no */
  allowBorrow?: 'yes' | 'no';
}

export interface GetTransferableCoinsRequestV3 {
  fromType:
    | 'spot'
    | 'p2p'
    | 'coin_futures'
    | 'usdt_futures'
    | 'usdc_futures'
    | 'crossed_margin'
    | 'isolated_margin'
    | 'uta';
  toType:
    | 'spot'
    | 'p2p'
    | 'coin_futures'
    | 'usdt_futures'
    | 'usdc_futures'
    | 'crossed_margin'
    | 'isolated_margin'
    | 'uta';
}

export interface GetSubTransferRecordsRequestV3 {
  subUid?: string;
  role?: 'initiator' | 'receiver';
  coin?: string;
  startTime?: string;
  endTime?: string;
  clientOid?: string;
  limit?: string;
  cursor?: string;
}

export interface SubAccountTransferRequestV3 {
  fromType:
    | 'spot'
    | 'p2p'
    | 'usdt_futures'
    | 'coin_futures'
    | 'usdc_futures'
    | 'crossed_margin'
    | 'uta';
  toType:
    | 'spot'
    | 'p2p'
    | 'usdt_futures'
    | 'coin_futures'
    | 'usdc_futures'
    | 'crossed_margin'
    | 'uta';
  amount: string;
  coin: string;
  fromUserId: string;
  toUserId: string;
  clientOid: string;
  /** Enable automatic margin borrowing when balance insufficient. yes | no */
  allowBorrow?: 'yes' | 'no';
}

export interface GetSubUnifiedAssetsRequestV3 {
  subUid?: string;
  cursor?: string;
  limit?: string;
}

export interface GetFeeRateRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol: string;
  /** RPI fee rate flag for market maker users. Default: no */
  rpiFlag?: 'yes' | 'no';
}

export interface GetFundingAssetsRequestV3 {
  coin?: string;
}

export interface SwitchDeductRequestV3 {
  deduct: 'on' | 'off';
}

// Deposit Request Types

export interface GetDepositAddressRequestV3 {
  coin: string;
  chain?: string;
  size?: string;
}

export interface GetSubDepositAddressRequestV3 {
  subUid: string;
  coin: string;
  chain?: string;
  size?: string;
}

export interface GetDepositRecordsRequestV3 {
  coin?: string;
  orderId?: string;
  startTime: string;
  endTime: string;
  limit?: string;
  cursor?: string;
}

export interface GetSubDepositRecordsRequestV3 {
  coin?: string;
  subUid: string;
  startTime: string;
  endTime: string;
  limit?: string;
  cursor?: string;
}

// Withdraw Request Types

export interface WithdrawRequestV3 {
  coin: string;
  chain?: string;
  /** Deduct from funding, uta, and/or otc accounts (comma-separated). Order: funding -> otc -> uta */
  accountType?: string;
  transferType: 'on_chain' | 'internal_transfer';
  address: string;
  innerToType?: 'uid' | 'email' | 'mobile';
  areaCode?: string;
  tag?: string;
  size: string;
  remark?: string;
  clientOid?: string;
  memberCode?: 'bithumb' | 'korbit' | 'coinone';
  identityType?: 'company' | 'user';
  companyName?: string;
  firstName?: string;
  lastName?: string;
}

export interface GetWithdrawRecordsRequestV3 {
  coin?: string;
  orderId?: string;
  clientOid?: string;
  startTime: string;
  endTime: string;
  limit?: string;
  cursor?: string;
}

export interface GetWithdrawAddressBookRequestV3 {
  coin?: string;
  type?: 'EVM' | 'regular' | 'universal' | 'internal';
  limit?: string;
  cursor?: string;
}

export interface CancelWithdrawalRequestV3 {
  orderId?: string;
  clientOid?: string;
}

export interface SetDepositAccountRequestV3 {
  coin: string;
  accountType: 'funding' | 'unified' | 'otc';
}

export interface GetMaxTransferableRequestV3 {
  coin: string;
}

export interface GetOpenInterestLimitRequestV3 {
  symbol: string;
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
}

export interface GetTaxRecordsRequestV3 {
  bizType:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES'
    | 'OTHER';
  marginType?: 'isolated' | 'crossed';
  coin?: string;
  startTime: string;
  endTime: string;
  limit?: string;
  cursor?: string;
}

export type CollateralTypeV3 = 'mainstream' | 'all' | 'custom';

export interface SetCollateralTypeRequestV3 {
  collateralType: CollateralTypeV3;
  /** Required when collateralType=custom. Comma-separated coin names */
  collateralCoins?: string;
}

export interface PreSetLeverageRequestV3 {
  category: 'MARGIN' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  coin?: string;
  marginMode: 'isolated' | 'cross';
  leverage?: string;
  longLeverage?: string;
  shortLeverage?: string;
}

export interface SetMarginRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  posSide: 'long' | 'short';
  operation: 'add' | 'remove';
  amount: string;
}

export interface GetMaxWithdrawalRequestV3 {
  coin: string;
}

export interface GetRealityOrderBookRequestV3 {
  symbol: string;
}

export interface GetRealityFillsRequestV3 {
  symbol: string;
  limit?: string;
}

export interface SubMasterTransferRequestV3 {
  fromType: 'spot' | 'uta';
  toType: 'spot' | 'p2p' | 'uta';
  amount: string;
  coin: string;
  clientOid?: string;
}

export interface CreateAgentSubAccountRequestV3 {
  username: string;
  passphrase: string;
  note?: string;
}

export interface MovePositionItemRequestV3 {
  symbol: string;
  side: 'buy' | 'sell';
  qty: string;
}

export interface MovePositionsRequestV3 {
  fromUid: string;
  toUid: string;
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  positionList: MovePositionItemRequestV3[];
}

export interface GetMovePositionHistoryRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  startTime?: string;
  endTime?: string;
  cursor?: string;
  limit?: string;
}

export interface GetEligibleSymbolsRequestV3 {
  symbol?: string;
}

export interface GetEligibleMarginTierRequestV3 {
  coin?: string;
}

export interface GetEligibleLoanInfoRequestV3 {
  coin?: string;
}

export interface GetEligibleDiscountRateRequestV3 {
  coin?: string;
}

export interface GetFundingFinancialRecordsRequestV3 {
  coin?: string;
  type?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetSmallAssetsRequestV3 {
  coin?: string;
}

export interface TradeSmallAssetsRequestV3 {
  fromCoinList: string[];
  toCoin?: string;
}

export interface GetSmallAssetsHistoryRequestV3 {
  orderId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetRateLimitQuotaRequestV3 {
  category: 'spot' | 'futures';
  uid?: string;
  cursor?: string;
  limit?: string;
}

export interface SetRateLimitQuotaRequestV3 {
  category: 'spot' | 'futures';
  uids: string[];
  quota: string;
}
