import { Component } from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public foodList: Array<{ food: string }> = [
    { food: "X-salada" },
    { food: "X-bacon" },
    { food: "Coxinha" }
  ];

}
