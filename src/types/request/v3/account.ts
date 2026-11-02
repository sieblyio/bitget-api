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
  /**
   * Error 25159 means a low-liquidity period capped leverage at 5x.
   * There is no pre-check API for that cap.
   */
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

/**
 * UTA account financial-record type.
 * https://www.bitget.com/docs/uta/enum
 * MARIN_BUY_DEAL and MARIN_SELL_DEAL keep Bitget's spelling.
 */
export type FinancialRecordTypeV3 =
  | 'TRANSFER_IN'
  | 'TRANSFER_OUT'
  | 'CONVERSION_UPON_DELISTING'
  | 'ORDER_DEALT_FROZEN_OUT'
  | 'ORDER_DEALT_IN'
  | 'ORDER_PLF_FEE_OUT'
  | 'EXCHANGE_SOURCE_TOKEN_USER_OUT'
  | 'EXCHANGE_TARGET_TOKEN_USER_IN'
  | 'OPEN_LONG'
  | 'OPEN_SHORT'
  | 'BUY_DEAL'
  | 'SELL_DEAL'
  | 'CLOSE_LONG'
  | 'CLOSE_SHORT'
  | 'FORCE_CLOSE_LONG'
  | 'FORCE_CLOSE_SHORT'
  | 'BURST_CLOSE_LONG'
  | 'BURST_CLOSE_SHORT'
  | 'OFFSET_REDUCE_CLOSE_LONG'
  | 'OFFSET_REDUCE_CLOSE_SHORT'
  | 'FORCE_BUY_SSM'
  | 'FORCE_SELL_SSM'
  | 'BURST_BUY_SSM'
  | 'BURST_SELL_SSM'
  | 'RISK_LIQ_USER_IN'
  | 'INTEREST_SETTLEMENT_OUT'
  | 'CONTRACT_MAIN_SETTLE_FEE_USER_IN'
  | 'CONTRACT_MAIN_SETTLE_FEE_USER_OUT'
  | 'RISK_LIQ_USER_OUT'
  | 'BORROW'
  | 'RESERVE_TRANSFER_IN'
  | 'RESERVE_TRANSFER_OUT'
  | 'REPAYMENT'
  | 'INTEREST_REPAYMENT'
  | 'LIQ_FUND_OUT'
  | 'LIQ_CONVERT_USER_OUT'
  | 'LIQ_CONVERT_SYS_IN'
  | 'LIQ_CONVERT_SYS_OUT'
  | 'LIQ_CONVERT_USER_IN'
  | 'LIQ_TRANSFER_IN'
  | 'LIQ_TRANSFER_OUT'
  | 'LIQ_FUND_IN'
  | 'LIQ_FEE'
  | 'LIQ_REPAYMENT'
  | 'DELIST_MARGIN_TOKEN_SOURCE_USER_OUT'
  | 'DELIST_MARGIN_TOKEN_SOURCE_SYS_IN'
  | 'DELIST_MARGIN_TOKEN_TARGET_SYS_OUT'
  | 'DELIST_MARGIN_TOKEN_TARGET_USER_IN'
  | 'CONFISCATE_TOKEN_USER_OUT'
  | 'CONFISCATE_TOKEN_SYS_IN'
  | 'DELIST_SMALL_BALANCE_USER_OUT'
  | 'DELIST_SMALL_BALANCE_SYS_IN'
  | 'DELIST_SMALL_LIABILITY_SYS_OUT'
  | 'DELIST_SMALL_LIABILITY_USER_IN'
  | 'SMALL_ASSET_SOURCE_TOKEN_USER_OUT'
  | 'SMALL_ASSET_SOURCE_TOKEN_SYS_IN'
  | 'SMALL_ASSET_TARGET_TOKEN_SYS_OUT'
  | 'SMALL_ASSET_TARGET_TOKEN_USER_IN'
  | 'SMALL_ASSET_FEE_SYS_IN'
  | 'TRACE_SHARE_BENEFIT_USER_OUT'
  | 'TRACE_SHARE_BENEFIT_SYSTEM_IN'
  | 'TRACE_SHARE_BENEFIT_SYSTEM_OUT'
  | 'TRACE_SHARE_BENEFIT_USER_IN'
  | 'MARGIN_OPEN_LONG'
  | 'MARGIN_OPEN_SHORT'
  | 'MARIN_BUY_DEAL'
  | 'MARIN_SELL_DEAL'
  | 'MARGIN_BACK'
  | 'INCREASE_MARGIN'
  | 'REDUCE_MARGIN'
  | 'MARGIN_SETTLE_FEE_USER_IN'
  | 'MARGIN_SETTLE_FEE_USER_OUT'
  | 'MARGIN_LEVER_ORDER_REFROZEN'
  | 'MARGIN_LEVER_ORDER_FROZEN'
  | 'MARGIN_LEVER_POS_IN'
  | 'MARGIN_OFFSET_IN_SSM_LONG'
  | 'MARGIN_OFFSET_IN_SSM_SHORT'
  | 'FIXED_OFFSET_IN_SSM_LONG'
  | 'FIXED_OFFSET_IN_SSM_SHORT'
  | 'FIXED_CLOSE_LONG'
  | 'FIXED_CLOSE_SHORT'
  | 'FIXED_FORCE_CLOSE_LONG'
  | 'FIXED_FORCE_CLOSE_SHORT'
  | 'FIXED_BURST_CLOSE_LONG'
  | 'FIXED_BURST_CLOSE_SHORT'
  | 'FIXED_ADL_CLOSE_LONG'
  | 'FIXED_ADL_CLOSE_SHORT'
  | 'FIXED_RISK_LIQ_USER_IN'
  | 'FIXED_RISK_LIQ_USER_OUT'
  | 'FIXED_FORCE_BUY_SSM'
  | 'FIXED_FORCE_SELL_SSM'
  | 'FIXED_BURST_BUY_SSM'
  | 'FIXED_BURST_SELL_SSM'
  | 'ON_CHAIN_TRANSFER_REFUND'
  | 'ON_CHAIN_TRANSFER_OUT'
  | 'MT5_TRANSFER_IN'
  | 'MT5_REFUND_IN'
  | 'MT5_TRANSFER_OUT'
  | 'TRACE_LOCK_USER_OUT'
  | 'TRACE_LOCK_USER_IN'
  | 'TRACE_TRANSFER_USER_OUT'
  | 'TRACE_TRANSFER_USER_IN'
  | 'TRACE_TRANSFER_REFUND_IN'
  | 'FINANCIAL_TRANSFER_OUT'
  | 'FINANCIAL_TRANSFER_IN'
  | 'CONVERT_TRANSFER_IN'
  | 'CONVERT_TRANSFER_OUT'
  | 'BGPAY_TRANSFER_OUT'
  | 'BGPAY_REFUND_IN'
  | 'RWA_FIXED_SETTLE_FEE_USER_IN'
  | 'RWA_FIXED_SETTLE_FEE_USER_OUT'
  | 'RWA_CONTRACT_MAIN_SETTLE_FEE_SYSTEM_IN'
  | 'RWA_CONTRACT_MAIN_SETTLE_FEE_SYSTEM_OUT'
  | 'RWA_CONTRACT_MAIN_SETTLE_FEE_SYSTEM_KEEP_IN'
  | 'RWA_CONTRACT_MAIN_SETTLE_FEE_SYSTEM_KEEP_OUT'
  | 'RWA_CONTRACT_MAIN_SETTLE_FEE_USER_IN'
  | 'RWA_CONTRACT_MAIN_SETTLE_FEE_USER_OUT'
  | 'RWA_CONTRACT_REBASE_USER_OPEN_LONG'
  | 'RWA_CONTRACT_REBASE_USER_OPEN_SHORT'
  | 'RWA_CONTRACT_REBASE_USER_CLOSE_LONG'
  | 'RWA_CONTRACT_REBASE_USER_CLOSE_SHORT'
  | 'RWA_CONTRACT_REBASE_USER_BUY_IN_SSM'
  | 'RWA_CONTRACT_REBASE_USER_SELL_IN_SSM'
  | 'RISK_LIQ_DEFAULT_USER_IN'
  | 'FIXED_RISK_LIQ_DEFAULT_USER_IN'
  | 'BONUS_GRANT_USER_IN'
  | 'BONUS_EXPIRE_USER_OUT'
  | 'BONUS_TRANSFER_USER_OUT'
  | 'WITHDRAW_TRANSFER_OUT'
  | 'WITHDRAW_TRANSFER_IN'
  | 'DELIVERY_LONG'
  | 'DELIVERY_SHORT'
  | 'FIXED_DELIVERY_LONG'
  | 'FIXED_DELIVERY_SHORT'
  | 'REBASE_COIN_SPLIT_OUT'
  | 'REBASE_COIN_SPLIT_IN'
  | 'REBASE_COIN_MERGE_OUT'
  | 'REBASE_COIN_MERGE_IN';

