import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getSavings: shoud savings have = 10', () => {
    expect(component.getSavings).toEqual(10);
  });

  it('(U) getWallet: shoud savings have = 50', () => {
    expect(component.getWallet).toEqual(50);
  });

  it('(U) setDraw: shoud transfer savings from wallet', () => {
    component.setDraw('10');
    // fixture.detectChanges(); 

    expect(component.getSavings).toEqual(0);
    expect(component.getWallet).toEqual(60);
  });

  it('(U) setDeposit: shoud transfer wallet from savings', () => {
    component.setDeposit('50');
    // fixture.detectChanges(); 

    expect(component.getWallet).toEqual(0);
    expect(component.getSavings).toEqual(60);
  });


});
