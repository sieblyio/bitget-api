
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
| [getAnnouncements()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L506) |  | GET | `/api/v2/public/annoucements` |
| [getServerTime()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L518) |  | GET | `/api/v2/public/time` |
| [getTradeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L526) | :closed_lock_with_key:  | GET | `/api/v2/common/trade-rate` |
| [getAllTradeRates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L535) | :closed_lock_with_key:  | GET | `/api/v2/common/all-trade-rate` |
| [getSpotTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L553) | :closed_lock_with_key:  | GET | `/api/v2/tax/spot-record` |
| [getFuturesTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L559) | :closed_lock_with_key:  | GET | `/api/v2/tax/future-record` |
| [getMarginTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L565) | :closed_lock_with_key:  | GET | `/api/v2/tax/margin-record` |
| [getP2PTransactionRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L571) | :closed_lock_with_key:  | GET | `/api/v2/tax/p2p-record` |
| [getP2PMerchantList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L583) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantList` |
| [getP2PMerchantInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L592) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantInfo` |
| [getP2PMerchantOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L596) | :closed_lock_with_key:  | GET | `/api/v2/p2p/orderList` |
| [getP2PMerchantAdvertisementList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L605) | :closed_lock_with_key:  | GET | `/api/v2/p2p/advList` |
| [getSpotWhaleNetFlowData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L622) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/whale-net-flow` |
| [getFuturesActiveTakerBuySellVolumeData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L628) |  | GET | `/api/v2/mix/market/taker-buy-sell` |
| [getFuturesActiveLongShortPositionData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L635) |  | GET | `/api/v2/mix/market/position-long-short` |
| [getFuturesLongShortRatio()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L642) |  | GET | `/api/v2/mix/market/long-short-ratio` |
| [getMarginLoanGrowthRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L650) |  | GET | `/api/v2/mix/market/loan-growth` |
| [getIsolatedMarginBorrowingRatio()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L658) |  | GET | `/api/v2/mix/market/isolated-borrow-rate` |
| [getFuturesActiveBuySellVolumeData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L665) |  | GET | `/api/v2/mix/market/long-short` |
| [getSpotFundFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L672) |  | GET | `/api/v2/spot/market/fund-flow` |
| [getTradeDataSupportSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L679) |  | GET | `/api/v2/spot/market/support-symbols` |
| [getSpotFundNetFlowData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L688) |  | GET | `/api/v2/spot/market/fund-net-flow` |
| [getFuturesActiveLongShortAccountData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L699) |  | GET | `/api/v2/mix/market/account-long-short` |
| [createVirtualSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L712) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount` |
| [modifyVirtualSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L718) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount` |
| [batchCreateVirtualSubaccountAndAPIKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L726) | :closed_lock_with_key:  | POST | `/api/v2/user/batch-create-subaccount-and-apikey` |
| [getVirtualSubaccounts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L735) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-list` |
| [createVirtualSubaccountAPIKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L748) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount-apikey` |
| [modifyVirtualSubaccountAPIKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L757) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount-apikey` |
| [getVirtualSubaccountAPIKeys()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L766) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-apikey-list` |
| [createAgentSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L779) | :closed_lock_with_key:  | POST | `/api/v2/user/create-agent-subaccount` |
| [getFundingAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L790) | :closed_lock_with_key:  | GET | `/api/v2/account/funding-assets` |
| [getBotAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L796) | :closed_lock_with_key:  | GET | `/api/v2/account/bot-assets` |
| [getBalances()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L803) | :closed_lock_with_key:  | GET | `/api/v2/account/all-account-balance` |
| [getConvertCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L820) | :closed_lock_with_key:  | GET | `/api/v2/convert/currencies` |
| [getConvertQuotedPrice()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L824) | :closed_lock_with_key:  | GET | `/api/v2/convert/quoted-price` |
| [convert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L830) | :closed_lock_with_key:  | POST | `/api/v2/convert/trade` |
| [getConvertHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L836) | :closed_lock_with_key:  | GET | `/api/v2/convert/convert-record` |
| [getConvertBGBCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L851) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-coin-list` |
| [convertBGB()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L859) | :closed_lock_with_key:  | POST | `/api/v2/convert/bgb-convert` |
| [getConvertBGBHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L865) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-records` |
| [getSpotCoinInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L885) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/coins` |
| [getSpotSymbolInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L891) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/symbols` |
| [getSpotVIPFeeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L897) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/vip-fee-rate` |
| [getSpotTicker()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L901) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/tickers` |
| [getSpotMergeDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L907) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/merge-depth` |
| [getSpotOrderBookDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L915) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/orderbook` |
| [getSpotCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L923) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/candles` |
| [getSpotHistoricCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L929) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/history-candles` |
| [getSpotRecentTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L935) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills` |
| [getSpotHistoricTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L942) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills-history` |
| [getSpotCallAuction()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L948) |  | GET | `/api/v2/spot/market/auction` |
| [spotSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L960) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-order` |
| [spotCancelandSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L969) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-replace-order` |
| [spotBatchCancelandSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L975) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-replace-order` |
| [spotCancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L984) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-order` |
| [spotBatchSubmitOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L993) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-orders` |
| [spotBatchCancelOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L999) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-order` |
| [spotCancelSymbolOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1005) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-symbol-order` |
| [getSpotOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1013) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/orderInfo` |
| [getSpotOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1019) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/unfilled-orders` |
| [getSpotHistoricOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1025) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-orders` |
| [getSpotFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1031) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/fills` |
| [spotSubmitPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1043) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-plan-order` |
| [spotModifyPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1052) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/modify-plan-order` |
| [spotCancelPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1061) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-plan-order` |
| [getSpotCurrentPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1072) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/current-plan-order` |
| [getSpotPlanSubOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1082) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/plan-sub-order` |
| [getSpotHistoricPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1088) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-plan-order` |
| [spotCancelPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1098) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-plan-order` |
| [getSpotAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1113) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/info` |
| [getSpotAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1117) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/assets` |
| [getSpotSubAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1124) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/subaccount-assets` |
| [spotModifyDepositAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1128) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/modify-deposit-account` |
| [getSpotAccountBills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1138) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/bills` |
| [spotTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1144) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/transfer` |
| [getSpotTransferableCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1153) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/transfer-coin-info` |
| [spotSubTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1160) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/subaccount-transfer` |
| [spotWithdraw()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1169) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/withdrawal` |
| [getSpotMainSubTransferRecord()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1178) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/sub-main-trans-record` |
| [getSpotTransferHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1187) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/transferRecords` |
| [spotSwitchBGBDeduct()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1193) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/switch-deduct` |
| [getSpotDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1199) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-address` |
| [getSpotSubDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1207) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-address` |
| [getSpotBGBDeductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1219) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/deduct-info` |
| [spotCancelWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1227) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/cancel-withdrawal` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1233) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-records` |
| [getSpotWithdrawalHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1242) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/withdrawal-records` |
| [getSpotDepositHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1248) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-records` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1263) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/upgrade` |
| [getUnifiedAccountSwitchStatus()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1273) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/upgrade-status` |
| [getFuturesVIPFeeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1295) |  | GET | `/api/v2/mix/market/vip-fee-rate` |
| [getFuturesInterestRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1299) |  | GET | `/api/v2/mix/market/union-interest-rate-history` |
| [getFuturesInterestExchangeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1308) |  | GET | `/api/v2/mix/market/exchange-rate` |
| [getFuturesDiscountRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1319) |  | GET | `/api/v2/mix/market/discount-rate` |
| [getFuturesMergeDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1323) |  | GET | `/api/v2/mix/market/merge-depth` |
| [getFuturesTicker()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1329) |  | GET | `/api/v2/mix/market/ticker` |
| [getFuturesAllTickers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1336) |  | GET | `/api/v2/mix/market/tickers` |
| [getFuturesRecentTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1342) |  | GET | `/api/v2/mix/market/fills` |
| [getFuturesHistoricTrades()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1348) |  | GET | `/api/v2/mix/market/fills-history` |
| [getFuturesCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1354) |  | GET | `/api/v2/mix/market/candles` |
| [getFuturesHistoricCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1360) |  | GET | `/api/v2/mix/market/history-candles` |
| [getFuturesHistoricIndexPriceCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1366) |  | GET | `/api/v2/mix/market/history-index-candles` |
| [getFuturesHistoricMarkPriceCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1372) |  | GET | `/api/v2/mix/market/history-mark-candles` |
| [getFuturesOpenInterest()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1378) |  | GET | `/api/v2/mix/market/open-interest` |
| [getFuturesNextFundingTime()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1390) |  | GET | `/api/v2/mix/market/funding-time` |
| [getFuturesSymbolPrice()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1397) |  | GET | `/api/v2/mix/market/symbol-price` |
| [getFuturesHistoricFundingRates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1404) |  | GET | `/api/v2/mix/market/history-fund-rate` |
| [getFuturesCurrentFundingRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1413) |  | GET | `/api/v2/mix/market/current-fund-rate` |
| [getFuturesContractConfig()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1431) |  | GET | `/api/v2/mix/market/contracts` |
| [getFuturesOiLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1438) |  | GET | `/api/v2/mix/market/oi-limit` |
| [getFuturesAccountAsset()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1456) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/account` |
| [getFuturesAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1462) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/accounts` |
| [getFuturesSubAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1468) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/sub-account-assets` |
| [getFuturesInterestHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1481) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/interest-history` |
| [getFuturesOpenCount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1487) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/open-count` |
| [setFuturesPositionAutoMargin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1495) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-auto-margin` |
| [setFuturesLeverage()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1501) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-leverage` |
| [setFuturesPositionMargin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1507) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin` |
| [setFuturesAssetMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1513) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-asset-mode` |
| [setFuturesMarginMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1520) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin-mode` |
| [setFuturesPositionMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1526) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-position-mode` |
| [getFuturesAccountBills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1537) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/bill` |
| [getUnionTransferLimits()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1552) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/transfer-limits` |
| [getUnionConfig()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1564) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/union-config` |
| [getSwitchUnionUsdt()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1574) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/switch-union-usdt` |
| [unionConvert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1584) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/union-convert` |
| [getFuturesMaxOpenableQuantity()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1596) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/max-open` |
| [getFuturesLiquidationPrice()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1608) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/liq-price` |
| [getFuturesIsolatedSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1620) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/isolated-symbols` |
| [getFuturesPositionTier()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1632) |  | GET | `/api/v2/mix/market/query-position-lever` |
| [getFuturesPosition()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1639) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/single-position` |
| [getFuturesPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1647) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/all-position` |
| [getFuturesHistoricPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1654) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/history-position` |
| [getFuturesPositionAdlRank()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1665) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/adlRank` |
| [futuresSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1677) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-order` |
| [futuresSubmitReversal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1686) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/click-backhand` |
| [futuresBatchSubmitOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1695) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-place-order` |
| [futuresModifyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1701) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-order` |
| [futuresCancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1710) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-order` |
| [futuresBatchCancelOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1719) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-cancel-orders` |
| [futuresFlashClosePositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1725) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/close-positions` |
| [getFuturesOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1731) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/detail` |
| [getFuturesFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1737) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fills` |
| [getFuturesHistoricOrderFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1746) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fill-history` |
| [getFuturesOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1757) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-pending` |
| [getFuturesHistoricOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1766) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-history` |
| [futuresCancelAllOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1775) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-all-orders` |
| [getFuturesTriggerSubOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1787) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/plan-sub-order` |
| [futuresSubmitTPSLOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1795) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-tpsl-order` |
| [futuresSubmitPositionTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1804) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-pos-tpsl` |
| [futuresSubmitPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1816) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-plan-order` |
| [futuresModifyTPSLPOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1825) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-tpsl-order` |
| [futuresModifyPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1834) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-plan-order` |
| [getFuturesPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1843) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-pending` |
| [futuresCancelPlanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1852) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-plan-order` |
| [getFuturesHistoricPlanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1858) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-history` |
| [modifySubaccountEmail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1883) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount-email` |
| [getBrokerInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1893) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/info` |
| [createSubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1903) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/create-subaccount` |
| [getSubaccounts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1910) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-list` |
| [modifySubaccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1920) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount` |
| [getSubaccountEmail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1926) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-email` |
| [getSubaccountSpotAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1932) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-spot-assets` |
| [getSubaccountFuturesAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1947) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-future-assets` |
| [createSubaccountDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1961) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-address` |
| [subaccountWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1972) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-withdrawal` |
| [subaccountSetAutoTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L1984) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/set-subaccount-autotransfer` |
| [subaccountDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2000) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-deposit` |
| [subaccountWithdrawalRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2011) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-withdrawal` |
| [createSubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2026) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/create-subaccount-apikey` |
| [getSubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2035) | :closed_lock_with_key:  | GET | `/api/v2/broker/manage/subaccount-apikey-list` |
| [modifySubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2044) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/modify-subaccount-apikey` |
| [deleteSubaccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2053) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/delete-subaccount-apikey` |
| [getAllSubDepositWithdrawalRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2069) | :closed_lock_with_key:  | GET | `/api/v2/broker/all-sub-deposit-withdrawal` |
| [getBrokerSubaccounts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2086) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccounts` |
| [getBrokerCommissions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2098) | :closed_lock_with_key:  | GET | `/api/v2/broker/commissions` |
| [getBrokerTradeVolume()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2110) | :closed_lock_with_key:  | GET | `/api/v2/broker/trade-volume` |
| [getBrokerTotalCommission()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2130) | :closed_lock_with_key:  | GET | `/api/v2/broker/total-commission` |
| [getBrokerOrderCommission()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2152) | :closed_lock_with_key:  | GET | `/api/v2/broker/order-commission` |
| [getBrokerRebateInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2165) | :closed_lock_with_key:  | GET | `/api/v2/broker/rebate-info` |
| [getAgentCustomerCommissions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2177) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-commissions` |
| [getAgentSubCustomerList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2186) | :closed_lock_with_key:  | GET | `/api/v2/broker/sub-customer-list` |
| [getAgentCustomerTradeVolume()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2192) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-trade-volume` |
| [getAgentCustomerList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2201) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-list` |
| [getAgentCustomerKycResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2207) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-kyc-result` |
| [getAgentCustomerDeposits()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2213) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-deposit` |
| [getAgentCustomerAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2219) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-asset` |
| [getAgentCommissionDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2225) | :closed_lock_with_key:  | GET | `/api/v2/broker/agent-commission` |
| [getMarginCurrencies()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2245) |  | GET | `/api/v2/margin/currencies` |
| [getMarginBorrowHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2255) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/borrow-history` |
| [getMarginRepayHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2272) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/repay-history` |
| [getMarginInterestHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2289) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-history` |
| [getMarginLiquidationHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2306) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-history` |
| [getMarginFinancialHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2323) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/financial-records` |
| [getMarginAccountAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2346) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/assets` |
| [marginBorrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2357) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/borrow` |
| [marginRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2380) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/repay` |
| [getMarginRiskRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2405) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/risk-rate` |
| [getMarginMaxBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2417) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-borrowable-amount` |
| [getMarginMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2430) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-transfer-out-amount` |
| [getMarginInterestRateAndMaxBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2445) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-rate-and-limit` |
| [getMarginTierConfiguration()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2461) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/tier-data` |
| [marginFlashRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2473) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/flash-repay` |
| [getMarginFlashRepayResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2491) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/query-flash-repay-status` |
| [marginSubmitOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2515) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/place-order` |
| [marginBatchSubmitOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2528) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-place-order` |
| [marginCancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2539) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/cancel-order` |
| [marginBatchCancelOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2559) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-cancel-order` |
| [getMarginOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2573) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/open-orders` |
| [getMarginHistoricOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2587) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/history-orders` |
| [getMarginHistoricOrderFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2604) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/fills` |
| [getMarginLiquidationOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2618) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-order` |
| [getFuturesTraderCurrentOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2650) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-current-track` |
| [getFuturesTraderHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2659) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-history-track` |
| [modifyFuturesTraderOrderTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2668) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-modify-tpsl` |
| [getFuturesTraderOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2677) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-total-detail` |
| [getFuturesTraderProfitHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2683) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-summarys` |
| [getFuturesTraderProfitShareHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2689) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-details` |
| [closeFuturesTraderOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2698) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-close-positions` |
| [getFuturesTraderProfitShare()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2717) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-details` |
| [getFuturesTraderProfitShareGroup()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2733) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profits-group-coin-date` |
| [getFuturesTraderSymbolSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2751) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-symbols` |
| [updateFuturesTraderSymbolSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2760) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-setting-symbols` |
| [updateFuturesTraderGlobalSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2769) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-settings-base` |
| [getFuturesTraderFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2780) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-followers` |
| [removeFuturesTraderFollower()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2789) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-remove-follower` |
| [getFuturesFollowerCurrentOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2806) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-current-orders` |
| [getFuturesFollowerHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2815) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-history-orders` |
| [updateFuturesFollowerTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2824) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/setting-tpsl` |
| [updateFuturesFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2830) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/settings` |
| [getFuturesFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2836) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-settings` |
| [closeFuturesFollowerPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2842) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/close-positions` |
| [getFuturesFollowerTraders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2855) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-traders` |
| [getFuturesFollowerFollowLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2861) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-quantity-limit` |
| [unfollowFuturesTrader()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2879) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/cancel-trader` |
| [getBrokerTraders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2893) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-traders` |
| [getBrokerTradersHistoricalOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2897) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-history-traces` |
| [getBrokerTradersPendingOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2904) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-current-traces` |
| [getSpotTraderProfit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2919) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-summarys` |
| [getSpotTraderHistoryProfit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2923) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-history-details` |
| [getSpotTraderUnrealizedProfit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2932) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-details` |
| [getSpotTraderOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2940) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-total-detail` |
| [modifySpotTraderOrderTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2944) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-modify-tpsl` |
| [getSpotTraderHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2955) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-history-track` |
| [getSpotTraderCurrentOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2964) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-current-track` |
| [sellSpotTrader()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2973) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-close-tracking` |
| [getSpotTraderSymbolSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2983) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-setting-symbols` |
| [removeSpotTraderFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L2993) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-remove-follower` |
| [getSpotTraderConfiguration()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3002) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-settings` |
| [getSpotTraderFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3006) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-followers` |
| [cancelSpotFollowerOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3023) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/stop-order` |
| [updateSpotFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3029) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/settings` |
| [updateSpotFollowerTPSL()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3038) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/setting-tpsl` |
| [getSpotFollowerTraders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3046) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-traders` |
| [getSpotFollowerCurrentTraderSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3055) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-trader-symbols` |
| [getSpotFollowerSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3066) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-settings` |
| [getSpotFollowerHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3072) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-history-orders` |
| [getSpotFollowerOpenOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3081) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-current-orders` |
| [sellSpotFollower()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3090) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/order-close-tracking` |
| [unfollowSpotTrader()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3100) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/cancel-trader` |
| [getEarnSavingsProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3114) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/product` |
| [getEarnSavingsAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3121) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/account` |
| [getEarnSavingsAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3125) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/assets` |
| [getEarnSavingsRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3131) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/records` |
| [getEarnSavingsSubscription()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3137) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-info` |
| [earnSubscribeSavings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3144) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/subscribe` |
| [getEarnSavingsSubscriptionResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3157) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-result` |
| [earnRedeemSavings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3169) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/redeem` |
| [getEarnSavingsRedemptionResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3178) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/redeem-result` |
| [getEarnAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3198) | :closed_lock_with_key:  | GET | `/api/v2/earn/account/assets` |
| [getEarnEliteProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3217) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/product` |
| [getEarnEliteAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3221) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/assets` |
| [getEarnEliteRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3225) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/records` |
| [getEarnEliteSubscribeInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3231) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-info` |
| [subscribeEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3237) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3243) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3249) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/redeem-info` |
| [redeemEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3255) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/redeem` |
| [getSharkfinProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3269) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/product` |
| [getSharkfinAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3277) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/account` |
| [getSharkfinAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3281) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/assets` |
| [getSharkfinRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3287) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/records` |
| [getSharkfinSubscription()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3293) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-info` |
| [subscribeSharkfin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3299) | :closed_lock_with_key:  | POST | `/api/v2/earn/sharkfin/subscribe` |
| [getSharkfinSubscriptionResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3308) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-result` |
| [getLoanCurrencies()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3325) |  | GET | `/api/v2/earn/loan/public/coinInfos` |
| [getLoanEstInterestAndBorrowable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3331) |  | GET | `/api/v2/earn/loan/public/hour-interest` |
| [borrowLoan()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3342) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/borrow` |
| [getOngoingLoanOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3350) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/ongoing-orders` |
| [repayLoan()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3358) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/repay` |
| [getRepayHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3364) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/repay-history` |
| [updateLoanPledgeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3370) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3380) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/revise-history` |
| [getLoanHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3386) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/borrow-history` |
| [getLoanDebts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3392) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/debts` |
| [getLoanLiquidationRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3396) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/reduces` |
| [getLoanProductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3408) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/product-infos` |
| [getLoanSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3414) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/symbols` |
| [getLoanMarginCoinInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3420) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/ensure-coins-convert` |
| [getLoanRiskUnit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3438) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/risk-unit` |
| [getLoanLTVConvert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3446) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/ltv-convert` |
| [getLoanRepaidHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3458) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/repaid-history` |
| [getLoanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v2.ts#L3464) | :closed_lock_with_key:  | GET | `/api/v2/spot/ins-loan/loan-order` |

# rest-client-v3.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v3.ts](/src/rest-client-v3.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getServerTime()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L480) |  | GET | `/api/v3/public/time` |
| [getInstruments()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L497) |  | GET | `/api/v3/market/instruments` |
| [getMarketFeeGroup()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L506) |  | GET | `/api/v3/market/fee-group` |
| [getLiquidations()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L515) |  | GET | `/api/v3/market/liquidations` |
| [getRpiSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L524) |  | GET | `/api/v3/market/rpi-symbols` |
| [getRpiOrderBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L531) |  | GET | `/api/v3/market/rpi-orderbook` |
| [getCashDividendRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L540) |  | GET | `/api/v3/market/cash-dividend-records` |
| [getSpotWhaleFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L549) |  | GET | `/api/v3/market/spot-whale-flow` |
| [getSpotFundFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L558) |  | GET | `/api/v3/market/spot-fund-flow` |
| [getSpotNetFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L567) |  | GET | `/api/v3/market/spot-net-flow` |
| [getMarginLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L576) |  | GET | `/api/v3/market/margin-long-short` |
| [getMarginLoanGrowth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L585) |  | GET | `/api/v3/market/margin-loan-growth` |
| [getMarginIsolatedBorrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L594) |  | GET | `/api/v3/market/margin-isolated-borrow` |
| [getFuturesActiveBuySell()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L603) |  | GET | `/api/v3/market/futures-active-buy-sell` |
| [getFuturesLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L612) |  | GET | `/api/v3/market/futures-long-short` |
| [getFuturesPositionLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L621) |  | GET | `/api/v3/market/futures-position-long-short` |
| [getFuturesAccountLongShort()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L630) |  | GET | `/api/v3/market/futures-account-long-short` |
| [getMarketScoreWeights()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L639) |  | GET | `/api/v3/market/score-weights` |
| [getTickers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L648) |  | GET | `/api/v3/market/tickers` |
| [getOrderBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L655) |  | GET | `/api/v3/market/orderbook` |
| [getFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L664) |  | GET | `/api/v3/market/fills` |
| [getProofOfReserves()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L673) |  | GET | `/api/v3/market/proof-of-reserves` |
| [getOpenInterest()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L680) |  | GET | `/api/v3/market/open-interest` |
| [getCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L690) |  | GET | `/api/v3/market/candles` |
| [getHistoryCandles()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L699) |  | GET | `/api/v3/market/history-candles` |
| [getCurrentFundingRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L708) |  | GET | `/api/v3/market/current-fund-rate` |
| [getHistoryFundingRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L717) |  | GET | `/api/v3/market/history-fund-rate` |
| [getRiskReserve()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L726) |  | GET | `/api/v3/market/risk-reserve` |
| [getRiskReserveHour()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L735) |  | GET | `/api/v3/market/risk-reserve-hour` |
| [getRiskReserveAll()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L744) |  | GET | `/api/v3/market/risk-reserve-all` |
| [getDiscountRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L753) |  | GET | `/api/v3/market/discount-rate` |
| [getMarginLoans()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L760) |  | GET | `/api/v3/market/margin-loans` |
| [getPositionTier()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L769) |  | GET | `/api/v3/market/position-tier` |
| [getContractsOi()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L778) |  | GET | `/api/v3/market/oi-limit` |
| [getIndexComponents()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L787) |  | GET | `/api/v3/market/index-components` |
| [getRealityOrderBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L796) | :closed_lock_with_key:  | GET | `/api/v3/account/reality-orderbook` |
| [getRealityFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L805) | :closed_lock_with_key:  | GET | `/api/v3/account/reality-fills` |
| [getCopyFuturesTradingPairs()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L822) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/trading-pairs` |
| [getCopyFuturesPositionSummary()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L833) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/position-summary` |
| [getCopyFuturesMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L843) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/max-transferable` |
| [copyFuturesTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L853) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/transfer` |
| [getCopyFuturesTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L863) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/transfer-record` |
| [getCopyFuturesCurrentFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L869) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/current-follower` |
| [getCopyFuturesHistoryFollowers()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L875) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/history-follower` |
| [getCopyFuturesProfitSummary()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L881) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/profit-summary` |
| [getCopyFuturesProfitDetails()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L887) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/profit-details` |
| [getStockPlusOptionQuote()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L899) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-quote` |
| [getStockPlusOptionChainInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L905) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-chain-info` |
| [getStockPlusOptionExpiryDate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L914) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-expiry-date` |
| [getStockPlusOptionVolume()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L923) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/option-volume` |
| [getStockPlusStaticInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L929) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/static` |
| [getStockPlusQuote()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L935) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/quote` |
| [getStockPlusTradeDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L941) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/trade` |
| [getStockPlusIntraday()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L947) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/intraday` |
| [getStockPlusHistoryCandlestick()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L953) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/history-candlestick` |
| [getStockPlusCandlestick()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L962) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/candlestick` |
| [getStockPlusDepth()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L968) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/market/depth` |
| [placeStockPlusOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L974) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/trade/place-order` |
| [cancelStockPlusOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L980) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/trade/cancel-order` |
| [modifyStockPlusOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L986) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/trade/modify-order` |
| [getStockPlusTodayOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L992) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/today-orders` |
| [getStockPlusHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L998) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/history-orders` |
| [getStockPlusOrderDetail()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1004) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/order-detail` |
| [getStockPlusTodayExecutions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1010) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/today-executions` |
| [getStockPlusHistoryExecutions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1016) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/trade/history-executions` |
| [getStockPlusAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1025) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/account` |
| [getStockPlusCashFlow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1031) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/cash-flow` |
| [getStockPlusStockPosition()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1037) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/stock-position` |
| [stockPlusTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1043) | :closed_lock_with_key:  | POST | `/api/v3/stockplus/asset/transfer` |
| [getStockPlusTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1049) | :closed_lock_with_key:  | GET | `/api/v3/stockplus/asset/transfer-records` |
| [getBalances()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1064) | :closed_lock_with_key:  | GET | `/api/v3/account/assets` |
| [getFundingAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1071) | :closed_lock_with_key:  | GET | `/api/v3/account/funding-assets` |
| [getAccountInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1081) | :closed_lock_with_key:  | GET | `/api/v3/account/info` |
| [getAccountSettings()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1089) | :closed_lock_with_key:  | GET | `/api/v3/account/settings` |
| [adjustAccountMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1096) | :closed_lock_with_key:  | POST | `/api/v3/account/adjust-account-mode` |
| [getDeltaInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1106) | :closed_lock_with_key:  | GET | `/api/v3/account/delta-info` |
| [setLeverage()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1113) | :closed_lock_with_key:  | POST | `/api/v3/account/set-leverage` |
| [setHoldMode()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1120) | :closed_lock_with_key:  | POST | `/api/v3/account/set-hold-mode` |
| [getCollateralType()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1129) | :closed_lock_with_key:  | GET | `/api/v3/account/collateral-type` |
| [setCollateralType()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1136) | :closed_lock_with_key:  | POST | `/api/v3/account/set-collateral-type` |
| [getCustomCollateralCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1145) |  | GET | `/api/v3/account/custom-collateral-coins` |
| [preSetLeverage()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1152) | :closed_lock_with_key:  | GET | `/api/v3/account/pre-set-leverage` |
| [setMargin()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1161) | :closed_lock_with_key:  | POST | `/api/v3/account/set-margin` |
| [getMaxWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1168) | :closed_lock_with_key:  | GET | `/api/v3/account/max-withdrawal` |
| [getFinancialRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1177) | :closed_lock_with_key:  | GET | `/api/v3/account/financial-records` |
| [getRepayableCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1189) | :closed_lock_with_key:  | GET | `/api/v3/account/repayable-coins` |
| [getPaymentCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1201) | :closed_lock_with_key:  | GET | `/api/v3/account/payment-coins` |
| [submitRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1213) | :closed_lock_with_key:  | POST | `/api/v3/account/repay` |
| [getConvertRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1220) | :closed_lock_with_key:  | GET | `/api/v3/account/convert-records` |
| [setDepositAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1235) | :closed_lock_with_key:  | POST | `/api/v3/account/deposit-account` |
| [switchDeduct()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1244) | :closed_lock_with_key:  | POST | `/api/v3/account/switch-deduct` |
| [getDeductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1251) | :closed_lock_with_key:  | GET | `/api/v3/account/deduct-info` |
| [getFeeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1262) | :closed_lock_with_key:  | GET | `/api/v3/account/fee-rate` |
| [getAllFeeRates()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1274) | :closed_lock_with_key:  | GET | `/api/v3/account/all-fee-rate` |
| [getMaxTransferable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1287) | :closed_lock_with_key:  | GET | `/api/v3/account/max-transferable` |
| [getOpenInterestLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1299) | :closed_lock_with_key:  | GET | `/api/v3/account/open-interest-limit` |
| [getEligibleSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1305) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-symbols` |
| [getEligibleMarginTier()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1311) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-margin-tier` |
| [getEligibleLoanInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1317) | :closed_lock_with_key:  | GET | `/api/v3/account/eligible-loan-info` |
| [downgradeAccountToClassic()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1332) | :closed_lock_with_key:  | POST | `/api/v3/account/switch` |
| [getUnifiedAccountSwitchStatus()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1340) | :closed_lock_with_key:  | GET | `/api/v3/account/switch-status` |
| [getTaxRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1356) | :closed_lock_with_key:  | GET | `/api/v3/tax/records` |
| [createSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1371) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub` |
| [createAgentSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1380) | :closed_lock_with_key:  | POST | `/api/v3/user/sub-account/agent-create` |
| [freezeSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1389) | :closed_lock_with_key:  | POST | `/api/v3/user/freeze-sub` |
| [getSubUnifiedAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1398) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-unified-assets` |
| [getSubAccountList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1407) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-list` |
| [createSubAccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1420) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub-api` |
| [updateSubAccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1429) | :closed_lock_with_key:  | POST | `/api/v3/user/update-sub-api` |
| [deleteSubAccountApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1438) | :closed_lock_with_key:  | POST | `/api/v3/user/delete-sub-api` |
| [getSubAccountApiKeys()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1447) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-api-list` |
| [getRateLimitQuota()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1457) | :closed_lock_with_key:  | GET | `/api/v3/user/rate-limit-quota` |
| [setRateLimitQuota()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1463) | :closed_lock_with_key:  | POST | `/api/v3/user/set-rate-limit-quota` |
| [getTransferableCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1478) | :closed_lock_with_key:  | GET | `/api/v3/account/transferable-coins` |
| [submitTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1487) | :closed_lock_with_key:  | POST | `/api/v3/account/transfer` |
| [subAccountTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1496) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-transfer` |
| [getSubTransferRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1508) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-transfer-record` |
| [subMasterTransfer()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1520) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-master-transfer` |
| [getDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1538) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1547) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-deposit-address` |
| [getDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1556) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-records` |
| [getSubDepositRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1565) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-deposit-records` |
| [submitWithdraw()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1580) | :closed_lock_with_key:  | POST | `/api/v3/account/withdraw` |
| [getWithdrawRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1589) | :closed_lock_with_key:  | GET | `/api/v3/account/withdrawal-records` |
| [getWithdrawAddressBook()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1598) | :closed_lock_with_key:  | GET | `/api/v3/account/withdraw-address` |
| [cancelWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1607) | :closed_lock_with_key:  | POST | `/api/v3/account/cancel-withdrawal` |
| [submitNewOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1622) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-order` |
| [modifyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1631) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-order` |
| [placeRealityOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1640) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-reality-order` |
| [cancelRealityOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1649) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-reality-order` |
| [getLoanData()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1658) | :closed_lock_with_key:  | GET | `/api/v3/trade/loan-data` |
| [cancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1665) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-order` |
| [placeBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1674) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-batch` |
| [batchModifyOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1683) | :closed_lock_with_key:  | POST | `/api/v3/trade/batch-modify-order` |
| [cancelBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1692) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-batch` |
| [cancelAllOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1701) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-symbol-order` |
| [closeAllPositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1710) | :closed_lock_with_key:  | POST | `/api/v3/trade/close-positions` |
| [getOrderInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1719) | :closed_lock_with_key:  | GET | `/api/v3/trade/order-info` |
| [getUnfilledOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1728) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-orders` |
| [getHistoryOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1740) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-orders` |
| [movePositions()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1752) | :closed_lock_with_key:  | POST | `/api/v3/account/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1761) | :closed_lock_with_key:  | GET | `/api/v3/account/move-position-history` |
| [getTradeFills()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1773) | :closed_lock_with_key:  | GET | `/api/v3/trade/fills` |
| [getCurrentPosition()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1785) | :closed_lock_with_key:  | GET | `/api/v3/position/current-position` |
| [getPositionHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1796) | :closed_lock_with_key:  | GET | `/api/v3/position/history-position` |
| [getMaxOpenAvailable()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1808) | :closed_lock_with_key:  | POST | `/api/v3/account/max-open-available` |
| [getPositionAdlRank()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1817) | :closed_lock_with_key:  | GET | `/api/v3/position/adlRank` |
| [countdownCancelAll()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1824) | :closed_lock_with_key:  | POST | `/api/v3/trade/countdown-cancel-all` |
| [getLoanTransfered()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1839) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/transfered` |
| [getLoanSymbols()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1848) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/symbols` |
| [getLoanRiskUnit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1857) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/risk-unit` |
| [getLoanRepaidHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1868) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/repaid-history` |
| [getLoanProductInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1877) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/product-infos` |
| [getLoanOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1886) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/loan-order` |
| [getLoanLTVConvert()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1895) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ltv-convert` |
| [getLoanMarginCoinInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1904) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ensure-coins-convert` |
| [bindLoanUid()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1916) | :closed_lock_with_key:  | POST | `/api/v3/ins-loan/bind-uid` |
| [getLoanCoins()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1931) | :closed_lock_with_key:  | GET | `/api/v3/loan/coins` |
| [getLoanInterest()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1940) | :closed_lock_with_key:  | GET | `/api/v3/loan/interest` |
| [loanBorrow()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1949) | :closed_lock_with_key:  | POST | `/api/v3/loan/borrow` |
| [getLoanBorrowOngoing()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1958) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-ongoing` |
| [getLoanBorrowHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1967) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-history` |
| [loanRepay()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1976) | :closed_lock_with_key:  | POST | `/api/v3/loan/repay` |
| [getLoanRepayHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1985) | :closed_lock_with_key:  | GET | `/api/v3/loan/repay-history` |
| [loanRevisePledge()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L1994) | :closed_lock_with_key:  | POST | `/api/v3/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2003) | :closed_lock_with_key:  | GET | `/api/v3/loan/pledge-rate-history` |
| [getLoanDebts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2012) | :closed_lock_with_key:  | GET | `/api/v3/loan/debts` |
| [getLoanReduces()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2019) | :closed_lock_with_key:  | GET | `/api/v3/loan/reduces` |
| [submitStrategyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2034) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-strategy-order` |
| [modifyStrategyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2043) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-strategy-order` |
| [cancelStrategyOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2052) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-strategy-order` |
| [getUnfilledStrategyOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2061) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-strategy-orders` |
| [getHistoryStrategyOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2070) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-strategy-orders` |
| [createBrokerSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2091) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub` |
| [getBrokerSubAccountList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2103) | :closed_lock_with_key:  | GET | `/api/v3/broker/sub-list` |
| [modifyBrokerSubAccount()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2115) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub` |
| [brokerSubWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2130) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-withdrawal` |
| [getBrokerSubDepositAddress()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2142) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-deposit-address` |
| [getBrokerAllSubDepositWithdrawal()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2154) | :closed_lock_with_key:  | GET | `/api/v3/broker/all-sub-deposit-withdrawal` |
| [getBrokerCommission()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2166) | :closed_lock_with_key:  | GET | `/api/v3/broker/commission` |
| [createBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2178) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub-apikey` |
| [modifyBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2190) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub-apikey` |
| [deleteBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2206) | :closed_lock_with_key:  | POST | `/api/v3/broker/delete-sub-apikey` |
| [getBrokerSubApiKey()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2218) | :closed_lock_with_key:  | GET | `/api/v3/broker/query-sub-apikey` |
| [getP2pAdList()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2230) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-list` |
| [getP2pExchangeRate()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2236) | :closed_lock_with_key:  | GET | `/api/v3/p2p/exchange-rate` |
| [simulateP2pFee()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2242) | :closed_lock_with_key:  | POST | `/api/v3/p2p/fee-simulate` |
| [getP2pAdLimit()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2248) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-limit` |
| [createP2pAd()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2254) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-create` |
| [updateP2pAd()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2260) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-update` |
| [operateP2pAd()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2264) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-operate` |
| [getP2pAdInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2268) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-info` |
| [getP2pMyAds()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2274) | :closed_lock_with_key:  | GET | `/api/v3/p2p/my-ads` |
| [getP2pPendingOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2280) | :closed_lock_with_key:  | GET | `/api/v3/p2p/pending-orders` |
| [getP2pAllOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2286) | :closed_lock_with_key:  | GET | `/api/v3/p2p/all-orders` |
| [getP2pOrderInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2292) | :closed_lock_with_key:  | GET | `/api/v3/p2p/order-info` |
| [confirmP2pOrderPayment()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2298) | :closed_lock_with_key:  | POST | `/api/v3/p2p/order-pay` |
| [releaseP2pOrderAsset()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2304) | :closed_lock_with_key:  | POST | `/api/v3/p2p/order-release` |
| [getP2pUserInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2310) | :closed_lock_with_key:  | GET | `/api/v3/p2p/user-info` |
| [getP2pCurrencies()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2314) | :closed_lock_with_key:  | GET | `/api/v3/p2p/currencies` |
| [getP2pPayMethods()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2318) | :closed_lock_with_key:  | GET | `/api/v3/p2p/pay-method` |
| [getP2pBalance()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2322) | :closed_lock_with_key:  | GET | `/api/v3/p2p/balance` |
| [getEarnEliteProducts()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2334) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-product` |
| [getEarnEliteAssets()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2338) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-assets` |
| [getEarnEliteRecords()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2342) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-records` |
| [getEarnEliteSubscribeInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2348) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-info` |
| [subscribeEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2354) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2360) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2366) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-redeem-info` |
| [redeemEarnElite()](https://github.com/sieblyio/bitget-api/blob/master/src/rest-client-v3.ts#L2372) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-redeem` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bitget API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L79) |  | WS | `place-order` |
| [placeBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L98) |  | WS | `batch-place` |
| [cancelOrder()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L122) |  | WS | `cancel-order` |
| [cancelBatchOrders()](https://github.com/sieblyio/bitget-api/blob/master/src/websocket-api-client.ts#L141) |  | WS | `batch-cancel` |