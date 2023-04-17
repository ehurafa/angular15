import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {

  private savings: number = 10;
  private wallet: number = 10;

  get getSavings(): number {
    return this.savings;
  }

  get getWallet(): number {
    return this.wallet;
  }
  
  public setDraw(value: string): number {
    const draw = Number(value);
    console.log(draw)
    return draw
  }

  public setDeposit(value: string): number {
    const deposit = Number(value);
    console.log(deposit)
    return deposit
  }
}
