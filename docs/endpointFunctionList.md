
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bitget-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/bitget-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/bitget-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client-v2](#rest-client-v2ts)
- [rest-client-v3](#rest-client-v3ts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# rest-client-v2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v2.ts](/src/rest-client-v2.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getAnnouncements()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L508) |  | GET | `/api/v2/public/annoucements` |
| [getServerTime()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L520) |  | GET | `/api/v2/public/time` |
| [getTradeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L528) | :closed_lock_with_key:  | GET | `/api/v2/common/trade-rate` |
| [getAllTradeRates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L537) | :closed_lock_with_key:  | GET | `/api/v2/common/all-trade-rate` |
| [getSpotTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L555) | :closed_lock_with_key:  | GET | `/api/v2/tax/spot-record` |
| [getFuturesTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L561) | :closed_lock_with_key:  | GET | `/api/v2/tax/future-record` |
| [getMarginTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L567) | :closed_lock_with_key:  | GET | `/api/v2/tax/margin-record` |
| [getP2PTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L573) | :closed_lock_with_key:  | GET | `/api/v2/tax/p2p-record` |
| [getP2PMerchantList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L585) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantList` |
| [getP2PMerchantInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L594) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantInfo` |
| [getP2PMerchantOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L598) | :closed_lock_with_key:  | GET | `/api/v2/p2p/orderList` |
| [getP2PMerchantAdvertisementList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L607) | :closed_lock_with_key:  | GET | `/api/v2/p2p/advList` |
| [getSpotWhaleNetFlowData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L624) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/whale-net-flow` |
| [getFuturesActiveTakerBuySellVolumeData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L630) |  | GET | `/api/v2/mix/market/taker-buy-sell` |
| [getFuturesActiveLongShortPositionData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L637) |  | GET | `/api/v2/mix/market/position-long-short` |
| [getFuturesLongShortRatio()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L644) |  | GET | `/api/v2/mix/market/long-short-ratio` |
| [getMarginLoanGrowthRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L652) |  | GET | `/api/v2/mix/market/loan-growth` |
| [getIsolatedMarginBorrowingRatio()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L660) |  | GET | `/api/v2/mix/market/isolated-borrow-rate` |
| [getFuturesActiveBuySellVolumeData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L667) |  | GET | `/api/v2/mix/market/long-short` |
| [getSpotFundFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L674) |  | GET | `/api/v2/spot/market/fund-flow` |
| [getTradeDataSupportSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L681) |  | GET | `/api/v2/spot/market/support-symbols` |
| [getSpotFundNetFlowData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L690) |  | GET | `/api/v2/spot/market/fund-net-flow` |
| [getFuturesActiveLongShortAccountData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L701) |  | GET | `/api/v2/mix/market/account-long-short` |
| [createVirtualSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L714) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount` |
| [modifyVirtualSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L720) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount` |
| [batchCreateVirtualSubaccountAndAPIKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L728) | :closed_lock_with_key:  | POST | `/api/v2/user/batch-create-subaccount-and-apikey` |
| [getVirtualSubaccounts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L737) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-list` |
| [createVirtualSubaccountAPIKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L750) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount-apikey` |
| [modifyVirtualSubaccountAPIKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L759) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount-apikey` |
| [getVirtualSubaccountAPIKeys()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L768) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-apikey-list` |
| [createAgentSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L781) | :closed_lock_with_key:  | POST | `/api/v2/user/create-agent-subaccount` |
| [getFundingAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L792) | :closed_lock_with_key:  | GET | `/api/v2/account/funding-assets` |
| [getBotAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L798) | :closed_lock_with_key:  | GET | `/api/v2/account/bot-assets` |
| [getBalances()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L805) | :closed_lock_with_key:  | GET | `/api/v2/account/all-account-balance` |
| [getConvertCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L822) | :closed_lock_with_key:  | GET | `/api/v2/convert/currencies` |
| [getConvertQuotedPrice()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L826) | :closed_lock_with_key:  | GET | `/api/v2/convert/quoted-price` |
| [convert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L832) | :closed_lock_with_key:  | POST | `/api/v2/convert/trade` |
| [getConvertHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L838) | :closed_lock_with_key:  | GET | `/api/v2/convert/convert-record` |
| [getConvertBGBCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L853) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-coin-list` |
| [convertBGB()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L861) | :closed_lock_with_key:  | POST | `/api/v2/convert/bgb-convert` |
| [getConvertBGBHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L867) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-records` |
| [getSpotCoinInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L887) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/coins` |
| [getSpotSymbolInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L893) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/symbols` |
| [getSpotVIPFeeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L899) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/vip-fee-rate` |
| [getSpotTicker()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L903) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/tickers` |
| [getSpotMergeDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L909) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/merge-depth` |
| [getSpotOrderBookDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L917) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/orderbook` |
| [getSpotCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L925) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/candles` |
| [getSpotHistoricCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L931) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/history-candles` |
| [getSpotRecentTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L937) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills` |
| [getSpotHistoricTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L944) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills-history` |
| [getSpotCallAuction()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L950) |  | GET | `/api/v2/spot/market/auction` |
| [spotSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L962) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-order` |
| [spotCancelandSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L971) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-replace-order` |
| [spotBatchCancelandSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L977) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-replace-order` |
| [spotCancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L986) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-order` |
| [spotBatchSubmitOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L995) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-orders` |
| [spotBatchCancelOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1001) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-order` |
| [spotCancelSymbolOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1007) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-symbol-order` |
| [getSpotOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1015) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/orderInfo` |
| [getSpotOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1021) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/unfilled-orders` |
| [getSpotHistoricOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1027) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-orders` |
| [getSpotFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1033) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/fills` |
| [spotSubmitPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1045) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-plan-order` |
| [spotModifyPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1054) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/modify-plan-order` |
| [spotCancelPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1063) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-plan-order` |
| [getSpotCurrentPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1074) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/current-plan-order` |
| [getSpotPlanSubOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1084) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/plan-sub-order` |
| [getSpotHistoricPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1090) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-plan-order` |
| [spotCancelPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1100) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-plan-order` |
| [getSpotAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1115) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/info` |
| [getSpotAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1119) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/assets` |
| [getSpotSubAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1126) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/subaccount-assets` |
| [spotModifyDepositAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1130) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/modify-deposit-account` |
| [getSpotAccountBills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1140) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/bills` |
| [spotTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1146) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/transfer` |
| [getSpotTransferableCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1155) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/transfer-coin-info` |
| [spotSubTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1162) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/subaccount-transfer` |
| [spotWithdraw()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1171) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/withdrawal` |
| [getSpotMainSubTransferRecord()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1180) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/sub-main-trans-record` |
| [getSpotTransferHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1189) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/transferRecords` |
| [spotSwitchBGBDeduct()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1195) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/switch-deduct` |
| [getSpotDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1201) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-address` |
| [getSpotSubDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1209) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-address` |
| [getSpotBGBDeductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1221) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/deduct-info` |
| [spotCancelWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1229) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/cancel-withdrawal` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1235) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-records` |
| [getSpotWithdrawalHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1244) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/withdrawal-records` |
| [getSpotDepositHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1250) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-records` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1265) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/upgrade` |
| [getUnifiedAccountSwitchStatus()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1275) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/upgrade-status` |
| [getFuturesVIPFeeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1297) |  | GET | `/api/v2/mix/market/vip-fee-rate` |
| [getFuturesInterestRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1301) |  | GET | `/api/v2/mix/market/union-interest-rate-history` |
| [getFuturesInterestExchangeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1310) |  | GET | `/api/v2/mix/market/exchange-rate` |
| [getFuturesDiscountRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1321) |  | GET | `/api/v2/mix/market/discount-rate` |
| [getFuturesMergeDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1325) |  | GET | `/api/v2/mix/market/merge-depth` |
| [getFuturesTicker()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1331) |  | GET | `/api/v2/mix/market/ticker` |
| [getFuturesAllTickers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1338) |  | GET | `/api/v2/mix/market/tickers` |
| [getFuturesRecentTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1344) |  | GET | `/api/v2/mix/market/fills` |
| [getFuturesHistoricTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1350) |  | GET | `/api/v2/mix/market/fills-history` |
| [getFuturesCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1356) |  | GET | `/api/v2/mix/market/candles` |
| [getFuturesHistoricCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1362) |  | GET | `/api/v2/mix/market/history-candles` |
| [getFuturesHistoricIndexPriceCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1368) |  | GET | `/api/v2/mix/market/history-index-candles` |
| [getFuturesHistoricMarkPriceCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1374) |  | GET | `/api/v2/mix/market/history-mark-candles` |
| [getFuturesOpenInterest()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1380) |  | GET | `/api/v2/mix/market/open-interest` |
| [getFuturesNextFundingTime()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1392) |  | GET | `/api/v2/mix/market/funding-time` |
| [getFuturesSymbolPrice()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1399) |  | GET | `/api/v2/mix/market/symbol-price` |
| [getFuturesHistoricFundingRates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1406) |  | GET | `/api/v2/mix/market/history-fund-rate` |
| [getFuturesCurrentFundingRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1415) |  | GET | `/api/v2/mix/market/current-fund-rate` |
| [getFuturesContractConfig()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1433) |  | GET | `/api/v2/mix/market/contracts` |
| [getFuturesOiLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1440) |  | GET | `/api/v2/mix/market/oi-limit` |
| [getFuturesAccountAsset()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1458) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/account` |
| [getFuturesAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1464) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/accounts` |
| [getFuturesSubAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1470) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/sub-account-assets` |
| [getFuturesInterestHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1483) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/interest-history` |
| [getFuturesOpenCount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1489) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/open-count` |
| [setFuturesPositionAutoMargin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1497) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-auto-margin` |
| [setFuturesLeverage()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1503) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-leverage` |
| [setFuturesPositionMargin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1509) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin` |
| [setFuturesAssetMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1515) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-asset-mode` |
| [setFuturesMarginMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1522) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin-mode` |
| [setFuturesPositionMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1528) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-position-mode` |
| [getFuturesAccountBills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1539) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/bill` |
| [getUnionTransferLimits()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1554) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/transfer-limits` |
| [getUnionConfig()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1566) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/union-config` |
| [getSwitchUnionUsdt()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1576) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/switch-union-usdt` |
| [unionConvert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1586) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/union-convert` |
| [getFuturesMaxOpenableQuantity()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1598) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/max-open` |
| [getFuturesLiquidationPrice()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1610) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/liq-price` |
| [getFuturesIsolatedSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1622) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/isolated-symbols` |
| [getFuturesPositionTier()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1634) |  | GET | `/api/v2/mix/market/query-position-lever` |
| [getFuturesPosition()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1641) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/single-position` |
| [getFuturesPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1649) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/all-position` |
| [getFuturesHistoricPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1656) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/history-position` |
| [getFuturesPositionAdlRank()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1667) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/adlRank` |
| [futuresSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1679) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-order` |
| [futuresSubmitReversal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1688) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/click-backhand` |
| [futuresBatchSubmitOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1697) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-place-order` |
| [futuresModifyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1703) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-order` |
| [futuresCancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1712) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-order` |
| [futuresBatchCancelOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1721) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-cancel-orders` |
| [futuresFlashClosePositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1727) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/close-positions` |
| [getFuturesOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1733) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/detail` |
| [getFuturesFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1739) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fills` |
| [getFuturesHistoricOrderFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1748) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fill-history` |
| [getFuturesOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1759) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-pending` |
| [getFuturesHistoricOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1772) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-history` |
| [futuresCancelAllOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1781) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-all-orders` |
| [getFuturesTriggerSubOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1793) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/plan-sub-order` |
| [futuresSubmitTPSLOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1801) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-tpsl-order` |
| [futuresSubmitPositionTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1810) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-pos-tpsl` |
| [futuresSubmitPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1822) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-plan-order` |
| [futuresModifyTPSLPOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1831) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-tpsl-order` |
| [futuresModifyPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1840) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-plan-order` |
| [getFuturesPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1849) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-pending` |
| [futuresCancelPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1862) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-plan-order` |
| [getFuturesHistoricPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1868) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-history` |
| [modifySubaccountEmail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1893) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount-email` |
| [getBrokerInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1903) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/info` |
| [createSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1913) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/create-subaccount` |
| [getSubaccounts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1920) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-list` |
| [modifySubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1930) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount` |
| [getSubaccountEmail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1936) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-email` |
| [getSubaccountSpotAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1942) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-spot-assets` |
| [getSubaccountFuturesAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1957) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-future-assets` |
| [createSubaccountDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1971) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-address` |
| [subaccountWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1982) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-withdrawal` |
| [subaccountSetAutoTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1994) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/set-subaccount-autotransfer` |
| [subaccountDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2010) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-deposit` |
| [subaccountWithdrawalRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2021) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-withdrawal` |
| [createSubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2036) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/create-subaccount-apikey` |
| [getSubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2045) | :closed_lock_with_key:  | GET | `/api/v2/broker/manage/subaccount-apikey-list` |
| [modifySubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2054) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/modify-subaccount-apikey` |
| [deleteSubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2063) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/delete-subaccount-apikey` |
| [getAllSubDepositWithdrawalRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2079) | :closed_lock_with_key:  | GET | `/api/v2/broker/all-sub-deposit-withdrawal` |
| [getBrokerSubaccounts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2096) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccounts` |
| [getBrokerCommissions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2108) | :closed_lock_with_key:  | GET | `/api/v2/broker/commissions` |
| [getBrokerTradeVolume()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2120) | :closed_lock_with_key:  | GET | `/api/v2/broker/trade-volume` |
| [getBrokerTotalCommission()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2140) | :closed_lock_with_key:  | GET | `/api/v2/broker/total-commission` |
| [getBrokerOrderCommission()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2162) | :closed_lock_with_key:  | GET | `/api/v2/broker/order-commission` |
| [getBrokerRebateInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2175) | :closed_lock_with_key:  | GET | `/api/v2/broker/rebate-info` |
| [getAgentCustomerCommissions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2187) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-commissions` |
| [getAgentSubCustomerList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2196) | :closed_lock_with_key:  | GET | `/api/v2/broker/sub-customer-list` |
| [getSubAffiliateInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2202) | :closed_lock_with_key:  | GET | `/api/v2/broker/sub-affiliate-info` |
| [getAgentCustomerTradeVolume()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2208) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-trade-volume` |
| [getAgentCustomerList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2217) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-list` |
| [getAgentCustomerKycResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2223) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-kyc-result` |
| [getAgentCustomerDeposits()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2229) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-deposit` |
| [getAgentCustomerAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2235) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-asset` |
| [getAgentCommissionDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2241) | :closed_lock_with_key:  | GET | `/api/v2/broker/agent-commission` |
| [getMarginCurrencies()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2261) |  | GET | `/api/v2/margin/currencies` |
| [getMarginBorrowHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2271) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/borrow-history` |
| [getMarginRepayHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2288) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/repay-history` |
| [getMarginInterestHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2305) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-history` |
| [getMarginLiquidationHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2322) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-history` |
| [getMarginFinancialHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2339) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/financial-records` |
| [getMarginAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2362) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/assets` |
| [marginBorrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2373) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/borrow` |
| [marginRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2396) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/repay` |
| [getMarginRiskRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2421) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/risk-rate` |
| [getMarginMaxBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2433) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-borrowable-amount` |
| [getMarginMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2446) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-transfer-out-amount` |
| [getMarginInterestRateAndMaxBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2461) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-rate-and-limit` |
| [getMarginTierConfiguration()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2477) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/tier-data` |
| [marginFlashRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2489) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/flash-repay` |
| [getMarginFlashRepayResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2507) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/query-flash-repay-status` |
| [marginSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2531) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/place-order` |
| [marginBatchSubmitOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2544) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-place-order` |
| [marginCancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2555) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/cancel-order` |
| [marginBatchCancelOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2575) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-cancel-order` |
| [getMarginOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2589) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/open-orders` |
| [getMarginHistoricOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2603) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/history-orders` |
| [getMarginHistoricOrderFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2620) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/fills` |
| [getMarginLiquidationOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2634) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-order` |
| [getFuturesTraderCurrentOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2666) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-current-track` |
| [getFuturesTraderHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2675) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-history-track` |
| [modifyFuturesTraderOrderTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2684) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-modify-tpsl` |
| [getFuturesTraderOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2693) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-total-detail` |
| [getFuturesTraderProfitHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2699) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-summarys` |
| [getFuturesTraderProfitShareHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2705) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-details` |
| [closeFuturesTraderOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2714) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-close-positions` |
| [getFuturesTraderProfitShare()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2733) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-details` |
| [getFuturesTraderProfitShareGroup()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2749) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profits-group-coin-date` |
| [getFuturesTraderSymbolSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2767) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-symbols` |
| [updateFuturesTraderSymbolSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2776) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-setting-symbols` |
| [updateFuturesTraderGlobalSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2785) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-settings-base` |
| [getFuturesTraderFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2796) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-followers` |
| [removeFuturesTraderFollower()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2805) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-remove-follower` |
| [getFuturesFollowerCurrentOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2822) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-current-orders` |
| [getFuturesFollowerHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2831) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-history-orders` |
| [updateFuturesFollowerTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2840) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/setting-tpsl` |
| [updateFuturesFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2846) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/settings` |
| [getFuturesFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2852) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-settings` |
| [closeFuturesFollowerPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2858) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/close-positions` |
| [getFuturesFollowerTraders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2871) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-traders` |
| [getFuturesFollowerFollowLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2877) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-quantity-limit` |
| [unfollowFuturesTrader()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2895) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/cancel-trader` |
| [getBrokerTraders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2909) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-traders` |
| [getBrokerTradersHistoricalOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2913) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-history-traces` |
| [getBrokerTradersPendingOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2920) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-current-traces` |
| [getSpotTraderProfit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2935) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-summarys` |
| [getSpotTraderHistoryProfit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2939) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-history-details` |
| [getSpotTraderUnrealizedProfit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2948) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-details` |
| [getSpotTraderOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2956) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-total-detail` |
| [modifySpotTraderOrderTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2960) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-modify-tpsl` |
| [getSpotTraderHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2971) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-history-track` |
| [getSpotTraderCurrentOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2980) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-current-track` |
| [sellSpotTrader()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2989) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-close-tracking` |
| [getSpotTraderSymbolSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2999) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-setting-symbols` |
| [removeSpotTraderFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3009) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-remove-follower` |
| [getSpotTraderConfiguration()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3018) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-settings` |
| [getSpotTraderFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3022) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-followers` |
| [cancelSpotFollowerOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3039) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/stop-order` |
| [updateSpotFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3045) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/settings` |
| [updateSpotFollowerTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3054) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/setting-tpsl` |
| [getSpotFollowerTraders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3062) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-traders` |
| [getSpotFollowerCurrentTraderSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3071) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-trader-symbols` |
| [getSpotFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3082) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-settings` |
| [getSpotFollowerHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3088) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-history-orders` |
| [getSpotFollowerOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3097) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-current-orders` |
| [sellSpotFollower()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3106) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/order-close-tracking` |
| [unfollowSpotTrader()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3116) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/cancel-trader` |
| [getEarnSavingsProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3130) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/product` |
| [getEarnSavingsAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3137) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/account` |
| [getEarnSavingsAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3141) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/assets` |
| [getEarnSavingsRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3147) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/records` |
| [getEarnSavingsSubscription()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3153) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-info` |
| [earnSubscribeSavings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3160) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/subscribe` |
| [getEarnSavingsSubscriptionResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3173) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-result` |
| [earnRedeemSavings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3185) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/redeem` |
| [getEarnSavingsRedemptionResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3194) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/redeem-result` |
| [getEarnAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3214) | :closed_lock_with_key:  | GET | `/api/v2/earn/account/assets` |
| [getEarnEliteProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3233) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/product` |
| [getEarnEliteAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3237) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/assets` |
| [getEarnEliteRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3241) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/records` |
| [getEarnEliteSubscribeInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3247) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-info` |
| [subscribeEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3253) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3259) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3265) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/redeem-info` |
| [redeemEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3271) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/redeem` |
| [getSharkfinProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3285) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/product` |
| [getSharkfinAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3293) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/account` |
| [getSharkfinAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3297) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/assets` |
| [getSharkfinRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3303) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/records` |
| [getSharkfinSubscription()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3309) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-info` |
| [subscribeSharkfin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3315) | :closed_lock_with_key:  | POST | `/api/v2/earn/sharkfin/subscribe` |
| [getSharkfinSubscriptionResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3324) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-result` |
| [getLoanCurrencies()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3341) |  | GET | `/api/v2/earn/loan/public/coinInfos` |
| [getLoanEstInterestAndBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3347) |  | GET | `/api/v2/earn/loan/public/hour-interest` |
| [borrowLoan()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3358) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/borrow` |
| [getOngoingLoanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3366) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/ongoing-orders` |
| [repayLoan()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3374) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/repay` |
| [getRepayHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3380) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/repay-history` |
| [updateLoanPledgeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3386) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3396) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/revise-history` |
| [getLoanHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3402) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/borrow-history` |
| [getLoanDebts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3408) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/debts` |
| [getLoanLiquidationRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3412) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/reduces` |
| [getLoanProductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3424) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/product-infos` |
| [getLoanSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3430) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/symbols` |
| [getLoanMarginCoinInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3436) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/ensure-coins-convert` |
| [getLoanRiskUnit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3454) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/risk-unit` |
| [getLoanLTVConvert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3462) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/ltv-convert` |
| [getLoanRepaidHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3474) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/repaid-history` |
| [getLoanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3480) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/loan-order` |

# rest-client-v3.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v3.ts](/src/rest-client-v3.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getServerTime()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L647) |  | GET | `/api/v3/market/time` |
| [getAnnouncements()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L661) |  | GET | `/api/v3/public/annoucements` |
| [getInstruments()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L680) |  | GET | `/api/v3/market/instruments` |
| [getMarketFeeGroup()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L689) |  | GET | `/api/v3/market/fee-group` |
| [getLiquidations()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L698) |  | GET | `/api/v3/market/liquidations` |
| [getRpiSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L707) |  | GET | `/api/v3/market/rpi-symbols` |
| [getRpiOrderBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L714) |  | GET | `/api/v3/market/rpi-orderbook` |
| [getCashDividendRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L723) |  | GET | `/api/v3/market/cash-dividend-records` |
| [getSplitRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L729) |  | GET | `/api/v3/market/split-records` |
| [getSpotWhaleFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L738) |  | GET | `/api/v3/market/spot-whale-flow` |
| [getSpotFundFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L747) |  | GET | `/api/v3/market/spot-fund-flow` |
| [getSpotNetFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L756) |  | GET | `/api/v3/market/spot-net-flow` |
| [getMarginLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L765) |  | GET | `/api/v3/market/margin-long-short` |
| [getMarginLoanGrowth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L774) |  | GET | `/api/v3/market/margin-loan-growth` |
| [getMarginIsolatedBorrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L783) |  | GET | `/api/v3/market/margin-isolated-borrow` |
| [getFuturesActiveBuySell()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L792) |  | GET | `/api/v3/market/futures-active-buy-sell` |
| [getFuturesLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L801) |  | GET | `/api/v3/market/futures-long-short` |
| [getFuturesPositionLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L810) |  | GET | `/api/v3/market/futures-position-long-short` |
| [getFuturesAccountLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L819) |  | GET | `/api/v3/market/futures-account-long-short` |
| [getMarketScoreWeights()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L828) |  | GET | `/api/v3/market/score-weights` |
| [getTickers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L837) |  | GET | `/api/v3/market/tickers` |
| [getOrderBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L847) |  | GET | `/api/v3/market/orderbook` |
| [getFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L856) |  | GET | `/api/v3/market/fills` |
| [getProofOfReserves()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L865) |  | GET | `/api/v3/market/proof-of-reserves` |
| [getOpenInterest()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L872) |  | GET | `/api/v3/market/open-interest` |
| [getOpenInterestHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L882) |  | GET | `/api/v3/market/open-interest-history` |
| [getCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L893) |  | GET | `/api/v3/market/coins` |
| [getCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L901) |  | GET | `/api/v3/market/candles` |
| [getHistoryCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L910) |  | GET | `/api/v3/market/history-candles` |
| [getCurrentFundingRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L919) |  | GET | `/api/v3/market/current-fund-rate` |
| [getHistoryFundingRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L928) |  | GET | `/api/v3/market/history-fund-rate` |
| [getRiskReserve()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L937) |  | GET | `/api/v3/market/risk-reserve` |
| [getRiskReserveHour()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L946) |  | GET | `/api/v3/market/risk-reserve-hour` |
| [getRiskReserveAll()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L955) |  | GET | `/api/v3/market/risk-reserve-all` |
| [getDiscountRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L964) |  | GET | `/api/v3/market/discount-rate` |
| [getInterestRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L973) |  | GET | `/api/v3/market/interest-rate-history` |
| [getMarginLoans()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L982) |  | GET | `/api/v3/market/margin-loans` |
| [getMarginLoansAll()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L992) |  | GET | `/api/v3/market/margin-loans-all` |
| [getPositionTier()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1001) |  | GET | `/api/v3/market/position-tier` |
| [getContractsOi()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1010) |  | GET | `/api/v3/market/oi-limit` |
| [getIndexComponents()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1019) |  | GET | `/api/v3/market/index-components` |
| [getRealityOrderBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1030) | :closed_lock_with_key:  | GET | `/api/v3/account/reality-orderbook` |
| [getRealityOrderBookSegmented()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1043) | :closed_lock_with_key:  | GET | `/api/v3/account/reality-orderbook-segmented` |
| [getRealityFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1055) | :closed_lock_with_key:  | GET | `/api/v3/account/reality-fills` |
| [getRealityCompanyOverview()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1061) |  | GET | `/api/v3/reality/market/company-overview` |
| [getRealityValuationIndicators()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1067) |  | GET | `/api/v3/reality/market/valuation-indicators` |
| [getRealityEarningsForecast()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1073) |  | GET | `/api/v3/reality/market/earnings-forecast` |
| [getRealitySuspensionResumptionInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1079) |  | GET | `/api/v3/reality/market/suspension-resumption-info` |
| [getRealityDividends()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1088) |  | GET | `/api/v3/reality/market/dividends` |
| [getRealityShareCapitalChange()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1094) |  | GET | `/api/v3/reality/market/share-capital-change` |
| [getRealityInnerTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1100) |  | GET | `/api/v3/reality/market/inner-trades` |
| [getRealityExecutiveShareholdings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1106) |  | GET | `/api/v3/reality/market/executive-shareholdings` |
| [getRealityShareholdDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1114) |  | GET | `/api/v3/reality/market/sharehold-detail` |
| [getRealityStockInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1120) |  | GET | `/api/v3/reality/market/stock-info` |
| [getRealityMarketStates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1126) |  | GET | `/api/v3/reality/market/states` |
| [getRealityMarketCalendar()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1130) |  | GET | `/api/v3/reality/market/calendar` |
| [getCopyFuturesTradingPairs()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1145) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/trading-pairs` |
| [getCopyFuturesPositionSummary()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1156) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/position-summary` |
| [getCopyFuturesMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1166) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/max-transferable` |
| [getCopyFuturesCopyMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1177) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/copy-max-transferable` |
| [copyFuturesTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1190) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/transfer` |
| [getCopyFuturesTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1200) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/transfer-record` |
| [getCopyFuturesCurrentFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1206) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/current-follower` |
| [getCopyFuturesHistoryFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1212) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/history-follower` |
| [getCopyFuturesProfitSummary()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1218) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/profit-summary` |
| [getCopyFuturesProfitDetails()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1224) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/profit-details` |
| [getCopyFuturesPortfolioOverview()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1230) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/portfolio-overview` |
| [createCopyFutures()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1236) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/follower-settings` |
| [modifyCopyFuturesFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1242) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/modify-follower-settings` |
| [unfollowCopyFutures()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1251) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/unfollow` |
| [getCopyFuturesCopySettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1257) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/copy-settings` |
| [copyFuturesFollowerTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1263) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/copy-transfer` |
| [getCopyFuturesFollowerTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1269) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/copy-transfer-record` |
| [getCopyFuturesCurrentCopy()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1275) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/current-copy` |
| [getCopyFuturesCopyProfitDetails()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1281) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/copy-profit-details` |
| [closeCopyFuturesPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1287) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/close-positions` |
| [closeAllCopyFuturesPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1293) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/close-all` |
| [getCopyFuturesCurrentPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1299) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/current-positions` |
| [placeCopyFuturesTpSl()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1305) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/place-tpsl` |
| [modifyCopyFuturesTpSl()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1311) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/modify-tpsl` |
| [cancelCopyFuturesTpSl()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1317) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/cancel-tpsl` |
| [getCopyFuturesCurrentTpSlOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1323) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/current-tpsl-orders` |
| [getCopyFuturesTpSlOrderHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1329) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/tpsl-order-history` |
| [getStockPlusOptionQuote()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1341) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-quote` |
| [getStockPlusOptionChainInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1347) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-chain-info` |
| [getStockPlusOptionExpiryDate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1356) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-expiry-date` |
| [getStockPlusOptionVolume()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1365) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-volume` |
| [getStockPlusStaticInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1371) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/static` |
| [getStockPlusQuote()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1377) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/quote` |
| [getStockPlusTradeDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1383) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/trade` |
| [getStockPlusIntraday()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1389) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/intraday` |
| [getStockPlusHistoryCandlestick()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1395) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/history-candlestick` |
| [getStockPlusCandlestick()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1404) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/candlestick` |
| [getStockPlusDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1410) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/depth` |
| [placeStockPlusOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1416) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/trade/place-order` |
| [cancelStockPlusOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1422) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/trade/cancel-order` |
| [modifyStockPlusOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1428) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/trade/modify-order` |
| [getStockPlusTodayOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1434) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/today-orders` |
| [getStockPlusHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1440) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/history-orders` |
| [getStockPlusOrderDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1446) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/order-detail` |
| [getStockPlusMaxPurchase()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1452) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/max-purchase` |
| [getStockPlusTodayExecutions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1458) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/today-executions` |
| [getStockPlusHistoryExecutions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1464) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/history-executions` |
| [getStockPlusAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1473) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/account` |
| [getStockPlusCashFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1479) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/cash-flow` |
| [getStockPlusStockPosition()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1485) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/stock-position` |
| [stockPlusTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1491) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/asset/transfer` |
| [getStockPlusTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1497) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/transfer-records` |
| [getCfdTickers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1509) | :closed_lock_with_key:  | GET | `/api/v3/cfd/market/tickers` |
| [getCfdHistoryCandlestick()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1515) | :closed_lock_with_key:  | GET | `/api/v3/cfd/market/history-candlestick` |
| [placeCfdOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1521) | :closed_lock_with_key:  | POST | `/api/v3/cfd/trade/place-order` |
| [modifyCfdOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1527) | :closed_lock_with_key:  | POST | `/api/v3/cfd/trade/modify-order` |
| [cancelCfdOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1533) | :closed_lock_with_key:  | POST | `/api/v3/cfd/trade/cancel-order` |
| [cancelAllCfdOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1537) | :closed_lock_with_key:  | POST | `/api/v3/cfd/trade/cancel-all` |
| [closeCfdPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1543) | :closed_lock_with_key:  | POST | `/api/v3/cfd/trade/close-positions` |
| [closeAllCfdPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1549) | :closed_lock_with_key:  | POST | `/api/v3/cfd/trade/close-all-positions` |
| [getCfdUnfilledOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1555) | :closed_lock_with_key:  | GET | `/api/v3/cfd/trade/unfilled-order` |
| [getCfdOrderHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1566) | :closed_lock_with_key:  | GET | `/api/v3/cfd/trade/history-order` |
| [getCfdCurrentPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1572) | :closed_lock_with_key:  | GET | `/api/v3/cfd/trade/current-positions` |
| [getCfdFundDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1578) | :closed_lock_with_key:  | GET | `/api/v3/cfd/account/fund-detail` |
| [cfdTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1582) | :closed_lock_with_key:  | POST | `/api/v3/cfd/account/transfer` |
| [getCfdTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1588) | :closed_lock_with_key:  | GET | `/api/v3/cfd/account/transfer-records` |
| [getCfdFinancialRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1594) | :closed_lock_with_key:  | GET | `/api/v3/cfd/account/financial-records` |
| [getCfdInstruments()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1600) | :closed_lock_with_key:  | GET | `/api/v3/cfd/account/instruments` |
| [getBalances()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1615) | :closed_lock_with_key:  | GET | `/api/v3/account/assets` |
| [getFundingAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1622) | :closed_lock_with_key:  | GET | `/api/v3/account/funding-assets` |
| [getAccountInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1632) | :closed_lock_with_key:  | GET | `/api/v3/account/info` |
| [getAccountSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1640) | :closed_lock_with_key:  | GET | `/api/v3/account/settings` |
| [adjustAccountMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1647) | :closed_lock_with_key:  | POST | `/api/v3/account/adjust-account-mode` |
| [getDeltaInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1657) | :closed_lock_with_key:  | GET | `/api/v3/account/delta-info` |
| [setLeverage()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1666) | :closed_lock_with_key:  | POST | `/api/v3/account/set-leverage` |
| [setHoldMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1673) | :closed_lock_with_key:  | POST | `/api/v3/account/set-hold-mode` |
| [getCollateralType()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1682) | :closed_lock_with_key:  | GET | `/api/v3/account/collateral-type` |
| [setCollateralType()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1689) | :closed_lock_with_key:  | POST | `/api/v3/account/set-collateral-type` |
| [getCustomCollateralCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1698) |  | GET | `/api/v3/account/custom-collateral-coins` |
| [preSetLeverage()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1705) | :closed_lock_with_key:  | GET | `/api/v3/account/pre-set-leverage` |
| [setMargin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1714) | :closed_lock_with_key:  | POST | `/api/v3/account/set-margin` |
| [getMaxWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1721) | :closed_lock_with_key:  | GET | `/api/v3/account/max-withdrawal` |
| [getFinancialRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1730) | :closed_lock_with_key:  | GET | `/api/v3/account/financial-records` |
| [getFundingFinancialRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1744) | :closed_lock_with_key:  | GET | `/api/v3/account/funding-financial-records` |
| [getRepayableCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1758) | :closed_lock_with_key:  | GET | `/api/v3/account/repayable-coins` |
| [getPaymentCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1770) | :closed_lock_with_key:  | GET | `/api/v3/account/payment-coins` |
| [submitRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1782) | :closed_lock_with_key:  | POST | `/api/v3/account/repay` |
| [borrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1786) | :closed_lock_with_key:  | POST | `/api/v3/account/borrow` |
| [getMaxBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1790) | :closed_lock_with_key:  | GET | `/api/v3/account/max-borrowable` |
| [setRepayMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1796) | :closed_lock_with_key:  | POST | `/api/v3/account/set-repay-mode` |
| [getConvertRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1805) | :closed_lock_with_key:  | GET | `/api/v3/account/convert-records` |
| [getSmallAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1814) | :closed_lock_with_key:  | GET | `/api/v3/convert/small-assets` |
| [tradeSmallAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1820) | :closed_lock_with_key:  | POST | `/api/v3/convert/small-assets-trade` |
| [getSmallAssetsHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1826) | :closed_lock_with_key:  | GET | `/api/v3/convert/small-assets-history` |
| [setDepositAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1841) | :closed_lock_with_key:  | POST | `/api/v3/account/deposit-account` |
| [switchDeduct()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1850) | :closed_lock_with_key:  | POST | `/api/v3/account/switch-deduct` |
| [getDeductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1857) | :closed_lock_with_key:  | GET | `/api/v3/account/deduct-info` |
| [getFeeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1868) | :closed_lock_with_key:  | GET | `/api/v3/account/fee-rate` |
| [getAllFeeRates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1880) | :closed_lock_with_key:  | GET | `/api/v3/account/all-fee-rate` |
| [getMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1893) | :closed_lock_with_key:  | GET | `/api/v3/account/max-transferable` |
| [getOpenInterestLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1905) | :closed_lock_with_key:  | GET | `/api/v3/account/open-interest-limit` |
| [getEligibleSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1911) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-symbols` |
| [getEligibleMarginTier()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1917) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-margin-tier` |
| [getEligibleLoanInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1923) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-loan-info` |
| [getEligibleDiscountRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1929) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-discount-rate` |
| [downgradeAccountToClassic()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1944) | :closed_lock_with_key:  | POST | `/api/v3/account/switch` |
| [getUnifiedAccountSwitchStatus()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1952) | :closed_lock_with_key:  | GET | `/api/v3/account/switch-status` |
| [getTaxRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1968) | :closed_lock_with_key:  | GET | `/api/v3/tax/records` |
| [createSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1983) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub` |
| [createAgentSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1992) | :closed_lock_with_key:  | POST | `/api/v3/user/sub-account/agent-create` |
| [freezeSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2001) | :closed_lock_with_key:  | POST | `/api/v3/user/freeze-sub` |
| [deleteSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2007) | :closed_lock_with_key:  | POST | `/api/v3/user/delete-sub` |
| [getSubUnifiedAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2016) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-unified-assets` |
| [getSubAccountList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2025) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-list` |
| [createSubAccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2038) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub-api` |
| [updateSubAccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2047) | :closed_lock_with_key:  | POST | `/api/v3/user/update-sub-api` |
| [deleteSubAccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2056) | :closed_lock_with_key:  | POST | `/api/v3/user/delete-sub-api` |
| [getSubAccountApiKeys()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2065) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-api-list` |
| [getRateLimitQuota()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2079) | :closed_lock_with_key:  | GET | `/api/v3/user/rate-limit-quota` |
| [setRateLimitQuota()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2090) | :closed_lock_with_key:  | POST | `/api/v3/user/set-rate-limit-quota` |
| [createStpGroup()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2100) | :closed_lock_with_key:  | POST | `/api/v3/account/create-stp-groups` |
| [getStpGroups()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2110) | :closed_lock_with_key:  | GET | `/api/v3/account/stp-groups` |
| [addStpGroupMembers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2120) | :closed_lock_with_key:  | POST | `/api/v3/account/add-groups-members` |
| [removeStpGroupMembers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2132) | :closed_lock_with_key:  | POST | `/api/v3/account/remove-groups-members` |
| [getTransferableCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2147) | :closed_lock_with_key:  | GET | `/api/v3/account/transferable-coins` |
| [submitTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2156) | :closed_lock_with_key:  | POST | `/api/v3/account/transfer` |
| [subAccountTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2165) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-transfer` |
| [getSubTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2177) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-transfer-record` |
| [subMasterTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2189) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-master-transfer` |
| [getDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2207) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2216) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-deposit-address` |
| [getDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2225) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-records` |
| [getSubDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2234) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-deposit-records` |
| [submitWithdraw()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2249) | :closed_lock_with_key:  | POST | `/api/v3/account/withdraw` |
| [getWithdrawRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2258) | :closed_lock_with_key:  | GET | `/api/v3/account/withdrawal-records` |
| [getWithdrawAddressBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2267) | :closed_lock_with_key:  | GET | `/api/v3/account/withdraw-address` |
| [cancelWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2276) | :closed_lock_with_key:  | POST | `/api/v3/account/cancel-withdrawal` |
| [submitNewOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2294) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-order` |
| [modifyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2303) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-order` |
| [placeRealityOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2312) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-reality-order` |
| [cancelRealityOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2321) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-reality-order` |
| [getLoanData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2330) | :closed_lock_with_key:  | GET | `/api/v3/trade/loan-data` |
| [cancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2337) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-order` |
| [placeBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2346) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-batch` |
| [batchModifyOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2355) | :closed_lock_with_key:  | POST | `/api/v3/trade/batch-modify-order` |
| [cancelBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2364) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-batch` |
| [cancelAllOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2373) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-symbol-order` |
| [closeAllPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2382) | :closed_lock_with_key:  | POST | `/api/v3/trade/close-positions` |
| [getOrderInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2391) | :closed_lock_with_key:  | GET | `/api/v3/trade/order-info` |
| [getUnfilledOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2400) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-orders` |
| [getHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2412) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-orders` |
| [movePositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2424) | :closed_lock_with_key:  | POST | `/api/v3/account/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2433) | :closed_lock_with_key:  | GET | `/api/v3/account/move-position-history` |
| [getTradeFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2445) | :closed_lock_with_key:  | GET | `/api/v3/trade/fills` |
| [getCurrentPosition()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2457) | :closed_lock_with_key:  | GET | `/api/v3/position/current-position` |
| [getPositionHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2472) | :closed_lock_with_key:  | GET | `/api/v3/position/history-position` |
| [getMaxOpenAvailable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2486) | :closed_lock_with_key:  | POST | `/api/v3/account/max-open-available` |
| [getPositionAdlRank()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2495) | :closed_lock_with_key:  | GET | `/api/v3/position/adlRank` |
| [countdownCancelAll()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2502) | :closed_lock_with_key:  | POST | `/api/v3/trade/countdown-cancel-all` |
| [getLoanTransfered()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2517) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/transfered` |
| [getLoanSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2526) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/symbols` |
| [getLoanRiskUnit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2535) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/risk-unit` |
| [getLoanRepaidHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2546) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/repaid-history` |
| [getLoanProductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2555) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/product-infos` |
| [getLoanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2564) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/loan-order` |
| [getLoanLTVConvert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2573) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ltv-convert` |
| [getLoanMarginCoinInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2582) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ensure-coins-convert` |
| [bindLoanUid()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2594) | :closed_lock_with_key:  | POST | `/api/v3/ins-loan/bind-uid` |
| [getLoanCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2609) | :closed_lock_with_key:  | GET | `/api/v3/loan/coins` |
| [getLoanInterest()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2618) | :closed_lock_with_key:  | GET | `/api/v3/loan/interest` |
| [loanBorrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2627) | :closed_lock_with_key:  | POST | `/api/v3/loan/borrow` |
| [getLoanBorrowOngoing()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2636) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-ongoing` |
| [getLoanBorrowHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2645) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-history` |
| [loanRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2654) | :closed_lock_with_key:  | POST | `/api/v3/loan/repay` |
| [getLoanRepayHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2663) | :closed_lock_with_key:  | GET | `/api/v3/loan/repay-history` |
| [loanRevisePledge()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2672) | :closed_lock_with_key:  | POST | `/api/v3/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2681) | :closed_lock_with_key:  | GET | `/api/v3/loan/pledge-rate-history` |
| [getLoanDebts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2690) | :closed_lock_with_key:  | GET | `/api/v3/loan/debts` |
| [getLoanReduces()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2697) | :closed_lock_with_key:  | GET | `/api/v3/loan/reduces` |
| [submitStrategyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2712) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-strategy-order` |
| [modifyStrategyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2721) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-strategy-order` |
| [cancelStrategyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2730) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-strategy-order` |
| [getUnfilledStrategyOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2739) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-strategy-orders` |
| [getHistoryStrategyOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2748) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-strategy-orders` |
| [getStrategySubOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2758) | :closed_lock_with_key:  | GET | `/api/v3/trade/strategy-sub-orders` |
| [validateGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2773) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/validate` |
| [createGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2779) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/create-bot` |
| [modifyGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2785) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/modify-bot` |
| [modifyGridInterval()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2791) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/modify-grid-interval` |
| [addGridInvestment()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2797) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/add-investment` |
| [closeGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2803) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/close-bot` |
| [getGridBotDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2809) | :closed_lock_with_key:  | GET | `/api/v3/trade/grid/bot-detail` |
| [getGridBotOrderDetails()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2815) | :closed_lock_with_key:  | GET | `/api/v3/trade/grid/list-details` |
| [validateNeutralGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2821) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/validate-neutral` |
| [createNeutralGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2827) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/create-neutral-bot` |
| [modifyNeutralGridBot()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2833) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/modify-neutral-bot` |
| [modifyNeutralGridInterval()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2839) | :closed_lock_with_key:  | POST | `/api/v3/trade/grid/modify-neutral-grid-interval` |
| [getNeutralGridBotDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2848) | :closed_lock_with_key:  | GET | `/api/v3/trade/grid/neutral-bot-detail` |
| [getNeutralGridBotOrderDetails()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2854) | :closed_lock_with_key:  | GET | `/api/v3/trade/grid/neutral-list-details` |
| [createBrokerSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2872) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub` |
| [getBrokerSubAccountList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2884) | :closed_lock_with_key:  | GET | `/api/v3/broker/sub-list` |
| [modifyBrokerSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2896) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub` |
| [brokerSubWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2911) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-withdrawal` |
| [getBrokerSubDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2923) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-deposit-address` |
| [getBrokerAllSubDepositWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2935) | :closed_lock_with_key:  | GET | `/api/v3/broker/all-sub-deposit-withdrawal` |
| [getBrokerCommission()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2947) | :closed_lock_with_key:  | GET | `/api/v3/broker/commission` |
| [createBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2959) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub-apikey` |
| [modifyBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2971) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub-apikey` |
| [deleteBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2987) | :closed_lock_with_key:  | POST | `/api/v3/broker/delete-sub-apikey` |
| [getBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2999) | :closed_lock_with_key:  | GET | `/api/v3/broker/query-sub-apikey` |
| [getP2pAdList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3011) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-list` |
| [getP2pExchangeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3017) | :closed_lock_with_key:  | GET | `/api/v3/p2p/exchange-rate` |
| [simulateP2pFee()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3023) | :closed_lock_with_key:  | POST | `/api/v3/p2p/fee-simulate` |
| [getP2pAdLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3029) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-limit` |
| [createP2pAd()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3035) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-create` |
| [updateP2pAd()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3041) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-update` |
| [operateP2pAd()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3045) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-operate` |
| [getP2pAdInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3049) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-info` |
| [getP2pMyAds()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3055) | :closed_lock_with_key:  | GET | `/api/v3/p2p/my-ads` |
| [getP2pPendingOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3061) | :closed_lock_with_key:  | GET | `/api/v3/p2p/pending-orders` |
| [getP2pAllOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3067) | :closed_lock_with_key:  | GET | `/api/v3/p2p/all-orders` |
| [getP2pOrderInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3073) | :closed_lock_with_key:  | GET | `/api/v3/p2p/order-info` |
| [confirmP2pOrderPayment()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3079) | :closed_lock_with_key:  | POST | `/api/v3/p2p/order-pay` |
| [releaseP2pOrderAsset()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3085) | :closed_lock_with_key:  | POST | `/api/v3/p2p/order-release` |
| [getP2pUserInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3091) | :closed_lock_with_key:  | GET | `/api/v3/p2p/user-info` |
| [getP2pCurrencies()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3095) | :closed_lock_with_key:  | GET | `/api/v3/p2p/currencies` |
| [getP2pPayMethods()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3099) | :closed_lock_with_key:  | GET | `/api/v3/p2p/pay-method` |
| [getP2pBalance()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3103) | :closed_lock_with_key:  | GET | `/api/v3/p2p/balance` |
| [getEarnEliteProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3115) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-product` |
| [getEarnEliteAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3119) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-assets` |
| [getEarnEliteRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3123) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-records` |
| [getEarnEliteSubscribeInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3129) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-info` |
| [subscribeEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3135) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3141) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3147) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-redeem-info` |
| [redeemEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3153) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-redeem` |
| [getEarnCashPlusSubscribeInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3170) | :closed_lock_with_key:  | GET | `/api/v3/earn/cashplus/subscribe-info` |
| [subscribeEarnCashPlus()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3179) | :closed_lock_with_key:  | POST | `/api/v3/earn/cashplus/subscribe` |
| [getEarnCashPlusSubscribeResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3188) | :closed_lock_with_key:  | GET | `/api/v3/earn/cashplus/subscribe-result` |
| [getEarnCashPlusRedeemInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3198) | :closed_lock_with_key:  | GET | `/api/v3/earn/cashplus/redeem-info` |
| [redeemEarnCashPlus()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3205) | :closed_lock_with_key:  | POST | `/api/v3/earn/cashplus/redeem` |
| [getEarnCashPlusRedeemResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3214) | :closed_lock_with_key:  | GET | `/api/v3/earn/cashplus/redeem-result` |
| [getEarnCashPlusPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3223) | :closed_lock_with_key:  | GET | `/api/v3/earn/cashplus/positions` |
| [getEarnCashPlusHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L3230) | :closed_lock_with_key:  | GET | `/api/v3/earn/cashplus/history-orders` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bitget API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L87) |  | WS | `place-order` |
| [placeBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L109) |  | WS | `batch-place` |
| [cancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L133) |  | WS | `cancel-order` |
| [cancelBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L152) |  | WS | `batch-cancel` |
| [updateOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L164) |  | WS | `modify-order` |
| [batchUpdateOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L176) |  | WS | `batch-modify` |