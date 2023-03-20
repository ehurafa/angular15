import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Olá Mundo"></app-title>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges {

  ngOnInit(): void {
    setTimeout(() => {
      console.log('OnInit')
    }, 5000)
  }

  ngOnChanges(): void {

  }
}
