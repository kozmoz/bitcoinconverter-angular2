import {Component, OnInit} from "@angular/core";
import {Converter} from "../domain/converter";
import {Currency} from "../domain/currency";
import {Direction} from "../domain/direction";

@Component({
  moduleId: module.id,
  selector: 'app-bitcoin-converter',
  templateUrl: 'converter.component.html',
  styleUrls: ['converter.component.css']
})
export class ConverterComponent implements OnInit {

  // Make enum available to template.
  Direction = Direction;

  // List of all available currencies.
  currencies: Currency[];

  converter: Converter;

  ngOnInit(): void {
    this.currencies = Currency.getCurrencies();

    this.converter = new Converter(
      Direction.FROM_BTC,
      this.currencies[0],
      1);
  }
}
