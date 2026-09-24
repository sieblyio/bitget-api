import {
  AdjustAccountModeRequestV3,
  CancelWithdrawalRequestV3,
  CreateAgentSubAccountRequestV3,
  CreateSubAccountApiKeyRequestV3,
  CreateSubAccountRequestV3,
  DeleteSubAccountApiKeyRequestV3,
  FreezeSubAccountRequestV3,
  GetAllFeeRatesRequestV3,
  GetConvertRecordsRequestV3,
  GetDepositAddressRequestV3,
  GetDepositRecordsRequestV3,
  GetEligibleDiscountRateRequestV3,
  GetEligibleLoanInfoRequestV3,
  GetEligibleMarginTierRequestV3,
  GetEligibleSymbolsRequestV3,
  GetFeeRateRequestV3,
  GetFinancialRecordsRequestV3,
  GetFundingAssetsRequestV3,
  GetFundingFinancialRecordsRequestV3,
  GetMaxTransferableRequestV3,
  GetMaxWithdrawalRequestV3,
  GetMovePositionHistoryRequestV3,
  GetOpenInterestLimitRequestV3,
  GetRateLimitQuotaRequestV3,
  GetRealityFillsRequestV3,
  GetRealityOrderBookRequestV3,
  GetSmallAssetsHistoryRequestV3,
  GetSmallAssetsRequestV3,
  GetSubAccountApiKeysRequestV3,
  GetSubAccountListRequestV3,
  GetSubDepositAddressRequestV3,
  GetSubDepositRecordsRequestV3,
  GetSubTransferRecordsRequestV3,
  GetSubUnifiedAssetsRequestV3,
  GetTaxRecordsRequestV3,
  GetTransferableCoinsRequestV3,
  GetWithdrawAddressBookRequestV3,
  GetWithdrawRecordsRequestV3,
  MovePositionsRequestV3,
  PreSetLeverageRequestV3,
  RepayRequestV3,
  SetCollateralTypeRequestV3,
  SetDepositAccountRequestV3,
  SetLeverageRequestV3,
  SetMarginRequestV3,
  SetRateLimitQuotaRequestV3,
  SubAccountTransferRequestV3,
  SubMasterTransferRequestV3,
  SwitchDeductRequestV3,
  TradeSmallAssetsRequestV3,
  TransferRequestV3,
  UpdateSubAccountApiKeyRequestV3,
  WithdrawRequestV3,
} from './types/request/v3/account.js';
import {
  BrokerSubWithdrawalRequestV3,
  CreateBrokerSubAccountRequestV3,
  CreateBrokerSubApiKeyRequestV3,
  DeleteBrokerSubApiKeyRequestV3,
  GetBrokerAllSubDepositWithdrawalRequestV3,
  GetBrokerCommissionRequestV3,
  GetBrokerSubAccountListRequestV3,
  GetBrokerSubApiKeyRequestV3,
  GetBrokerSubDepositAddressRequestV3,
  ModifyBrokerSubAccountRequestV3,
  ModifyBrokerSubApiKeyRequestV3,
} from './types/request/v3/broker.js';
import {
  CancelAllCfdOrdersRequestV3,
  CancelCfdOrderRequestV3,
  CfdTransferRequestV3,
  CloseAllCfdPositionsRequestV3,
  CloseCfdPositionsRequestV3,
  GetCfdCurrentPositionsRequestV3,
  GetCfdFinancialRecordsRequestV3,
  GetCfdHistoryCandlestickRequestV3,
  GetCfdInstrumentsRequestV3,
  GetCfdOrderHistoryRequestV3,
  GetCfdTickersRequestV3,
  GetCfdTransferRecordsRequestV3,
  GetCfdUnfilledOrdersRequestV3,
  ModifyCfdOrderRequestV3,
  PlaceCfdOrderRequestV3,
} from './types/request/v3/cfd.js';
import {
  CopyFuturesTransferRequestV3,
  GetCopyFuturesFollowersRequestV3,
  GetCopyFuturesMaxTransferableRequestV3,
  GetCopyFuturesProfitDetailsRequestV3,
  GetCopyFuturesTransferRecordRequestV3,
} from './types/request/v3/copytrading.js';
import {
  EarnEliteSubscribeRequestV3,
  GetEarnEliteRecordsRequestV3,
  GetEarnEliteRedeemInfoRequestV3,
  GetEarnEliteSubscribeInfoRequestV3,
  GetEarnEliteSubscribeResultRequestV3,
  RedeemEarnEliteRequestV3,
} from './types/request/v3/earn.js';
import {
  AddGridInvestmentRequestV3,
  CloseGridBotRequestV3,
  CreateGridBotRequestV3,
  CreateNeutralGridBotRequestV3,
  GetGridBotDetailRequestV3,
  GetGridBotOrderDetailsRequestV3,
  GetNeutralGridBotDetailRequestV3,
  GetNeutralGridBotOrderDetailsRequestV3,
  ModifyGridBotRequestV3,
  ModifyGridIntervalRequestV3,
  ModifyNeutralGridBotRequestV3,
  ModifyNeutralGridIntervalRequestV3,
  ValidateGridBotRequestV3,
  ValidateNeutralGridBotRequestV3,
} from './types/request/v3/grid.js';
import {
  BindUidRequestV3,
  GetEnsureCoinsRequestV3,
  GetLoanBorrowHistoryRequestV3,
  GetLoanBorrowOngoingRequestV3,
  GetLoanCoinsRequestV3,
  GetLoanInterestRequestV3,
  GetLoanOrderRequestV3,
  GetLoanPledgeRateHistoryRequestV3,
  GetLoanReducesRequestV3,
  GetLoanRepayHistoryRequestV3,
  GetLTVConvertRequestV3,
  GetProductInfosRequestV3,
  GetRepaidHistoryRequestV3,
  GetSymbolsRequestV3,
  GetTransferedRequestV3,
  LoanBorrowRequestV3,
  LoanRepayRequestV3,
  LoanRevisePledgeRequestV3,
} from './types/request/v3/loan.js';
import {
  CreateP2pAdRequestV3,
  GetP2pAdInfoRequestV3,
  GetP2pAdLimitRequestV3,
  GetP2pAdListRequestV3,
  GetP2pAllOrdersRequestV3,
  GetP2pBalanceRequestV3,
  GetP2pExchangeRateRequestV3,
  GetP2pMyAdsRequestV3,
  GetP2pOrderInfoRequestV3,
  GetP2pPendingOrdersRequestV3,
  OperateP2pAdRequestV3,
  P2pFeeSimulateRequestV3,
  P2pOrderActionRequestV3,
  UpdateP2pAdRequestV3,
} from './types/request/v3/p2p.js';
import {
  GetCandlesRequestV3,
  GetCashDividendRecordsRequestV3,
  GetContractsOiRequestV3,
  GetCurrentFundingRateRequestV3,
  GetFuturesTradingDataRequestV3,
  GetHistoryCandlesRequestV3,
  GetHistoryFundingRateRequestV3,
  GetIndexComponentsRequestV3,
  GetInstrumentsRequestV3,
  GetLiquidationsRequestV3,
  GetMarginIsolatedBorrowRequestV3,
  GetMarginLoanGrowthRequestV3,
  GetMarginLoansRequestV3,
  GetMarginLongShortRequestV3,
  GetMarketFeeGroupRequestV3,
  GetMarketScoreWeightsRequestV3,
  GetOpenInterestRequestV3,
  GetOrderBookRequestV3,
  GetPositionTierRequestV3,
  GetPublicFillsRequestV3,
  GetRiskReserveAllRequestV3,
  GetRiskReserveRequestV3,
  GetRpiOrderBookRequestV3,
  GetSplitRecordsRequestV3,
  GetSpotFundFlowRequestV3,
  GetSpotNetFlowRequestV3,
  GetSpotWhaleFlowRequestV3,
  GetTickersRequestV3,
} from './types/request/v3/public.js';
import {
  GetRealityCompanyOverviewRequestV3,
  GetRealityDividendsRequestV3,
  GetRealityEarningsForecastRequestV3,
  GetRealityExecutiveShareholdingsRequestV3,
  GetRealityInnerTradesRequestV3,
  GetRealityShareCapitalChangeRequestV3,
  GetRealityShareholdDetailRequestV3,
  GetRealityStockInfoRequestV3,
  GetRealitySuspensionResumptionInfoRequestV3,
  GetRealityValuationIndicatorsRequestV3,
} from './types/request/v3/reality.js';
import {
  CancelStockPlusOrderRequestV3,
  GetStockPlusAccountRequestV3,
  GetStockPlusCandlestickRequestV3,
  GetStockPlusCashFlowRequestV3,
  GetStockPlusDepthRequestV3,
  GetStockPlusHistoryCandlestickRequestV3,
  GetStockPlusHistoryExecutionsRequestV3,
  GetStockPlusHistoryOrdersRequestV3,
  GetStockPlusIntradayRequestV3,
  GetStockPlusOptionChainInfoRequestV3,
  GetStockPlusOptionExpiryDateRequestV3,
  GetStockPlusOptionQuoteRequestV3,
  GetStockPlusOptionVolumeRequestV3,
  GetStockPlusOrderDetailRequestV3,
  GetStockPlusQuoteRequestV3,
  GetStockPlusStaticInfoRequestV3,
  GetStockPlusStockPositionRequestV3,
  GetStockPlusTodayExecutionsRequestV3,
  GetStockPlusTodayOrdersRequestV3,
  GetStockPlusTradeDetailRequestV3,
  GetStockPlusTransferRecordsRequestV3,
  ModifyStockPlusOrderRequestV3,
  PlaceStockPlusOrderRequestV3,
  StockPlusTransferRequestV3,
} from './types/request/v3/stockplus.js';
import {
  CancelStrategyOrderRequestV3,
  GetHistoryStrategyOrdersRequestV3,
  GetStrategySubOrdersRequestV3,
  GetUnfilledStrategyOrdersRequestV3,
  ModifyStrategyOrderRequestV3,
  PlaceStrategyOrderRequestV3,
} from './types/request/v3/strategy.js';
import {
  BatchModifyOrderRequestV3,
  CancelAllOrdersRequestV3,
  CancelBatchOrdersRequestV3,
  CancelOrderRequestV3,
  CancelRealityOrderRequestV3,
  CloseAllPositionsRequestV3,
  CountdownCancelAllRequestV3,
  GetCurrentPositionRequestV3,
  GetFillsRequestV3,
  GetHistoryOrdersRequestV3,
  GetMaxOpenAvailableRequestV3,
  GetOrderInfoRequestV3,
  GetPositionHistoryRequestV3,
  GetUnfilledOrdersRequestV3,
  ModifyOrderRequestV3,
  PlaceBatchOrdersRequestV3,
  PlaceOrderRequestV3,
  PlaceRealityOrderRequestV3,
} from './types/request/v3/trade.js';
import {
  AccountAssetsV3,
  AccountDeltaInfoV3,
  AccountInfoV3,
  AccountSettingsV3,
  AllSymbolFeeRateV3,
  CollateralTypeConfigV3,
  ConvertRecordV3,
  CreateAgentSubAccountResponseV3,
  CreateSubAccountApiKeyResponseV3,
  CreateSubAccountResponseV3,
  CustomCollateralCoinV3,
  DepositAddressV3,
  DepositRecordV3,
  EligibleDiscountRateV3,
  EligibleLoanInfoV3,
  EligibleMarginTierV3,
  EligibleSymbolV3,
  FinancialRecordV3,
  FundingAssetV3,
  FundingFinancialRecordV3,
  MaxTransferableV3,
  MaxWithdrawalV3,
  MovePositionHistoryV3,
  MovePositionsResponseV3,
  OpenInterestLimitV3,
  PaymentCoinV3,
  PreSetLeverageV3,
  RateLimitQuotaV3,
  RepayableCoinV3,
  RepayResponseV3,
  SmallAssetsHistoryItemV3,
  SmallAssetsTradeResponseV3,
  SmallAssetV3,
  SubAccountApiKeyV3,
  SubAccountV3,
  SubTransferRecordV3,
  SubUnifiedAssetV3,
  TaxRecordV3,
  TransferResponseV3,
  UpdateSubAccountApiKeyResponseV3,
  WithdrawAddressBookV3,
  WithdrawRecordV3,
  WithdrawResponseV3,
} from './types/response/v3/account.js';
import {
  BrokerCommissionRecordV3,
  BrokerSubDepositAddressV3,
  BrokerSubWithdrawalResponseV3,
  CreateBrokerSubAccountResponseV3,
  CreateBrokerSubApiKeyResponseV3,
  GetBrokerAllSubDepositWithdrawalResponseV3,
  GetBrokerSubAccountListResponseV3,
  GetBrokerSubApiKeyResponseV3,
  ModifyBrokerSubAccountResponseV3,
  ModifyBrokerSubApiKeyResponseV3,
} from './types/response/v3/broker.js';
import {
  CfdCandlestickV3,
  CfdCurrentPositionV3,
  CfdFinancialRecordV3,
  CfdFundDetailV3,
  CfdInstrumentV3,
  CfdOrderHistoryV3,
  CfdTickerV3,
  CfdTransferRecordsV3,
  CfdTransferResponseV3,
  CfdUnfilledOrderV3,
  ModifyCfdOrderResponseV3,
  PlaceCfdOrderResponseV3,
} from './types/response/v3/cfd.js';
import {
  CopyFuturesCurrentFollowersV3,
  CopyFuturesHistoryFollowersV3,
  CopyFuturesMaxTransferableV3,
  CopyFuturesPositionSummaryV3,
  CopyFuturesProfitDetailsV3,
  CopyFuturesProfitSummaryV3,
  CopyFuturesTradingPairV3,
  CopyFuturesTransferRecordListV3,
  CopyFuturesTransferResponseV3,
} from './types/response/v3/copytrading.js';
import {
  EarnEliteAssetsV3,
  EarnEliteProductV3,
  EarnEliteRecordsV3,
  EarnEliteRedeemInfoV3,
  EarnEliteSubscribeInfoV3,
  EarnEliteSubscribeResultV3,
  EarnEliteSubscribeStatusV3,
  RedeemEarnEliteResultV3,
} from './types/response/v3/earn.js';
import {
  GridBotDetailV3,
  GridBotIdResponseV3,
  GridBotOrderDetailsV3,
  GridValidateResponseV3,
  NeutralGridBotDetailV3,
} from './types/response/v3/grid.js';
import {
  BindUidResponseV3,
  CoinInfoV3,
  GetLoanCoinsResponseV3,
  GetLoanDebtsResponseV3,
  GetLoanInterestResponseV3,
  LoanBorrowHistoryItemV3,
  LoanBorrowOngoingItemV3,
  LoanBorrowResponseV3,
  LoanOrderV3,
  LoanPledgeRateHistoryItemV3,
  LoanProductInfoV3,
  LoanReduceItemV3,
  LoanRepayHistoryItemV3,
  LoanRepayResponseV3,
  LoanRevisePledgeResponseV3,
  LoanSymbolsV3,
  LoanTransfersV3,
  LTVConvertResponseV3,
  RepaidHistoryItemV3,
} from './types/response/v3/loan.js';
import {
  P2pAdInfoV3,
  P2pAdLimitV3,
  P2pBalanceV3,
  P2pCreateAdResponseV3,
  P2pCurrenciesV3,
  P2pCursorListV3,
  P2pExchangeRateV3,
  P2pFeeSimulateV3,
  P2pMyAdListItemV3,
  P2pOrderInfoV3,
  P2pOrderListItemV3,
  P2pPayMethodV3,
  P2pPublicAdListItemV3,
  P2pUserInfoV3,
} from './types/response/v3/p2p.js';
import {
  CandlestickV3,
  CashDividendRecordV3,
  ContractOiV3,
  CurrentFundingRateV3,
  DiscountRateV3,
  FuturesAccountLongShortV3,
  FuturesActiveBuySellV3,
  FuturesLongShortV3,
  FuturesPositionLongShortV3,
  HistoryFundingRateV3,
  IndexPriceComponentsV3,
  InstrumentV3,
  LiquidationsV3,
  MarginIsolatedBorrowV3,
  MarginLoanGrowthV3,
  MarginLoanV3,
  MarginLongShortV3,
  MarketFeeGroupV3,
  MarketScoreWeightV3,
  OpenInterestV3,
  OrderBookV3,
  PositionTierV3,
  ProofOfReservesV3,
  PublicFillV3,
  RealityFillV3,
  RealityOrderBookV3,
  RiskReserveAllV3,
  RiskReserveHourV3,
  RiskReserveV3,
  RpiOrderBookV3,
  RpiSymbolV3,
  SplitRecordV3,
  SpotFundFlowV3,
  SpotNetFlowV3,
  SpotWhaleFlowV3,
  TickerV3,
} from './types/response/v3/public.js';
import {
  RealityCompanyOverviewV3,
  RealityCursorListV3,
  RealityDividendItemV3,
  RealityEarningsForecastV3,
  RealityExecutiveShareholdingItemV3,
  RealityInnerTradeItemV3,
  RealityMarketCalendarV3,
  RealityMarketStateV3,
  RealityShareCapitalChangeV3,
  RealityShareholdDetailItemV3,
  RealityStockInfoV3,
  RealitySuspensionResumptionInfoV3,
  RealityValuationIndicatorsV3,
} from './types/response/v3/reality.js';
import {
  StockPlusAccountV3,
  StockPlusCancelOrderResponseV3,
  StockPlusCandlestickV3,
  StockPlusCashFlowV3,
  StockPlusDepthV3,
  StockPlusHistoryCandlestickV3,
  StockPlusHistoryExecutionsV3,
  StockPlusHistoryOrdersV3,
  StockPlusIntradayV3,
  StockPlusModifyOrderResponseV3,
  StockPlusOptionChainInfoV3,
  StockPlusOptionExpiryDateV3,
  StockPlusOptionQuoteV3,
  StockPlusOptionVolumeV3,
  StockPlusOrderDetailV3,
  StockPlusOrdersV3,
  StockPlusPlaceOrderResponseV3,
  StockPlusQuoteV3,
  StockPlusStaticInfoV3,
  StockPlusStockPositionV3,
  StockPlusTodayExecutionsV3,
  StockPlusTradeDetailV3,
  StockPlusTransferRecordsV3,
  StockPlusTransferResponseV3,
} from './types/response/v3/stockplus.js';
import {
  ModifyStrategyOrderResponseV3,
  PlaceStrategyOrderResponseV3,
  StrategyOrderV3,
  StrategySubOrderV3,
} from './types/response/v3/strategy.js';
import {
  BatchModifyOrderResponseV3,
  CancelAllOrdersResponseV3,
  CancelBatchOrdersResponseV3,
  CancelOrderResponseV3,
  CloseAllPositionsResponseV3,
  CurrentPositionV3,
  FillV3,
  GetMaxOpenAvailableResponseV3,
  HistoryOrderV3,
  LoanDataV3,
  ModifyOrderResponseV3,
  OrderInfoV3,
  PlaceBatchOrdersResponseV3,
  PlaceOrderResponseV3,
  PositionAdlRankV3,
  PositionHistoryV3,
  UnfilledOrderV3,
} from './types/response/v3/trade.js';
import { APIResponse } from './types/shared.js';
import BaseRestClient from './util/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM } from './util/requestUtils.js';

