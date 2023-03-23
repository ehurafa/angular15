import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  
  public condition: boolean = true 
  public conditionClick: boolean = true

  public list: Array<{ name: string, age: number }> = [
    { name: "Rafael Gomes", age: 32 },
    { name: "Enzo", age: 5 }
  ]

  public name: string = 'rafa'

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public onClickAddList() {
    this.list.push({ name: "Ana", age: 20 })
  }

  public onClickEventList(event: MouseEvent) {
    console.log(event)
  }
}
