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

  public investiments!: Array<Investiments>;

  ngOnInit(): void {
    this.listInvestimentsService
      .list()
      .subscribe((res) => console.log(res));
  }

}
