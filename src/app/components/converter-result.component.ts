import {Component, Input, OnInit} from '@angular/core';
import {Converter} from '../domain/converter';
import {TickerResult} from '../domain/ticker-result';
import {TickerService} from '../services/ticker.service';
import {Direction} from '../domain/direction';
import {timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';

/**
 * Show the total cost in EUR or USD for the given amount of BTC.
 */
@Component({
  moduleId: module.id,
  selector: 'app-converter-result',
  templateUrl: 'converter-result.component.html',
  styleUrls: ['converter-result.component.css']
})
export class ConverterResultComponent implements OnInit {

  @Input()
  converter: Converter;

  // Make Direction enum available to template.
  Direction = Direction;

  tickerResult: TickerResult;
  error: string;

  /**
   * @param tickerService The service we receive the BTC exchange rate from
   */
  constructor(private tickerService: TickerService) {
  }

  ngOnInit(): void {

    // Get new price immediately and after that every minute.
    // Observable
    timer(0, 60000)
      .pipe(
        switchMap(() => this.tickerService.getTickerInfo()))
      .subscribe(update => {
        if (typeof update === 'string') {
          this.error = update;
          this.tickerResult = null;
        } else {
          this.error = null;
          this.tickerResult = update;
        }
      });
  }

  /**
   * Calculate the total amount in USD or EUR, return 0 in case the amount is invalid.
   */
  calculateResult(): number {
    const amountInt = Number.parseInt('' + this.converter.amount, 10);
    if (this.tickerResult && amountInt >= 0) {

      if (this.converter.currency.id === 'USD') {
        return (this.tickerResult.priceUsd * amountInt);
      } else {
        return (this.tickerResult.priceEur * amountInt);
      }

    } else {
      return 0;
    }
  }
}
