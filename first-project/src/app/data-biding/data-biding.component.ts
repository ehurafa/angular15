import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public name: string = "Rafael"
  public age: number = 32
  public checkedDisabled: boolean = true
  public imgSrc: string = "https://p.turbosquid.com/ts-thumb/OH/0A9fga/T1/rr_0000/jpg/1671401940/600x600/fit_q87/c28eb073e59dd01e9092280c093fc056c7634a85/rr_0000.jpg"
  public imgTitle: string = "Título da imagem"

}
