import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public value: boolean = false;
  public heightPx: string = '20px';
  public name: string = "";
  public list: Array<{ name: string }> = [{ name: "Erik" }];

  public date: Date =  new Date();

  ngOnInit(): void {
    setInterval(() => {
      if (this.value) {
        this.value = false;
      } else {
        this.value = true;
      }

      if (this.heightPx == '20px') {
        this.heightPx = '50px';
      } else {
        this.heightPx = '20px';
      }
    }, 2000)
  };

  public save() {
    this.list.push({ name: this.name });
    this.name = "";
  }
}
