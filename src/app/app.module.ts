import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ConverterComponent} from "./components/converter.component";
import {ConverterResultComponent} from "./components/converter-result.component";
import {TickerService} from "./services/ticker.service";
import {IntegerPipe} from "./pipes/integer.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ConverterComponent,
    ConverterResultComponent,
    IntegerPipe
  ],
  providers: [TickerService],
  bootstrap: [ConverterComponent]
})

export class AppModule {
}