/**
 * REST API client for all V3 endpoints
 */
export class RestClientV3 extends BaseRestClient {
  getClientType() {
    return REST_CLIENT_TYPE_ENUM.v3;
  }

  /**
   *
   * Custom SDK functions
   *
   */

  /**
   * This method is used to get the latency and time sync between the client and the server.
   * This is not official API endpoint and is only used for internal testing purposes.
   * Use this method to check the latency and time sync between the client and the server.
   * Final values might vary slightly, but it should be within few ms difference.
   * If you have any suggestions or improvements to this measurement, please create an issue or pull request on GitHub.
   */
  async fetchLatencySummary(): Promise<any> {
    const clientTimeReqStart = Date.now();
    const serverTime = await this.getServerTime();
    const clientTimeReqEnd = Date.now();
    console.log('serverTime', serverTime);

    const serverTimeMs = Number(serverTime.data.serverTime);
    const roundTripTime = clientTimeReqEnd - clientTimeReqStart;
    const estimatedOneWayLatency = Math.floor(roundTripTime / 2);

    // Adjust server time by adding estimated one-way latency
    const adjustedServerTime = serverTimeMs + estimatedOneWayLatency;

    // Calculate time difference between adjusted server time and local time
    const timeDifference = adjustedServerTime - clientTimeReqEnd;

    const result = {
      localTime: clientTimeReqEnd,
      serverTime: serverTimeMs,
      roundTripTime,
      estimatedOneWayLatency,
      adjustedServerTime,
      timeDifference,
    };

    console.log('Time synchronization results:');
    console.log(result);

    console.log(
      `Your approximate latency to exchange server:
        One way: ${estimatedOneWayLatency}ms.
        Round trip: ${roundTripTime}ms.
        `,
    );

    if (timeDifference > 500) {
      console.warn(
        `WARNING! Time difference between server and client clock is greater than 500ms. It is currently ${timeDifference}ms.
          Consider adjusting your system clock to avoid unwanted clock sync errors!
          Visit https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Timestamp-for-this-request-is-outside-of-the-recvWindow for more information`,
      );
    } else {
      console.log(
        `Time difference between server and client clock is within acceptable range of 500ms. It is currently ${timeDifference}ms.`,
      );
    }

    return result;
  }

  async fetchServerTime(): Promise<number> {
    const res = await this.getServerTime();
    return Number(res.data.serverTime);
  }

  /**
   *
   * Public endpoints
   *
   */

  getServerTime(): Promise<
    APIResponse<{
      serverTime: string;
    }>
  > {
    return this.get('/api/v3/public/time');
  }

  /**
   *
   * =====Market======= endpoints
   *
   */

  /**
   * Get Instruments
   */
  getInstruments(
    params: GetInstrumentsRequestV3,
  ): Promise<APIResponse<InstrumentV3[]>> {
    return this.get('/api/v3/market/instruments', params);
  }

