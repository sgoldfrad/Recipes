import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToHour'
})
export class ConvertToHourPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let ans: string = "";
    if (value / 60 > 1) {
      ans += "hours:" + Math.floor( value / 60) + " ";
      value %= 60;
    }
    if (value != 0)
      ans += "minutes:" + value;
    return ans;
  }

}
