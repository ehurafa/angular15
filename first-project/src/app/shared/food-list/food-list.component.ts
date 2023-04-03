import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];
  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodList = this.foodListService.foodList();
    this.foodListService.emitEvent.subscribe(res => alert(`Você adicinou -> ${res}`));
  }
}
