import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToStars'
})
export class NumToStarsPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (value == true)
      return "../../assets/icons/star (2).png";
    else
      return "../../assets/icons/star (1).png";
  }
}
