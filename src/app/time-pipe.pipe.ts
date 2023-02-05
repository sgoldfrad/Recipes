import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: any): string {
    let result = "";
    if (value > 60)
      result = (value / 60) + " hours " + value % 60 + " minutes";
    else
      result = (String)(value) + " minutes";
    return result;
  }
}