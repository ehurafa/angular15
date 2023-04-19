import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listInvestimentsService: ListInvestimentsService) {

  }

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

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe(
      (res) => console.log(res)
    )
  }

}