export interface GetFinancialRecordsRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  coin?: string;
  type?: FinancialRecordTypeV3;
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
  /** Enable Cash+ as collateral. Official field name is allowCashPlus */
  allowCashPlus?: 'yes' | 'no';
}

export interface BorrowRequestV3 {
  coin: string;
  amount: string;
  clientOid?: string;
}

export interface GetMaxBorrowableRequestV3 {
  coin: string;
}

export interface SetRepayModeRequestV3 {
  /** Account-level. Master and each sub-account keep their own setting */
  repayMode: 'auto' | 'manual';
}

export interface DeleteSubAccountRequestV3 {
  subUid: string;
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

export interface GetRealityOrderBookSegmentedRequestV3 {
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
  /**
   * Omit to list sub-accounts under the master.
   * Ignored when a sub-account calls this for itself.
   */
  uid?: string;
  cursor?: string;
  limit?: string;
}

export interface SetRateLimitQuotaRequestV3 {
  category: 'spot' | 'futures';
  /**
   * Required when the master account sets quotas.
   * Not required, and ignored, when a sub-account sets its own quota.
   */
  uids?: string[];
  quota: string;
}

export interface CreateStpGroupRequestV3 {
  /** Max 32 characters. Must be unique. */
  groupName: string;
}

export interface StpGroupMembersRequestV3 {
  /** Comma-separated sub-account UIDs. Max 50. */
  uids: string;
  groupId: string;
}
