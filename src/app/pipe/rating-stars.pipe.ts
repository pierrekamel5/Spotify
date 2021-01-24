import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars'
})
export class RatingStarsPipe implements PipeTransform {

  transform(number: number): any {
    if(number < 20){
     return 1;
    } else if (number >= 20 || number < 40){
      return 2;
    } else if (number >= 4 || number < 60){
      return 3;
    } else if (number >= 60 || number < 80){
      return 4;
    } else  {
      return 5;
    }
  }

}
