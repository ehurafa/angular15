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
  
  public setDraw(value: string): number | undefined {
    const draw = Number(value);
    console.log(draw) 
    if(isNaN(draw) || this.savings < draw) {
      return;
    }
    this.savings -= draw;
    return (this.wallet += draw);
  }

  public setDeposit(value: string): number | undefined {
    const deposit = Number(value);
    console.log(deposit)
    if(isNaN(deposit) || this.wallet < deposit) {
      return;
    }
    this.wallet -= deposit;
    return (this.savings += deposit);
  }
}
