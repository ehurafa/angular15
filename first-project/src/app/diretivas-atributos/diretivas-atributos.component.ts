import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public value: boolean = false 


  ngOnInit(): void {
    setInterval(() => {
      if (this.value) {
        this.value = false
      } else {
        this.value = true
      }
    }, 2000)
  }
}
