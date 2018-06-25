/**
 * Currencies.
 */
export class Currency {

  private static readonly CURRENCIES: Currency[] = [
    new Currency('EUR', 'Euro', '\u20ac'),
    new Currency('USD', 'US Dollar', '$')
  ];

  static getCurrencies(): Currency[] {
    return this.CURRENCIES;
  }

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly sign: string) {
  }

  public toString(): string {
    return `${this.name} ${this.sign}`;
  }

}
