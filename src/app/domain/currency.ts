/**
 * Currencies.
 */
export class Currency {

  private static CURRENCIES: Currency[] = [
    new Currency('EUR', 'Euro', '\u20ac'),
    new Currency('USD', 'US Dollar', '$')
  ];

  constructor(public id: string,
              public name: string,
              public sign: string) {
  }

  static getCurrencies(): Currency[] {
    return this.CURRENCIES;
  }

  public toString(): string {
    return `${this.name} ${this.sign}`;
  }

}
