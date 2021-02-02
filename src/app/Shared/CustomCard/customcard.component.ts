import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomcardComponent  {
@Input()  items;
@Input()  itemName;
@Input()  itemId;
@Input()  itemImage;
@Input()  itemFollowers;
@Input()  itemRating;
@Input()  addRating = true;
@Input()  addFollowers = true;

  constructor() { }


}
