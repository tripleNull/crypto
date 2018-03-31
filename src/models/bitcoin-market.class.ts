export class BitcoinMarket {
  public active_currencies: number;
  public active_markets: number;
  public bitcoin_percentage_of_market_cap: number;
  public total_market_cap_usd; float;
  public total_24h_volume_usd: number;

  constructor(data?: any) {
    const defaults = {
      ...data
    };

    this.active_currencies = defaults.active_currencies;
    this.active_markets = defaults.active_markets;
    this.bitcoin_percentage_of_market_cap = defaults.bitcoin_percentage_of_market_cap;
    this.total_market_cap_usd = defaults.total_market_cap_usd;
    this.total_24h_volume_usd = defaults.total_24h_volume_usd;

  }

}
