import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'integerPipe'})
export class IntegerPipe implements PipeTransform {
  transform(value: any): number {
    const number = Number.parseInt('' + value, 10);
    if (Number.isNaN(number)) {
      return 0;
    } else {
      return number;
    }
  }
}
