import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-atributos>
    <h1>Aula de diretivas de atributo</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>  
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-data-biding></app-data-biding>
  <app-title *ngIf="destroy"></app-title>
  <br />
  <button (click)="add()">Adicionar</button>
  {{ valor }}
  <button (click)="destroyComponent()">Destruir componente</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public destroy: boolean = true;

  public valor: number = 1;

  public add(): number {
    return this.valor += 1
  }

  public destroyComponent() {
    this.destroy = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('OnInit')
    }, 5000)
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
}
