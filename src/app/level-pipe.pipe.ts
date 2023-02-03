import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelPipe'
})
export class LevelPipePipe implements PipeTransform {

  transform(value: boolean): string {
    if (value == true)
      return "../../assets/icons/star (2).png";
    else
      return "../../assets/icons/star (1).png";
  }
}
