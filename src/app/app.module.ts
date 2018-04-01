import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';
import { CryptoTableComponent } from './crypto-table/crypto-table.component';
import { MinusSignToParens } from '../pipes/minus-to-parens';



@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    MinusSignToParens,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
