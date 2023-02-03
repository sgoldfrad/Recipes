import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value:any): string {
    console.log("ppp"+value)

let result="";
if(value>60)
  result=(value/60)+" hours "+value%60+" minutes";
else
  result=(String)(value)+" minutes";
    return result;
  }
}
// export class  TimePipePipe implements PipeTransform {

//   transform(minutes: number):unknown {
//     return `${(minutes/60).toFixed(0)} : ${minutes%60 <10?'0'+minutes%60: minutes%60}`;
//   }

// }