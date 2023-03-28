import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public sendData = new EventEmitter();

  public list: Array<{ name: string, age: number }> = [
    {
      name: "Rafael Gomes",
      age: 32
    },
    {
      name: "William Gomes",
      age: 7
    },
    {
      name: "Luiz Henrique",
      age: 11
    }
  ]

  public getData(event: number) {
    this.sendData.emit(this.list[event])
  }

}