  /**
   * Get Market Maker Fee Group - Query fee rate tiers and grouping
   */
  getMarketFeeGroup(
    params: GetMarketFeeGroupRequestV3,
  ): Promise<APIResponse<MarketFeeGroupV3[]>> {
    return this.get('/api/v3/market/fee-group', params);
  }

  /**
   * Get Liquidations History - Query historical liquidation order data (last 3 days)
   */
  getLiquidations(
    params: GetLiquidationsRequestV3,
  ): Promise<APIResponse<LiquidationsV3>> {
    return this.get('/api/v3/market/liquidations', params);
  }

  /**
   * Get RPI Symbols - Trading pairs supporting Retail Price Improvement
   */
  getRpiSymbols(): Promise<APIResponse<RpiSymbolV3[]>> {
    return this.get('/api/v3/market/rpi-symbols');
  }

  /**
   * Get RPI OrderBook - Depth with RPI and non-RPI quantities per price level
   */
  getRpiOrderBook(
    params: GetRpiOrderBookRequestV3,
  ): Promise<APIResponse<RpiOrderBookV3>> {
    return this.get('/api/v3/market/rpi-orderbook', params);
  }

  /**
   * Get Cash Dividend Records - RWA stock futures cash dividend records
   */
  getCashDividendRecords(
    params: GetCashDividendRecordsRequestV3,
  ): Promise<APIResponse<CashDividendRecordV3[]>> {
    return this.get('/api/v3/market/cash-dividend-records', params);
  }

  getSplitRecords(
    params?: GetSplitRecordsRequestV3,
  ): Promise<APIResponse<SplitRecordV3[]>> {
    return this.get('/api/v3/market/split-records', params);
  }

  /**
   * Get Spot Whale Net Flow Data
   */
  getSpotWhaleFlow(
    params: GetSpotWhaleFlowRequestV3,
  ): Promise<APIResponse<SpotWhaleFlowV3[]>> {
    return this.get('/api/v3/market/spot-whale-flow', params);
  }

  /**
   * Get Spot Fund Flow Data
   */
  getSpotFundFlow(
    params: GetSpotFundFlowRequestV3,
  ): Promise<APIResponse<SpotFundFlowV3>> {
    return this.get('/api/v3/market/spot-fund-flow', params);
  }

  /**
   * Get Spot 24H Net Capital Inflow Data
   */
  getSpotNetFlow(
    params: GetSpotNetFlowRequestV3,
  ): Promise<APIResponse<SpotNetFlowV3[]>> {
    return this.get('/api/v3/market/spot-net-flow', params);
  }

  /**
   * Get Margin Long Short Ratio Data
   */
  getMarginLongShort(
    params: GetMarginLongShortRequestV3,
  ): Promise<APIResponse<MarginLongShortV3[]>> {
    return this.get('/api/v3/market/margin-long-short', params);
  }

  /**
   * Get Margin Loan Growth Rate Data
   */
  getMarginLoanGrowth(
    params: GetMarginLoanGrowthRequestV3,
  ): Promise<APIResponse<MarginLoanGrowthV3[]>> {
    return this.get('/api/v3/market/margin-loan-growth', params);
  }

  /**
   * Get Isolated Margin Borrowing Ratio Data
   */
  getMarginIsolatedBorrow(
    params: GetMarginIsolatedBorrowRequestV3,
  ): Promise<APIResponse<MarginIsolatedBorrowV3[]>> {
    return this.get('/api/v3/market/margin-isolated-borrow', params);
  }

  /**
   * Get Futures Active Buy Sell Volume Data
   */
  getFuturesActiveBuySell(
    params: GetFuturesTradingDataRequestV3,
  ): Promise<APIResponse<FuturesActiveBuySellV3[]>> {
    return this.get('/api/v3/market/futures-active-buy-sell', params);
  }

  /**
   * Get Futures Long Short Ratio Data
   */
  getFuturesLongShort(
    params: GetFuturesTradingDataRequestV3,
  ): Promise<APIResponse<FuturesLongShortV3[]>> {
    return this.get('/api/v3/market/futures-long-short', params);
  }

  /**
   * Get Futures Active Long Short Position Data
   */
  getFuturesPositionLongShort(
    params: GetFuturesTradingDataRequestV3,
  ): Promise<APIResponse<FuturesPositionLongShortV3[]>> {
    return this.get('/api/v3/market/futures-position-long-short', params);
  }

  /**
   * Get Futures Active Long Short Account Data
   */
  getFuturesAccountLongShort(
    params: GetFuturesTradingDataRequestV3,
  ): Promise<APIResponse<FuturesAccountLongShortV3[]>> {
    return this.get('/api/v3/market/futures-account-long-short', params);
  }

  /**
   * Get Market Maker Score Weight - Query score weights per symbol
   */
  getMarketScoreWeights(
    params?: GetMarketScoreWeightsRequestV3,
  ): Promise<APIResponse<MarketScoreWeightV3[]>> {
    return this.get('/api/v3/market/score-weights', params);
  }

  /**
   * Get Tickers
   */
  getTickers(params: GetTickersRequestV3): Promise<APIResponse<TickerV3[]>> {
    return this.get('/api/v3/market/tickers', params);
  }

  /**
   * Get OrderBook
   */
  getOrderBook(
    params: GetOrderBookRequestV3,
  ): Promise<APIResponse<OrderBookV3>> {
    return this.get('/api/v3/market/orderbook', params);
  }

  /**
   * Get Recent Public Fills
   */
  getFills(
    params: GetPublicFillsRequestV3,
  ): Promise<APIResponse<PublicFillV3[]>> {
    return this.get('/api/v3/market/fills', params);
  }

  /**
   * Get Proof Of Reserves
   */
  getProofOfReserves(): Promise<APIResponse<ProofOfReservesV3>> {
    return this.get('/api/v3/market/proof-of-reserves');
  }

  /**
   * Get Open Interest
   */
  getOpenInterest(
    params: GetOpenInterestRequestV3,
  ): Promise<APIResponse<OpenInterestV3>> {
    return this.get('/api/v3/market/open-interest', params);
  }

  /**
   * Get Kline/Candlestick
   * Maximum number of returned entries: 1,000
   */
  getCandles(
    params: GetCandlesRequestV3,
  ): Promise<APIResponse<CandlestickV3[]>> {
    return this.get('/api/v3/market/candles', params);
  }

  /**
   * Get Kline/Candlestick History
   */
  getHistoryCandles(
    params: GetHistoryCandlesRequestV3,
  ): Promise<APIResponse<CandlestickV3[]>> {
    return this.get('/api/v3/market/history-candles', params);
  }

  /**
   * Get Current Funding Rate
   */
  getCurrentFundingRate(
    params: GetCurrentFundingRateRequestV3,
  ): Promise<APIResponse<CurrentFundingRateV3[]>> {
    return this.get('/api/v3/market/current-fund-rate', params);
  }

  /**
   * Get Funding Rate History
   */
  getHistoryFundingRate(
    params: GetHistoryFundingRateRequestV3,
  ): Promise<APIResponse<HistoryFundingRateV3[]>> {
    return this.get('/api/v3/market/history-fund-rate', params);
  }

  /**
   * Get Risk Reserve
   */
  getRiskReserve(
    params: GetRiskReserveRequestV3,
  ): Promise<APIResponse<RiskReserveV3>> {
    return this.get('/api/v3/market/risk-reserve', params);
  }

  /**
   * Get Risk Reserve (Hourly)
   */
  getRiskReserveHour(
    params: GetRiskReserveRequestV3,
  ): Promise<APIResponse<RiskReserveHourV3>> {
    return this.get('/api/v3/market/risk-reserve-hour', params);
  }

  /**
   * Get Risk Reserve All — current insurance funds
   */
  getRiskReserveAll(
    params: GetRiskReserveAllRequestV3,
  ): Promise<APIResponse<RiskReserveAllV3>> {
    return this.get('/api/v3/market/risk-reserve-all', params);
  }

  /**
   * Get Discount Rate
   */
  getDiscountRate(): Promise<APIResponse<DiscountRateV3[]>> {
    return this.get('/api/v3/market/discount-rate');
  }

  /**
   * Get Margin Loan
   */
  getMarginLoans(
    params: GetMarginLoansRequestV3,
  ): Promise<APIResponse<MarginLoanV3>> {
    return this.get('/api/v3/market/margin-loans', params);
  }

  /**
   * Get Position Tier
   */
  getPositionTier(
    params: GetPositionTierRequestV3,
  ): Promise<APIResponse<PositionTierV3[]>> {
    return this.get('/api/v3/market/position-tier', params);
  }

  /**
   * Get Open Interest Limit
   */
  getContractsOi(
    params: GetContractsOiRequestV3,
  ): Promise<APIResponse<ContractOiV3[]>> {
    return this.get('/api/v3/market/oi-limit', params);
  }

  /**
   * Get Index Price Components
   */
  getIndexComponents(
    params: GetIndexComponentsRequestV3,
  ): Promise<APIResponse<IndexPriceComponentsV3>> {
    return this.get('/api/v3/market/index-components', params);
  }

  /**
   * Get Reality OrderBook
   */
  getRealityOrderBook(
    params: GetRealityOrderBookRequestV3,
  ): Promise<APIResponse<RealityOrderBookV3>> {
    return this.getPrivate('/api/v3/account/reality-orderbook', params);
  }

  /**
   * Get Reality Fills
   */
  getRealityFills(
    params: GetRealityFillsRequestV3,
  ): Promise<APIResponse<RealityFillV3[]>> {
    return this.getPrivate('/api/v3/account/reality-fills', params);
  }

  getRealityCompanyOverview(
    params: GetRealityCompanyOverviewRequestV3,
  ): Promise<APIResponse<RealityCompanyOverviewV3>> {
    return this.get('/api/v3/reality/market/company-overview', params);
  }

  getRealityValuationIndicators(
    params: GetRealityValuationIndicatorsRequestV3,
  ): Promise<APIResponse<RealityValuationIndicatorsV3>> {
    return this.get('/api/v3/reality/market/valuation-indicators', params);
  }

  getRealityEarningsForecast(
    params: GetRealityEarningsForecastRequestV3,
  ): Promise<APIResponse<RealityEarningsForecastV3>> {
    return this.get('/api/v3/reality/market/earnings-forecast', params);
  }

  getRealitySuspensionResumptionInfo(
    params: GetRealitySuspensionResumptionInfoRequestV3,
  ): Promise<APIResponse<RealitySuspensionResumptionInfoV3>> {
    return this.get(
      '/api/v3/reality/market/suspension-resumption-info',
      params,
    );
  }

  getRealityDividends(
    params: GetRealityDividendsRequestV3,
  ): Promise<APIResponse<RealityCursorListV3<RealityDividendItemV3>>> {
    return this.get('/api/v3/reality/market/dividends', params);
  }

  getRealityShareCapitalChange(
    params: GetRealityShareCapitalChangeRequestV3,
  ): Promise<APIResponse<RealityShareCapitalChangeV3>> {
    return this.get('/api/v3/reality/market/share-capital-change', params);
  }

