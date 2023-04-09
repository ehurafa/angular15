import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <forms></forms>
  <hr />
  <app-food-add></app-food-add>
  <hr />
  <app-food-list></app-food-list>
  <hr />
  <app-output (sendData)="setData($event)"></app-output>
  <app-input [counter]="addValue"></app-input>
  <button (click)="addInput()">Adicionar xx</button>
  <ng-template [ngIf]="getData">
    <h1>{{ getData.name }}</h1>
    <h2>{{ getData.age }}</h2>
  </ng-template>
  <hr />
  <app-new-component></app-new-component>
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
  <app-diretivas-atributos>
    <h1>Aula de diretivas de atributo</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>  
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public destroy: boolean = true;

  public valor: number = 1;

  public addValue: number = 10;

  public getData: { name: string, age: number } | undefined; 

  public add(): number {
    return this.valor += 1
  }

  public addInput() {
    this.addValue += 1
  }

  public destroyComponent() {
    this.destroy = false;
  }

  public setData(event: { name: string, age: number }) {
    this.getData = event
  }

  ngOnInit(): void {
    setTimeout(() => {
      // console.log('OnInit')
    }, 5000)
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges')
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked')
  }
}
