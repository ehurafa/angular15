import { Component } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public investiments: Array<Investiments> = [
    {
      name: "Itaú",
      value: 100
    },
    {
      name: "Bradesco",
      value: 200
    },
    {
      name: "Santander",
      value: 300
    },
    {
      name: "BB",
      value: 400
    }
  ];

}
