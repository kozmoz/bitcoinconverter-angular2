import {Direction} from "./direction";
import {Currency} from "./currency";

/**
 * Domain object for Bitcoin conversion.
 */
export class Converter {
  constructor(public direction: Direction,
              public currency: Currency,
              public amount: number) {
  }
}
