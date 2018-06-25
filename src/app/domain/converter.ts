import {Direction} from "./direction";
import {Currency} from "./currency";

/**
 * Domain object for Bitcoin conversion.
 */
export class Converter {
  constructor(public readonly direction: Direction,
              public readonly currency: Currency,
              public readonly amount: number) {
  }
}
