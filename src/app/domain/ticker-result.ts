/**
 * Domain object for converter result.
 */
export class TickerResult {
  constructor(public priceUsd: number,
              public priceEur: number,
              public timestamp: Date) {
  }
}
