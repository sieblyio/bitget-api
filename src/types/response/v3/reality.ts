export interface RealityCompanyOverviewV3 {
  peRatio: string;
  pbRatio: string;
  totalShares: string;
  marketCap: string;
  high52Week: string;
  low52Week: string;
  code: string;
  name: string;
  ListingDate: string;
  employees: string;
  companyAddress: string;
}

export interface RealityValuationIndicatorsV3 {
  date: string;
  pb: string;
  pbEd: string;
  pbPd: string;
  pbMrq: string;
  pe: string;
  peLyr: string;
  peTtmEd: string;
  peTtmPd: string;
  ps: string;
  psLyr: string;
  psTtmEd: string;
  psTtmPd: string;
  pcf: string;
  pcfNet: string;
  pcfNetTtmEd: string;
  pcfNetTtmPd: string;
  pcfTtmEd: string;
  pcfTtmPd: string;
  evEbitda: string;
  equityValue: string;
  grossEv: string;
  netEv: string;
  tmvUsd: string;
  cirTmvUsd: string;
  dividendYieldTtm: string;
}

export interface RealityEarningsForecastV3 {
  fiscalYear: string;
  publicationDeadline: string;
  isActual: boolean;
  revenue: string;
  ebit: string;
  netIncomeParent: string;
  eps: string;
  bps: string;
  cfps: string;
  roe: string;
  roa: string;
  currency: string;
}

export interface RealitySuspensionResumptionInfoV3 {
  code: string;
  name: string;
  suspensionDate: string;
  suspensionTime: string;
  suspensionReason: string;
  suspensionPrice: string;
  resumptionDate: string;
  resumptionQuoteTime: string;
  resumptionTradingTime: string;
}

export interface RealityDividendItemV3 {
  type: string;
  announcementDate: string;
  recordDate: string;
  exrightDate: string;
  dividendDate: string;
  dividendPerShare: string;
  stockDividendPerShare: string;
  splitValidDate: string;
  splitNumerator: string;
  splitDenominator: string;
}

export interface RealityShareCapitalChangeV3 {
  announcementDate: string;
  changeDate: string;
  totalShares: string;
  commonShares: string;
  preferredShares: string;
  otherShares: string;
  specialExplain: string;
  changeReason: string;
}

export interface RealityInnerTradeItemV3 {
  reporterName: string;
  issueOrgName: string;
  endDate: string;
  announcementDate: string;
  innerType: string;
  position: string;
  securityTitle: string;
  tradeDate: string;
  designatedExerciseDate: string;
  innerTradeType: string;
  actionType: string;
  tradeVolume: string;
  tradePrice: string;
  holdingType: string;
  indirectHoldingStatement: string;
  postTradeQuantity: string;
}

export interface RealityExecutiveShareholdingItemV3 {
  name: string;
  holdingNum: string;
  holdingRatio: string;
  voteRatio: string;
  period: string;
  announcementDate: string;
}

export interface RealityShareholdDetailItemV3 {
  name: string;
  holdingNum: string;
  holdingRatio: string;
}

export interface RealityCursorListV3<T> {
  list: T[];
  cursor?: string;
}

export interface RealityStockInfoV3 {
  symbol: string;
  code: string;
  name: string;
  tradingPeriod: string[];
  weekendTradable: 'yes' | 'no' | string;
}

export interface RealityMarketSessionStateV3 {
  state: string;
  timeZone: string;
  startTime: string;
  endTime: string;
}

export interface RealityMarketStateV3 {
  market: string;
  daylightType: string;
  stateList: RealityMarketSessionStateV3[];
}

export interface RealityMarketSpecificConfigV3 {
  remark: string;
  startTime: string;
  endTime: string;
}

export interface RealityMarketCalendarV3 {
  timeZone: string;
  specificConfig: RealityMarketSpecificConfigV3[];
  regularConfig: string[];
}