  getRealityInnerTrades(
    params: GetRealityInnerTradesRequestV3,
  ): Promise<APIResponse<RealityCursorListV3<RealityInnerTradeItemV3>>> {
    return this.get('/api/v3/reality/market/inner-trades', params);
  }

  getRealityExecutiveShareholdings(
    params: GetRealityExecutiveShareholdingsRequestV3,
  ): Promise<
    APIResponse<RealityCursorListV3<RealityExecutiveShareholdingItemV3>>
  > {
    return this.get('/api/v3/reality/market/executive-shareholdings', params);
  }

  getRealityShareholdDetail(
    params: GetRealityShareholdDetailRequestV3,
  ): Promise<APIResponse<RealityCursorListV3<RealityShareholdDetailItemV3>>> {
    return this.get('/api/v3/reality/market/sharehold-detail', params);
  }

  getRealityStockInfo(
    params?: GetRealityStockInfoRequestV3,
  ): Promise<APIResponse<RealityStockInfoV3[]>> {
    return this.get('/api/v3/reality/market/stock-info', params);
  }

  getRealityMarketStates(): Promise<APIResponse<RealityMarketStateV3[]>> {
    return this.get('/api/v3/reality/market/states');
  }

  getRealityMarketCalendar(): Promise<APIResponse<RealityMarketCalendarV3>> {
    return this.get('/api/v3/reality/market/calendar');
  }

  /**
   *
   * =====Copy Trading | Futures=====
   *
   */

  /**
   * Get copy-trading trading pair information
   *
   * Rate limit: 5/sec/UID. Permission: Unified Account — Futures Copy-Trading Orders — Read-only.
   */
  getCopyFuturesTradingPairs(): Promise<
    APIResponse<CopyFuturesTradingPairV3[]>
  > {
    return this.getPrivate('/api/v3/copy/futures/trading-pairs');
  }

  /**
   * Get copy-trading position summary
   *
   * Rate limit: 5/sec/UID. Permission: Unified Account — Futures Copy-Trading Positions — Read-only.
   */
  getCopyFuturesPositionSummary(): Promise<
    APIResponse<CopyFuturesPositionSummaryV3[]>
  > {
    return this.getPrivate('/api/v3/copy/futures/position-summary');
  }

  /**
   * Get max transferable amount and available balance for the copy-trading lead account.
   * Rate limit: 1/sec/UID.
   */
  getCopyFuturesMaxTransferable(
    params: GetCopyFuturesMaxTransferableRequestV3,
  ): Promise<APIResponse<CopyFuturesMaxTransferableV3>> {
    return this.getPrivate('/api/v3/copy/futures/max-transferable', params);
  }

  /**
   * Transfer funds between spot/funding and the copy-trading lead account.
   * Rate limit: 1/sec/UID.
   */
  copyFuturesTransfer(
    params: CopyFuturesTransferRequestV3,
  ): Promise<APIResponse<CopyFuturesTransferResponseV3>> {
    return this.postPrivate('/api/v3/copy/futures/transfer', params);
  }

  /**
   * Query copy-trading lead account transfer history.
   * Rate limit: 1/sec/UID.
   */
  getCopyFuturesTransferRecords(
    params?: GetCopyFuturesTransferRecordRequestV3,
  ): Promise<APIResponse<CopyFuturesTransferRecordListV3>> {
    return this.getPrivate('/api/v3/copy/futures/transfer-record', params);
  }

  getCopyFuturesCurrentFollowers(
    params?: GetCopyFuturesFollowersRequestV3,
  ): Promise<APIResponse<CopyFuturesCurrentFollowersV3>> {
    return this.getPrivate('/api/v3/copy/futures/current-follower', params);
  }

  getCopyFuturesHistoryFollowers(
    params?: GetCopyFuturesFollowersRequestV3,
  ): Promise<APIResponse<CopyFuturesHistoryFollowersV3>> {
    return this.getPrivate('/api/v3/copy/futures/history-follower', params);
  }

  getCopyFuturesProfitSummary(): Promise<
    APIResponse<CopyFuturesProfitSummaryV3>
  > {
    return this.getPrivate('/api/v3/copy/futures/profit-summary');
  }

  getCopyFuturesProfitDetails(
    params?: GetCopyFuturesProfitDetailsRequestV3,
  ): Promise<APIResponse<CopyFuturesProfitDetailsV3>> {
    return this.getPrivate('/api/v3/copy/futures/profit-details', params);
  }

  /**
   *
   * =====Stock+=====
   *
   */

  getStockPlusOptionQuote(
    params: GetStockPlusOptionQuoteRequestV3,
  ): Promise<APIResponse<StockPlusOptionQuoteV3>> {
    return this.getPrivate('/api/v3/stockplus/market/option-quote', params);
  }

  getStockPlusOptionChainInfo(
    params: GetStockPlusOptionChainInfoRequestV3,
  ): Promise<APIResponse<StockPlusOptionChainInfoV3>> {
    return this.getPrivate(
      '/api/v3/stockplus/market/option-chain-info',
      params,
    );
  }

  getStockPlusOptionExpiryDate(
    params: GetStockPlusOptionExpiryDateRequestV3,
  ): Promise<APIResponse<StockPlusOptionExpiryDateV3>> {
    return this.getPrivate(
      '/api/v3/stockplus/market/option-expiry-date',
      params,
    );
  }

  getStockPlusOptionVolume(
    params: GetStockPlusOptionVolumeRequestV3,
  ): Promise<APIResponse<StockPlusOptionVolumeV3>> {
    return this.getPrivate('/api/v3/stockplus/market/option-volume', params);
  }

  getStockPlusStaticInfo(
    params: GetStockPlusStaticInfoRequestV3,
  ): Promise<APIResponse<StockPlusStaticInfoV3>> {
    return this.getPrivate('/api/v3/stockplus/market/static', params);
  }

  getStockPlusQuote(
    params: GetStockPlusQuoteRequestV3,
  ): Promise<APIResponse<StockPlusQuoteV3>> {
    return this.getPrivate('/api/v3/stockplus/market/quote', params);
  }

  getStockPlusTradeDetail(
    params: GetStockPlusTradeDetailRequestV3,
  ): Promise<APIResponse<StockPlusTradeDetailV3>> {
    return this.getPrivate('/api/v3/stockplus/market/trade', params);
  }

  getStockPlusIntraday(
    params: GetStockPlusIntradayRequestV3,
  ): Promise<APIResponse<StockPlusIntradayV3>> {
    return this.getPrivate('/api/v3/stockplus/market/intraday', params);
  }

  getStockPlusHistoryCandlestick(
    params: GetStockPlusHistoryCandlestickRequestV3,
  ): Promise<APIResponse<StockPlusHistoryCandlestickV3>> {
    return this.getPrivate(
      '/api/v3/stockplus/market/history-candlestick',
      params,
    );
  }

  getStockPlusCandlestick(
    params: GetStockPlusCandlestickRequestV3,
  ): Promise<APIResponse<StockPlusCandlestickV3>> {
    return this.getPrivate('/api/v3/stockplus/market/candlestick', params);
  }

  getStockPlusDepth(
    params: GetStockPlusDepthRequestV3,
  ): Promise<APIResponse<StockPlusDepthV3>> {
    return this.getPrivate('/api/v3/stockplus/market/depth', params);
  }

  placeStockPlusOrder(
    params: PlaceStockPlusOrderRequestV3,
  ): Promise<APIResponse<StockPlusPlaceOrderResponseV3>> {
    return this.postPrivate('/api/v3/stockplus/trade/place-order', params);
  }

  cancelStockPlusOrder(
    params: CancelStockPlusOrderRequestV3,
  ): Promise<APIResponse<StockPlusCancelOrderResponseV3>> {
    return this.postPrivate('/api/v3/stockplus/trade/cancel-order', params);
  }

  modifyStockPlusOrder(
    params: ModifyStockPlusOrderRequestV3,
  ): Promise<APIResponse<StockPlusModifyOrderResponseV3>> {
    return this.postPrivate('/api/v3/stockplus/trade/modify-order', params);
  }

  getStockPlusTodayOrders(
    params?: GetStockPlusTodayOrdersRequestV3,
  ): Promise<APIResponse<StockPlusOrdersV3>> {
    return this.getPrivate('/api/v3/stockplus/trade/today-orders', params);
  }

  getStockPlusHistoryOrders(
    params?: GetStockPlusHistoryOrdersRequestV3,
  ): Promise<APIResponse<StockPlusHistoryOrdersV3>> {
    return this.getPrivate('/api/v3/stockplus/trade/history-orders', params);
  }

  getStockPlusOrderDetail(
    params: GetStockPlusOrderDetailRequestV3,
  ): Promise<APIResponse<StockPlusOrderDetailV3>> {
    return this.getPrivate('/api/v3/stockplus/trade/order-detail', params);
  }

  getStockPlusTodayExecutions(
    params?: GetStockPlusTodayExecutionsRequestV3,
  ): Promise<APIResponse<StockPlusTodayExecutionsV3>> {
    return this.getPrivate('/api/v3/stockplus/trade/today-executions', params);
  }

  getStockPlusHistoryExecutions(
    params?: GetStockPlusHistoryExecutionsRequestV3,
  ): Promise<APIResponse<StockPlusHistoryExecutionsV3>> {
    return this.getPrivate(
      '/api/v3/stockplus/trade/history-executions',
      params,
    );
  }

  getStockPlusAccount(
    params?: GetStockPlusAccountRequestV3,
  ): Promise<APIResponse<StockPlusAccountV3>> {
    return this.getPrivate('/api/v3/stockplus/asset/account', params);
  }

  getStockPlusCashFlow(
    params: GetStockPlusCashFlowRequestV3,
  ): Promise<APIResponse<StockPlusCashFlowV3>> {
    return this.getPrivate('/api/v3/stockplus/asset/cash-flow', params);
  }

  getStockPlusStockPosition(
    params?: GetStockPlusStockPositionRequestV3,
  ): Promise<APIResponse<StockPlusStockPositionV3>> {
    return this.getPrivate('/api/v3/stockplus/asset/stock-position', params);
  }

  stockPlusTransfer(
    params: StockPlusTransferRequestV3,
  ): Promise<APIResponse<StockPlusTransferResponseV3>> {
    return this.postPrivate('/api/v3/stockplus/asset/transfer', params);
  }

  getStockPlusTransferRecords(
    params?: GetStockPlusTransferRecordsRequestV3,
  ): Promise<APIResponse<StockPlusTransferRecordsV3>> {
    return this.getPrivate('/api/v3/stockplus/asset/transfer-records', params);
  }

  /**
   *
   * =====CFD======= endpoints
   *
   */

  getCfdTickers(
    params?: GetCfdTickersRequestV3,
  ): Promise<APIResponse<CfdTickerV3[]>> {
    return this.getPrivate('/api/v3/cfd/market/tickers', params);
  }

  getCfdHistoryCandlestick(
    params: GetCfdHistoryCandlestickRequestV3,
  ): Promise<APIResponse<CfdCandlestickV3[]>> {
    return this.getPrivate('/api/v3/cfd/market/history-candlestick', params);
  }

