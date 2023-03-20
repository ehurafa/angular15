import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges {
  @Input() public title: string = "Bem vindo"

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso!")
  }
}
