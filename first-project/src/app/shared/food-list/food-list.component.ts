import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList | any;
  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );
    this.foodListService.emitEvent.subscribe({ next: (res: any) => alert(`Você adicinou -> ${res}`) });
  }
}
