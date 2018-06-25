/**
 * Domain object for converter result.
 */
export class TickerResult {
  constructor(public readonly priceUsd: number,
              public readonly priceEur: number,
              public readonly timestamp: Date) {
  }
}