  placeCfdOrder(
    params: PlaceCfdOrderRequestV3,
  ): Promise<APIResponse<PlaceCfdOrderResponseV3>> {
    return this.postPrivate('/api/v3/cfd/trade/place-order', params);
  }

  modifyCfdOrder(
    params: ModifyCfdOrderRequestV3,
  ): Promise<APIResponse<ModifyCfdOrderResponseV3>> {
    return this.postPrivate('/api/v3/cfd/trade/modify-order', params);
  }

  cancelCfdOrder(params: CancelCfdOrderRequestV3): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/cfd/trade/cancel-order', params);
  }

  cancelAllCfdOrders(
    params?: CancelAllCfdOrdersRequestV3,
  ): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/cfd/trade/cancel-all', params);
  }

  closeCfdPositions(
    params: CloseCfdPositionsRequestV3,
  ): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/cfd/trade/close-positions', params);
  }

  closeAllCfdPositions(
    params?: CloseAllCfdPositionsRequestV3,
  ): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/cfd/trade/close-all-positions', params);
  }

  getCfdUnfilledOrders(
    params?: GetCfdUnfilledOrdersRequestV3,
  ): Promise<APIResponse<CfdUnfilledOrderV3[]>> {
    return this.getPrivate('/api/v3/cfd/trade/unfilled-order', params);
  }

  getCfdOrderHistory(
    params: GetCfdOrderHistoryRequestV3,
  ): Promise<APIResponse<CfdOrderHistoryV3>> {
    return this.getPrivate('/api/v3/cfd/trade/history-order', params);
  }

  getCfdCurrentPositions(
    params?: GetCfdCurrentPositionsRequestV3,
  ): Promise<APIResponse<CfdCurrentPositionV3[]>> {
    return this.getPrivate('/api/v3/cfd/trade/current-positions', params);
  }

  getCfdFundDetail(): Promise<APIResponse<CfdFundDetailV3>> {
    return this.getPrivate('/api/v3/cfd/account/fund-detail');
  }

  cfdTransfer(
    params: CfdTransferRequestV3,
  ): Promise<APIResponse<CfdTransferResponseV3>> {
    return this.postPrivate('/api/v3/cfd/account/transfer', params);
  }

  getCfdTransferRecords(
    params?: GetCfdTransferRecordsRequestV3,
  ): Promise<APIResponse<CfdTransferRecordsV3>> {
    return this.getPrivate('/api/v3/cfd/account/transfer-records', params);
  }

  getCfdFinancialRecords(
    params?: GetCfdFinancialRecordsRequestV3,
  ): Promise<APIResponse<CfdFinancialRecordV3[]>> {
    return this.getPrivate('/api/v3/cfd/account/financial-records', params);
  }

  getCfdInstruments(
    params?: GetCfdInstrumentsRequestV3,
  ): Promise<APIResponse<CfdInstrumentV3[]>> {
    return this.getPrivate('/api/v3/cfd/account/instruments', params);
  }

  /**
   *
   * =====Account======= endpoints
   *
   */

  /**
   * Get Account Assets
   */
  getBalances(): Promise<APIResponse<AccountAssetsV3>> {
    return this.getPrivate('/api/v3/account/assets');
  }

  /**
   * Get Fund Account Assets
   */
  getFundingAssets(
    params?: GetFundingAssetsRequestV3,
  ): Promise<APIResponse<FundingAssetV3[]>> {
    return this.getPrivate('/api/v3/account/funding-assets', params);
  }

  /**
   * Query account metadata (UID, inviter, parent account, channel, IP whitelist, permissions).
   * Rate limit: 5/sec/UID
   */
  getAccountInfo(): Promise<APIResponse<AccountInfoV3>> {
    return this.getPrivate('/api/v3/account/info');
  }

  /**
   * Get account settings (hold mode, margin mode, leverage, symbol/coin config).
   * Rate limit: 20/sec/UID
   */
  getAccountSettings(): Promise<APIResponse<AccountSettingsV3>> {
    return this.getPrivate('/api/v3/account/settings');
  }

  /**
   * Switch account level (basic / advanced / delta-neutral). Rate limit: 1/sec/UID.
   */
  adjustAccountMode(
    params: AdjustAccountModeRequestV3,
  ): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/account/adjust-account-mode', params);
  }

  /**
   * Delta-neutral metrics (equity ratio, thresholds, per-coin position ratios).
   * Only available when the account is in delta-neutral mode. Rate limit: 20/sec/UID.
   */
  getDeltaInfo(): Promise<APIResponse<AccountDeltaInfoV3>> {
    return this.getPrivate('/api/v3/account/delta-info');
  }

  /**
   * Set Leverage
   */
  setLeverage(params: SetLeverageRequestV3): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/set-leverage', params);
  }

  /**
   * Set Holding Mode
   */
  setHoldMode(params: {
    holdMode: 'one_way_mode' | 'hedge_mode';
  }): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/set-hold-mode', params);
  }

  /**
   * Get Collateral Type - Query unified account collateral configuration
   */
  getCollateralType(): Promise<APIResponse<CollateralTypeConfigV3>> {
    return this.getPrivate('/api/v3/account/collateral-type');
  }

  /**
   * Set Collateral Type - Configure unified account collateral type
   */
  setCollateralType(
    params: SetCollateralTypeRequestV3,
  ): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/set-collateral-type', params);
  }

  /**
   * Get Custom Collateral Coins - Platform-supported custom collateral coins
   */
  getCustomCollateralCoins(): Promise<APIResponse<CustomCollateralCoinV3[]>> {
    return this.get('/api/v3/account/custom-collateral-coins');
  }

  /**
   * Pre Set Leverage - Preview leverage adjustment impact without applying
   */
  preSetLeverage(
    params: PreSetLeverageRequestV3,
  ): Promise<APIResponse<PreSetLeverageV3>> {
    return this.getPrivate('/api/v3/account/pre-set-leverage', params);
  }

  /**
   * Set Margin - Adjust isolated margin position margin amount
   */
  setMargin(params: SetMarginRequestV3): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/set-margin', params);
  }

  /**
   * Get Max Withdrawal - Max withdrawable amount for a coin in unified account
   */
  getMaxWithdrawal(
    params: GetMaxWithdrawalRequestV3,
  ): Promise<APIResponse<MaxWithdrawalV3>> {
    return this.getPrivate('/api/v3/account/max-withdrawal', params);
  }

  /**
   * Get Financial Records
   */
  getFinancialRecords(params: GetFinancialRecordsRequestV3): Promise<
    APIResponse<{
      list: FinancialRecordV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/financial-records', params);
  }

  getFundingFinancialRecords(
    params?: GetFundingFinancialRecordsRequestV3,
  ): Promise<
    APIResponse<{
      list: FundingFinancialRecordV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/funding-financial-records', params);
  }

  /**
   * Get Repayable Coins
   */
  getRepayableCoins(): Promise<
    APIResponse<{
      repayableCoinList: RepayableCoinV3[];
      maxSelection: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/repayable-coins');
  }

  /**
   * Get Payment Coins
   */
  getPaymentCoins(): Promise<
    APIResponse<{
      paymentCoinList: PaymentCoinV3[];
      maxSelection: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/payment-coins');
  }

  /**
   * Repay
   */
  submitRepay(params: RepayRequestV3): Promise<APIResponse<RepayResponseV3>> {
    return this.postPrivate('/api/v3/account/repay', params);
  }

  /**
   * Get Convert Records
   */
  getConvertRecords(params: GetConvertRecordsRequestV3): Promise<
    APIResponse<{
      list: ConvertRecordV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/convert-records', params);
  }

  getSmallAssets(
    params?: GetSmallAssetsRequestV3,
  ): Promise<APIResponse<SmallAssetV3[]>> {
    return this.getPrivate('/api/v3/convert/small-assets', params);
  }

  tradeSmallAssets(
    params: TradeSmallAssetsRequestV3,
  ): Promise<APIResponse<SmallAssetsTradeResponseV3>> {
    return this.postPrivate('/api/v3/convert/small-assets-trade', params);
  }

  getSmallAssetsHistory(params?: GetSmallAssetsHistoryRequestV3): Promise<
    APIResponse<{
      list: SmallAssetsHistoryItemV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/convert/small-assets-history', params);
  }

  /**
   * Set up deposit account - Configure default recharge account for a certain symbol
   * This configuration item remains valid for a long time. That is, once a user sets a default
   * recharge account for a certain symbol, it will be retained permanently, and there is no need to reconfigure it.
   * Permission: UTA mgt. (read & write)
   */
  setDepositAccount(
    params: SetDepositAccountRequestV3,
  ): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/deposit-account', params);
  }

  /**
   * Switch Deduct - Set BGB deduction
   */
  switchDeduct(params: SwitchDeductRequestV3): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/switch-deduct', params);
  }

  /**
   * Get Deduct Info - Get BGB deduction status
   */
  getDeductInfo(): Promise<
    APIResponse<{
      deduct: 'on' | 'off';
    }>
  > {
    return this.getPrivate('/api/v3/account/deduct-info');
  }

  /**
   * Get Trading Fee Rate
   */
  getFeeRate(params: GetFeeRateRequestV3): Promise<
    APIResponse<{
      makerFeeRate: string;
      takerFeeRate: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/fee-rate', params);
  }

  /**
   * Get All Symbol Fee Rates - Query fee rates for all trading pairs under a product type
   */
  getAllFeeRates(
    params: GetAllFeeRatesRequestV3,
  ): Promise<APIResponse<AllSymbolFeeRateV3[]>> {
    return this.getPrivate('/api/v3/account/all-fee-rate', params);
  }

  /**
   * Get Max Transferable
   *
   * - Rate limit: 3 req/sec/UID
   * - Permission: UTA mgt. (read)
   * - Get the maximum transferable amount for the unified account.
   */
  getMaxTransferable(
    params: GetMaxTransferableRequestV3,
  ): Promise<APIResponse<MaxTransferableV3>> {
    return this.getPrivate('/api/v3/account/max-transferable', params);
  }

  /**
   * Get Open Interest Limit
   *
   * - Rate limit: 5/sec/UID
   * - Get open interest limit for a symbol
   */
  getOpenInterestLimit(
    params: GetOpenInterestLimitRequestV3,
  ): Promise<APIResponse<OpenInterestLimitV3>> {
    return this.getPrivate('/api/v3/account/open-interest-limit', params);
  }

  getEligibleSymbols(
    params?: GetEligibleSymbolsRequestV3,
  ): Promise<APIResponse<EligibleSymbolV3[]>> {
    return this.getPrivate('/api/v3/account/eligible-symbols', params);
  }

  getEligibleMarginTier(
    params?: GetEligibleMarginTierRequestV3,
  ): Promise<APIResponse<EligibleMarginTierV3[]>> {
    return this.getPrivate('/api/v3/account/eligible-margin-tier', params);
  }

  getEligibleLoanInfo(
    params?: GetEligibleLoanInfoRequestV3,
  ): Promise<APIResponse<EligibleLoanInfoV3[]>> {
    return this.getPrivate('/api/v3/account/eligible-loan-info', params);
  }

  getEligibleDiscountRate(
    params?: GetEligibleDiscountRateRequestV3,
  ): Promise<APIResponse<EligibleDiscountRateV3[]>> {
    return this.getPrivate('/api/v3/account/eligible-discount-rate', params);
  }

  /**
   * Switch Account - Switch to classic account mode
   * Only supports parent accounts.
   * This endpoint is only used for switching to classic account mode.
   * Please note that since the account switching process takes approximately 1 minute,
   * the successful response you receive only indicates that the request has been received,
   * and does not mean that the account has been successfully switched to the classic account.
   * Please use the query switching status interface to confirm whether the account switching is successful.
   */
  downgradeAccountToClassic(): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/account/switch');
  }

  /**
   * Get Switch Status - Get account switching status
   * Only supports parent accounts.
   */
  getUnifiedAccountSwitchStatus(): Promise<
    APIResponse<{
      status: 'processProcessing' | 'successSuccess' | 'failFailed';
    }>
  > {
    return this.getPrivate('/api/v3/account/switch-status');
  }

  /**
   * Get Tax Records
   *
   * - Rate limit: 1/sec/UID
   * - Data query range: 366 days
   * - Please use the tax API Key to request Creation Portal
   * - Get Unified Account Tax Records
   */
  getTaxRecords(
    params: GetTaxRecordsRequestV3,
  ): Promise<APIResponse<TaxRecordV3[]>> {
    return this.getPrivate('/api/v3/tax/records', params);
  }

  /**
   *
   * =====SubAccount======= endpoints
   *
   */

  /**
   * Create Sub-account
   */
  createSubAccount(
    params: CreateSubAccountRequestV3,
  ): Promise<APIResponse<CreateSubAccountResponseV3>> {
    return this.postPrivate('/api/v3/user/create-sub', params);
  }

  /**
   * Create Agent Sub-account
   */
  createAgentSubAccount(
    params: CreateAgentSubAccountRequestV3,
  ): Promise<APIResponse<CreateAgentSubAccountResponseV3>> {
    return this.postPrivate('/api/v3/user/sub-account/agent-create', params);
  }

  /**
   * Freeze/Unfreeze Sub-account
   */
  freezeSubAccount(
    params: FreezeSubAccountRequestV3,
  ): Promise<APIResponse<object>> {
    return this.postPrivate('/api/v3/user/freeze-sub', params);
  }

  /**
   * Get Sub-account Unified Account Assets
   */
  getSubUnifiedAssets(
    params?: GetSubUnifiedAssetsRequestV3,
  ): Promise<APIResponse<SubUnifiedAssetV3[]>> {
    return this.getPrivate('/api/v3/account/sub-unified-assets', params);
  }

  /**
   * Get Sub-account List
   */
  getSubAccountList(params?: GetSubAccountListRequestV3): Promise<
    APIResponse<{
      list: SubAccountV3[];
      hasNext: boolean;
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/user/sub-list', params);
  }

  /**
   * Create Sub-account API Key
   */
  createSubAccountApiKey(
    params: CreateSubAccountApiKeyRequestV3,
  ): Promise<APIResponse<CreateSubAccountApiKeyResponseV3>> {
    return this.postPrivate('/api/v3/user/create-sub-api', params);
  }

  /**
   * Modify Sub-account API Key
   */
  updateSubAccountApiKey(
    params: UpdateSubAccountApiKeyRequestV3,
  ): Promise<APIResponse<UpdateSubAccountApiKeyResponseV3>> {
    return this.postPrivate('/api/v3/user/update-sub-api', params);
  }

  /**
   * Delete Sub-account API Key
   */
  deleteSubAccountApiKey(
    params: DeleteSubAccountApiKeyRequestV3,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v3/user/delete-sub-api', params);
  }

  /**
   * Get Sub-account API Keys
   */
  getSubAccountApiKeys(params: GetSubAccountApiKeysRequestV3): Promise<
    APIResponse<{
      items: SubAccountApiKeyV3[];
      hasNext: boolean;
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/user/sub-api-list', params);
  }

  getRateLimitQuota(
    params: GetRateLimitQuotaRequestV3,
  ): Promise<APIResponse<RateLimitQuotaV3>> {
    return this.getPrivate('/api/v3/user/rate-limit-quota', params);
  }

  setRateLimitQuota(
    params: SetRateLimitQuotaRequestV3,
  ): Promise<APIResponse<Record<string, never>>> {
    return this.postPrivate('/api/v3/user/set-rate-limit-quota', params);
  }

  /**
   *
   * =====Transfer======= endpoints
   *
   */

  /**
   * Get Transferable Coins
   */
  getTransferableCoins(
    params: GetTransferableCoinsRequestV3,
  ): Promise<APIResponse<string[]>> {
    return this.getPrivate('/api/v3/account/transferable-coins', params);
  }

  /**
   * Transfer
   */
  submitTransfer(
    params: TransferRequestV3,
  ): Promise<APIResponse<TransferResponseV3>> {
    return this.postPrivate('/api/v3/account/transfer', params);
  }

  /**
   * Main-Sub Account Transfer
   */
  subAccountTransfer(params: SubAccountTransferRequestV3): Promise<
    APIResponse<{
      transferId: string;
      clientOid: string;
    }>
  > {
    return this.postPrivate('/api/v3/account/sub-transfer', params);
  }

  /**
   * Get Main-Sub Transfer Records
   */
  getSubTransferRecords(params?: GetSubTransferRecordsRequestV3): Promise<
    APIResponse<{
      items: SubTransferRecordV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/sub-transfer-record', params);
  }

  /**
   * Sub-Main Account Transfer
   */
  subMasterTransfer(params: SubMasterTransferRequestV3): Promise<
    APIResponse<{
      transferId: string;
      clientOid: string;
    }>
  > {
    return this.postPrivate('/api/v3/account/sub-master-transfer', params);
  }

  /**
   *
   * =====Deposit======= endpoints
   *
   */

  /**
   * Get Deposit Address
   */
  getDepositAddress(
    params: GetDepositAddressRequestV3,
  ): Promise<APIResponse<DepositAddressV3>> {
    return this.getPrivate('/api/v3/account/deposit-address', params);
  }

  /**
   * Get Sub Deposit Address
   */
  getSubDepositAddress(
    params: GetSubDepositAddressRequestV3,
  ): Promise<APIResponse<DepositAddressV3>> {
    return this.getPrivate('/api/v3/account/sub-deposit-address', params);
  }

  /**
   * Get Deposit Records
   */
  getDepositRecords(
    params: GetDepositRecordsRequestV3,
  ): Promise<APIResponse<DepositRecordV3[]>> {
    return this.getPrivate('/api/v3/account/deposit-records', params);
  }

  /**
   * Get Sub Deposit Records
   */
  getSubDepositRecords(
    params: GetSubDepositRecordsRequestV3,
  ): Promise<APIResponse<DepositRecordV3[]>> {
    return this.postPrivate('/api/v3/account/sub-deposit-records', params);
  }

  /**
   *
   * =====Withdraw======= endpoints
   *
   */

  /**
   * Withdraw - Includes on-chain withdrawals and internal transfers
   */
  submitWithdraw(
    params: WithdrawRequestV3,
  ): Promise<APIResponse<WithdrawResponseV3>> {
    return this.postPrivate('/api/v3/account/withdraw', params);
  }

  /**
   * Get Withdraw Records
   */
  getWithdrawRecords(
    params: GetWithdrawRecordsRequestV3,
  ): Promise<APIResponse<WithdrawRecordV3[]>> {
    return this.getPrivate('/api/v3/account/withdrawal-records', params);
  }

  /**
   * Query the withdrawal address book. Rate limit: 1/sec/UID.
   */
  getWithdrawAddressBook(
    params?: GetWithdrawAddressBookRequestV3,
  ): Promise<APIResponse<WithdrawAddressBookV3>> {
    return this.getPrivate('/api/v3/account/withdraw-address', params);
  }

  /**
   * Cancel a withdrawal still in the cooling-off period. Rate limit: 1/sec/UID.
   */
  cancelWithdrawal(
    params: CancelWithdrawalRequestV3,
  ): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/account/cancel-withdrawal', params);
  }

  /**
   *
   * =====Trade======= endpoints
   *
   */

  /**
   * Place Order
   */
  submitNewOrder(
    params: PlaceOrderRequestV3,
  ): Promise<APIResponse<PlaceOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/place-order', params);
  }

  /**
   * Modify Order
   */
  modifyOrder(
    params: ModifyOrderRequestV3,
  ): Promise<APIResponse<ModifyOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/modify-order', params);
  }

  /**
   * Place Reality Order - Limit or market order for Reality stock trading pairs
   */
  placeRealityOrder(
    params: PlaceRealityOrderRequestV3,
  ): Promise<APIResponse<PlaceOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/place-reality-order', params);
  }

  /**
   * Cancel Reality Order - Cancel an unfilled or partially filled Reality stock order
   */
  cancelRealityOrder(
    params: CancelRealityOrderRequestV3,
  ): Promise<APIResponse<CancelOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/cancel-reality-order', params);
  }

  /**
   * Get Loan Data - Query current loan data for the unified trading account
   */
  getLoanData(): Promise<APIResponse<LoanDataV3>> {
    return this.getPrivate('/api/v3/trade/loan-data');
  }

  /**
   * Cancel Order
   */
  cancelOrder(
    params: CancelOrderRequestV3,
  ): Promise<APIResponse<CancelOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/cancel-order', params);
  }

  /**
   * Batch Order
   */
  placeBatchOrders(
    params: PlaceBatchOrdersRequestV3[],
  ): Promise<APIResponse<PlaceBatchOrdersResponseV3[]>> {
    return this.postPrivate('/api/v3/trade/place-batch', params);
  }

  /**
   * Batch Modify Orders
   */
  batchModifyOrders(
    params: BatchModifyOrderRequestV3[],
  ): Promise<APIResponse<BatchModifyOrderResponseV3[]>> {
    return this.postPrivate('/api/v3/trade/batch-modify-order', params);
  }

  /**
   * Batch Cancel
   */
  cancelBatchOrders(
    params: CancelBatchOrdersRequestV3[],
  ): Promise<APIResponse<CancelBatchOrdersResponseV3[]>> {
    return this.postPrivate('/api/v3/trade/cancel-batch', params);
  }

  /**
   * Cancel All Orders
   */
  cancelAllOrders(
    params: CancelAllOrdersRequestV3,
  ): Promise<APIResponse<CancelAllOrdersResponseV3>> {
    return this.postPrivate('/api/v3/trade/cancel-symbol-order', params);
  }

  /**
   * Close All Positions
   */
  closeAllPositions(
    params: CloseAllPositionsRequestV3,
  ): Promise<APIResponse<CloseAllPositionsResponseV3>> {
    return this.postPrivate('/api/v3/trade/close-positions', params);
  }

  /**
   * Get Order Details
   */
  getOrderInfo(
    params: GetOrderInfoRequestV3,
  ): Promise<APIResponse<OrderInfoV3>> {
    return this.getPrivate('/api/v3/trade/order-info', params);
  }

  /**
   * Get Open Orders
   */
  getUnfilledOrders(params?: GetUnfilledOrdersRequestV3): Promise<
    APIResponse<{
      list: UnfilledOrderV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/trade/unfilled-orders', params);
  }

  /**
   * Get Order History
   */
  getHistoryOrders(params: GetHistoryOrdersRequestV3): Promise<
    APIResponse<{
      list: HistoryOrderV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/trade/history-orders', params);
  }

  /**
   * Move Positions - Transfer positions between master and sub-accounts
   */
  movePositions(
    params: MovePositionsRequestV3,
  ): Promise<APIResponse<MovePositionsResponseV3>> {
    return this.postPrivate('/api/v3/account/move-positions', params);
  }

  /**
   * Get Move Position History
   */
  getMovePositionHistory(params: GetMovePositionHistoryRequestV3): Promise<
    APIResponse<{
      list: MovePositionHistoryV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/account/move-position-history', params);
  }

  /**
   * Get Fill History
   */
  getTradeFills(params?: GetFillsRequestV3): Promise<
    APIResponse<{
      list: FillV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/trade/fills', params);
  }

  /**
   * Get Position Info
   */
  getCurrentPosition(params: GetCurrentPositionRequestV3): Promise<
    APIResponse<{
      list: CurrentPositionV3[];
    }>
  > {
    return this.getPrivate('/api/v3/position/current-position', params);
  }

  /**
   * Get Positions History
   */
  getPositionHistory(params: GetPositionHistoryRequestV3): Promise<
    APIResponse<{
      list: PositionHistoryV3[];
      cursor: string;
    }>
  > {
    return this.getPrivate('/api/v3/position/history-position', params);
  }

  /**
   * Get Max Open Available
   */
  getMaxOpenAvailable(
    params: GetMaxOpenAvailableRequestV3,
  ): Promise<APIResponse<GetMaxOpenAvailableResponseV3>> {
    return this.postPrivate('/api/v3/account/max-open-available', params);
  }

  /**
   * Get Position ADL Rank - Get position auto-deleveraging ranking
   */
  getPositionAdlRank(): Promise<APIResponse<PositionAdlRankV3[]>> {
    return this.getPrivate('/api/v3/position/adlRank');
  }

  /**
   * CountDown Cancel All
   */
  countdownCancelAll(
    params: CountdownCancelAllRequestV3,
  ): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/trade/countdown-cancel-all', params);
  }

  /**
   *
   * =====Inst Loan======= endpoints
   *
   */

  /**
   * Get Transferred Quantity
   */
  getLoanTransfered(
    params: GetTransferedRequestV3,
  ): Promise<APIResponse<LoanTransfersV3>> {
    return this.getPrivate('/api/v3/ins-loan/transfered', params);
  }

  /**
   * Get Trade Symbols
   */
  getLoanSymbols(
    params: GetSymbolsRequestV3,
  ): Promise<APIResponse<LoanSymbolsV3>> {
    return this.getPrivate('/api/v3/ins-loan/symbols', params);
  }

  /**
   * Get Risk Unit
   */
  getLoanRiskUnit(): Promise<
    APIResponse<{
      riskUnitId: string[];
    }>
  > {
    return this.getPrivate('/api/v3/ins-loan/risk-unit');
  }

  /**
   * Get Repayment Orders
   */
  getLoanRepaidHistory(
    params?: GetRepaidHistoryRequestV3,
  ): Promise<APIResponse<RepaidHistoryItemV3[]>> {
    return this.getPrivate('/api/v3/ins-loan/repaid-history', params);
  }

  /**
   * Get Product Info
   */
  getLoanProductInfo(
    params: GetProductInfosRequestV3,
  ): Promise<APIResponse<LoanProductInfoV3>> {
    return this.getPrivate('/api/v3/ins-loan/product-infos', params);
  }

  /**
   * Get Loan Orders
   */
  getLoanOrder(
    params?: GetLoanOrderRequestV3,
  ): Promise<APIResponse<LoanOrderV3[]>> {
    return this.getPrivate('/api/v3/ins-loan/loan-order', params);
  }

  /**
   * Get LTV
   */
  getLoanLTVConvert(
    params?: GetLTVConvertRequestV3,
  ): Promise<APIResponse<LTVConvertResponseV3>> {
    return this.getPrivate('/api/v3/ins-loan/ltv-convert', params);
  }

  /**
   * Get Margin Coin Info
   */
  getLoanMarginCoinInfo(params: GetEnsureCoinsRequestV3): Promise<
    APIResponse<{
      productId: string;
      coinInfo: CoinInfoV3[];
    }>
  > {
    return this.getPrivate('/api/v3/ins-loan/ensure-coins-convert', params);
  }

  /**
   * Bind/Unbind UID to Risk Unit
   */
  bindLoanUid(
    params: BindUidRequestV3,
  ): Promise<APIResponse<BindUidResponseV3>> {
    return this.postPrivate('/api/v3/ins-loan/bind-uid', params);
  }

  /**
   *
   * =====Unified Account Staking & Lending (Crypto Loans)===== /api/v3/loan/*
   *
   */

  /**
   * Get Loan Coins - Query supported collateral currencies and borrowable coins
   */
  getLoanCoins(
    params?: GetLoanCoinsRequestV3,
  ): Promise<APIResponse<GetLoanCoinsResponseV3>> {
    return this.getPrivate('/api/v3/loan/coins', params);
  }

  /**
   * Get Loan Interest - Query estimated interest and borrowable amount
   */
  getLoanInterest(
    params: GetLoanInterestRequestV3,
  ): Promise<APIResponse<GetLoanInterestResponseV3>> {
    return this.getPrivate('/api/v3/loan/interest', params);
  }

  /**
   * Borrow - Borrow coins
   */
  loanBorrow(
    params: LoanBorrowRequestV3,
  ): Promise<APIResponse<LoanBorrowResponseV3>> {
    return this.postPrivate('/api/v3/loan/borrow', params);
  }

  /**
   * Get Borrow Ongoing - Query current borrowings
   */
  getLoanBorrowOngoing(
    params?: GetLoanBorrowOngoingRequestV3,
  ): Promise<APIResponse<LoanBorrowOngoingItemV3[]>> {
    return this.getPrivate('/api/v3/loan/borrow-ongoing', params);
  }

  /**
   * Get Borrow History - Query borrowing history
   */
  getLoanBorrowHistory(
    params: GetLoanBorrowHistoryRequestV3,
  ): Promise<APIResponse<LoanBorrowHistoryItemV3[]>> {
    return this.getPrivate('/api/v3/loan/borrow-history', params);
  }

  /**
   * Repay - Repay coins
   */
  loanRepay(
    params: LoanRepayRequestV3,
  ): Promise<APIResponse<LoanRepayResponseV3>> {
    return this.postPrivate('/api/v3/loan/repay', params);
  }

  /**
   * Get Repay History - Query repayment history
   */
  getLoanRepayHistory(
    params: GetLoanRepayHistoryRequestV3,
  ): Promise<APIResponse<LoanRepayHistoryItemV3[]>> {
    return this.getPrivate('/api/v3/loan/repay-history', params);
  }

  /**
   * Revise Pledge - Adjust collateral ratio
   */
  loanRevisePledge(
    params: LoanRevisePledgeRequestV3,
  ): Promise<APIResponse<LoanRevisePledgeResponseV3>> {
    return this.postPrivate('/api/v3/loan/revise-pledge', params);
  }

  /**
   * Get Pledge Rate History - Query collateral ratio history
   */
  getLoanPledgeRateHistory(
    params: GetLoanPledgeRateHistoryRequestV3,
  ): Promise<APIResponse<LoanPledgeRateHistoryItemV3[]>> {
    return this.getPrivate('/api/v3/loan/pledge-rate-history', params);
  }

  /**
   * Get Loan Debts - Query assets and liabilities
   */
  getLoanDebts(): Promise<APIResponse<GetLoanDebtsResponseV3>> {
    return this.getPrivate('/api/v3/loan/debts');
  }

  /**
   * Get Loan Reduces - Query liquidation records
   */
  getLoanReduces(
    params: GetLoanReducesRequestV3,
  ): Promise<APIResponse<LoanReduceItemV3[]>> {
    return this.getPrivate('/api/v3/loan/reduces', params);
  }

  /**
   *
   * =====Strategy======= endpoints
   *
   */

  /**
   * Place Strategy Order
   */
  submitStrategyOrder(
    params: PlaceStrategyOrderRequestV3,
  ): Promise<APIResponse<PlaceStrategyOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/place-strategy-order', params);
  }

  /**
   * Modify Strategy Order
   */
  modifyStrategyOrder(
    params: ModifyStrategyOrderRequestV3,
  ): Promise<APIResponse<ModifyStrategyOrderResponseV3>> {
    return this.postPrivate('/api/v3/trade/modify-strategy-order', params);
  }

  /**
   * Cancel Strategy Order
   */
  cancelStrategyOrder(
    params: CancelStrategyOrderRequestV3,
  ): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/trade/cancel-strategy-order', params);
  }

  /**
   * Get Unfilled Strategy Orders
   */
  getUnfilledStrategyOrders(
    params: GetUnfilledStrategyOrdersRequestV3,
  ): Promise<APIResponse<StrategyOrderV3[]>> {
    return this.getPrivate('/api/v3/trade/unfilled-strategy-orders', params);
  }

  /**
   * Get Strategy Order History
   */
  getHistoryStrategyOrders(params: GetHistoryStrategyOrdersRequestV3): Promise<
    APIResponse<{
      list: StrategyOrderV3[];
      cursor?: string;
    }>
  > {
    return this.getPrivate('/api/v3/trade/history-strategy-orders', params);
  }

  getStrategySubOrders(params: GetStrategySubOrdersRequestV3): Promise<
    APIResponse<{
      list: StrategySubOrderV3[];
      cursor?: string;
    }>
  > {
    return this.getPrivate('/api/v3/trade/strategy-sub-orders', params);
  }

  /**
   *
   * =====Grid======= endpoints
   *
   */

  validateGridBot(
    params: ValidateGridBotRequestV3,
  ): Promise<APIResponse<GridValidateResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/validate', params);
  }

  createGridBot(
    params: CreateGridBotRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/create-bot', params);
  }

  modifyGridBot(
    params: ModifyGridBotRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/modify-bot', params);
  }

  modifyGridInterval(
    params: ModifyGridIntervalRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/modify-grid-interval', params);
  }

  addGridInvestment(
    params: AddGridInvestmentRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/add-investment', params);
  }

  closeGridBot(
    params: CloseGridBotRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/close-bot', params);
  }

  getGridBotDetail(
    params: GetGridBotDetailRequestV3,
  ): Promise<APIResponse<GridBotDetailV3>> {
    return this.getPrivate('/api/v3/trade/grid/bot-detail', params);
  }

  getGridBotOrderDetails(
    params: GetGridBotOrderDetailsRequestV3,
  ): Promise<APIResponse<GridBotOrderDetailsV3>> {
    return this.getPrivate('/api/v3/trade/grid/list-details', params);
  }

  validateNeutralGridBot(
    params: ValidateNeutralGridBotRequestV3,
  ): Promise<APIResponse<GridValidateResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/validate-neutral', params);
  }

  createNeutralGridBot(
    params: CreateNeutralGridBotRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/create-neutral-bot', params);
  }

  modifyNeutralGridBot(
    params: ModifyNeutralGridBotRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate('/api/v3/trade/grid/modify-neutral-bot', params);
  }

  modifyNeutralGridInterval(
    params: ModifyNeutralGridIntervalRequestV3,
  ): Promise<APIResponse<GridBotIdResponseV3>> {
    return this.postPrivate(
      '/api/v3/trade/grid/modify-neutral-grid-interval',
      params,
    );
  }

  getNeutralGridBotDetail(
    params: GetNeutralGridBotDetailRequestV3,
  ): Promise<APIResponse<NeutralGridBotDetailV3>> {
    return this.getPrivate('/api/v3/trade/grid/neutral-bot-detail', params);
  }

  getNeutralGridBotOrderDetails(
    params: GetNeutralGridBotOrderDetailsRequestV3,
  ): Promise<APIResponse<GridBotOrderDetailsV3>> {
    return this.getPrivate('/api/v3/trade/grid/neutral-list-details', params);
  }

  /**
   *
   * =====Broker======= endpoints
   *
   */

  /**
   * Create Broker Sub-Account
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  createBrokerSubAccount(
    params: CreateBrokerSubAccountRequestV3,
  ): Promise<APIResponse<CreateBrokerSubAccountResponseV3>> {
    return this.postPrivate('/api/v3/broker/create-sub', params);
  }

  /**
   * Get Broker Sub-Account List
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  getBrokerSubAccountList(
    params?: GetBrokerSubAccountListRequestV3,
  ): Promise<APIResponse<GetBrokerSubAccountListResponseV3>> {
    return this.getPrivate('/api/v3/broker/sub-list', params);
  }

  /**
   * Modify Broker Sub-Account
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  modifyBrokerSubAccount(
    params: ModifyBrokerSubAccountRequestV3,
  ): Promise<APIResponse<ModifyBrokerSubAccountResponseV3>> {
    return this.postPrivate('/api/v3/broker/modify-sub', params);
  }

  /**
   * Broker Subaccount Withdrawal
   *
   * Broker sub-account withdrawal API has restrictions and currently supports only the following currencies:
   * BTC, ETH, USDT, USDC, TRX, XRP, LTC, SOL, BNB, FTM, DOGE, ADA, SHIB, UNI, SEI, SUI, POL, FIL, LINK, TON, ARB, OP, DOT, AVAX
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  brokerSubWithdrawal(
    params: BrokerSubWithdrawalRequestV3,
  ): Promise<APIResponse<BrokerSubWithdrawalResponseV3>> {
    return this.postPrivate('/api/v3/broker/sub-withdrawal', params);
  }

  /**
   * Get Broker Subaccount Deposit Address
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  getBrokerSubDepositAddress(
    params: GetBrokerSubDepositAddressRequestV3,
  ): Promise<APIResponse<BrokerSubDepositAddressV3>> {
    return this.postPrivate('/api/v3/broker/sub-deposit-address', params);
  }

  /**
   * Get All Broker Subaccount Deposit Withdrawal
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  getBrokerAllSubDepositWithdrawal(
    params?: GetBrokerAllSubDepositWithdrawalRequestV3,
  ): Promise<APIResponse<GetBrokerAllSubDepositWithdrawalResponseV3>> {
    return this.getPrivate('/api/v3/broker/all-sub-deposit-withdrawal', params);
  }

  /**
   * Get Broker Commission
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  getBrokerCommission(
    params?: GetBrokerCommissionRequestV3,
  ): Promise<APIResponse<BrokerCommissionRecordV3[]>> {
    return this.getPrivate('/api/v3/broker/commission', params);
  }

  /**
   * Create Broker Sub-Account API Key
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  createBrokerSubApiKey(
    params: CreateBrokerSubApiKeyRequestV3,
  ): Promise<APIResponse<CreateBrokerSubApiKeyResponseV3>> {
    return this.postPrivate('/api/v3/broker/create-sub-apikey', params);
  }

  /**
   * Modify Broker Sub-Account API Key
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  modifyBrokerSubApiKey(
    params: ModifyBrokerSubApiKeyRequestV3,
  ): Promise<APIResponse<ModifyBrokerSubApiKeyResponseV3>> {
    return this.postPrivate('/api/v3/broker/modify-sub-apikey', params);
  }

  /**
   * Delete Broker Subaccount Apikey
   *
   * This endpoint has no response parameters.
   * It returns the deletion result synchronously.
   * Determine whether the deletion succeeded or failed (and the failure reason) based on the returned code and msg.
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  deleteBrokerSubApiKey(
    params: DeleteBrokerSubApiKeyRequestV3,
  ): Promise<APIResponse<null>> {
    return this.postPrivate('/api/v3/broker/delete-sub-apikey', params);
  }

  /**
   * Get Broker Sub-Account API Key
   *
   * Rate limit: 20/sec/UID
   * Only the master account with a user type of ND Broker can call this API endpoint.
   */
  getBrokerSubApiKey(
    params: GetBrokerSubApiKeyRequestV3,
  ): Promise<APIResponse<GetBrokerSubApiKeyResponseV3>> {
    return this.getPrivate('/api/v3/broker/query-sub-apikey', params);
  }

  /**
   *
   * =====P2P Merchant (UTA)=====
   *
   */

  getP2pAdList(
    params: GetP2pAdListRequestV3,
  ): Promise<APIResponse<P2pPublicAdListItemV3[]>> {
    return this.getPrivate('/api/v3/p2p/ad-list', params);
  }

  getP2pExchangeRate(
    params: GetP2pExchangeRateRequestV3,
  ): Promise<APIResponse<P2pExchangeRateV3>> {
    return this.getPrivate('/api/v3/p2p/exchange-rate', params);
  }

  simulateP2pFee(
    params: P2pFeeSimulateRequestV3,
  ): Promise<APIResponse<P2pFeeSimulateV3>> {
    return this.postPrivate('/api/v3/p2p/fee-simulate', params);
  }

  getP2pAdLimit(
    params: GetP2pAdLimitRequestV3,
  ): Promise<APIResponse<P2pAdLimitV3>> {
    return this.getPrivate('/api/v3/p2p/ad-limit', params);
  }

  createP2pAd(
    params: CreateP2pAdRequestV3,
  ): Promise<APIResponse<P2pCreateAdResponseV3>> {
    return this.postPrivate('/api/v3/p2p/ad-create', params);
  }

  updateP2pAd(params: UpdateP2pAdRequestV3): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/p2p/ad-update', params);
  }

  operateP2pAd(params: OperateP2pAdRequestV3): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/p2p/ad-operate', params);
  }

  getP2pAdInfo(
    params: GetP2pAdInfoRequestV3,
  ): Promise<APIResponse<P2pAdInfoV3>> {
    return this.getPrivate('/api/v3/p2p/ad-info', params);
  }

  getP2pMyAds(
    params?: GetP2pMyAdsRequestV3,
  ): Promise<APIResponse<P2pCursorListV3<P2pMyAdListItemV3>>> {
    return this.getPrivate('/api/v3/p2p/my-ads', params);
  }

  getP2pPendingOrders(
    params?: GetP2pPendingOrdersRequestV3,
  ): Promise<APIResponse<P2pCursorListV3<P2pOrderListItemV3>>> {
    return this.getPrivate('/api/v3/p2p/pending-orders', params);
  }

  getP2pAllOrders(
    params?: GetP2pAllOrdersRequestV3,
  ): Promise<APIResponse<P2pCursorListV3<P2pOrderListItemV3>>> {
    return this.getPrivate('/api/v3/p2p/all-orders', params);
  }

  getP2pOrderInfo(
    params: GetP2pOrderInfoRequestV3,
  ): Promise<APIResponse<P2pOrderInfoV3>> {
    return this.getPrivate('/api/v3/p2p/order-info', params);
  }

  confirmP2pOrderPayment(
    params: P2pOrderActionRequestV3,
  ): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/p2p/order-pay', params);
  }

  releaseP2pOrderAsset(
    params: P2pOrderActionRequestV3,
  ): Promise<APIResponse<string>> {
    return this.postPrivate('/api/v3/p2p/order-release', params);
  }

  getP2pUserInfo(): Promise<APIResponse<P2pUserInfoV3>> {
    return this.getPrivate('/api/v3/p2p/user-info');
  }

  getP2pCurrencies(): Promise<APIResponse<P2pCurrenciesV3>> {
    return this.getPrivate('/api/v3/p2p/currencies');
  }

  getP2pPayMethods(): Promise<APIResponse<P2pPayMethodV3[]>> {
    return this.getPrivate('/api/v3/p2p/pay-method');
  }

  getP2pBalance(
    params: GetP2pBalanceRequestV3,
  ): Promise<APIResponse<P2pBalanceV3>> {
    return this.getPrivate('/api/v3/p2p/balance', params);
  }

  /**
   *
   * =====Earn | On-Chain Elite (UTA)=====
   *
   */

  getEarnEliteProducts(): Promise<APIResponse<EarnEliteProductV3[]>> {
    return this.getPrivate('/api/v3/earn/elite-product');
  }

  getEarnEliteAssets(): Promise<APIResponse<EarnEliteAssetsV3>> {
    return this.getPrivate('/api/v3/earn/elite-assets');
  }

  getEarnEliteRecords(
    params: GetEarnEliteRecordsRequestV3,
  ): Promise<APIResponse<EarnEliteRecordsV3>> {
    return this.getPrivate('/api/v3/earn/elite-records', params);
  }

  getEarnEliteSubscribeInfo(
    params: GetEarnEliteSubscribeInfoRequestV3,
  ): Promise<APIResponse<EarnEliteSubscribeInfoV3>> {
    return this.getPrivate('/api/v3/earn/elite-subscribe-info', params);
  }

  subscribeEarnElite(
    params: EarnEliteSubscribeRequestV3,
  ): Promise<APIResponse<EarnEliteSubscribeResultV3>> {
    return this.postPrivate('/api/v3/earn/elite-subscribe', params);
  }

  getEarnEliteSubscribeResult(
    params: GetEarnEliteSubscribeResultRequestV3,
  ): Promise<APIResponse<EarnEliteSubscribeStatusV3>> {
    return this.getPrivate('/api/v3/earn/elite-subscribe-result', params);
  }

  getEarnEliteRedeemInfo(
    params: GetEarnEliteRedeemInfoRequestV3,
  ): Promise<APIResponse<EarnEliteRedeemInfoV3>> {
    return this.getPrivate('/api/v3/earn/elite-redeem-info', params);
  }

  redeemEarnElite(
    params: RedeemEarnEliteRequestV3,
  ): Promise<APIResponse<RedeemEarnEliteResultV3>> {
    return this.postPrivate('/api/v3/earn/elite-redeem', params);
  }
}
