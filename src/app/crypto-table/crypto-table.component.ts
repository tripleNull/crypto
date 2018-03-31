import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CryptoCurrency } from '../../models/crypto-currency.class';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements OnInit {
  public top100Cryptos: CryptoCurrency[];

  constructor(public cryptoService: CryptoService) {
     this.getTop100Cryptos();
  }

  public getTop100Cryptos(): void {
    this.cryptoService.getAllCryptos().subscribe((data: any) => {
      this.top100Cryptos = data.map((element: any) => {
        return new CryptoCurrency(element);
      });
    });
  }

  ngOnInit() {
  }

}
