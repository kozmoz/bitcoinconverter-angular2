import {Injectable} from '@angular/core';
import {TickerResult} from '../domain/ticker-result';
import {Http} from '@angular/http';

@Injectable()
export class TickerService {

  // We use a proxy and inject an "Access-Control-Allow-Origin: *" header.
  // Proxied URL: https://www.bitstamp.net/api/v2/ticker/btcusd
  private TICKER_URL = 'https://juur.link/download/bitstamp-btc-usd-eur.php';

  constructor(private http: Http) {
  }

  /**
   * Get latest bid price for 1 BTC in both USD and EUR.
   */
  getTickerInfo(): Promise<string | TickerResult> {
    return this.http.get(this.TICKER_URL)
      .toPromise()
      .then(response => {

        const data = response.json();
        // Convert unix timestamp to Date object.
        const date = new Date(1000 * (+data.timestamp));

        return new TickerResult(+data.bidUSD, +data.bidEUR, date);
      })
      .catch(response => 'Server error: ' + response.statusText);
  }
}
