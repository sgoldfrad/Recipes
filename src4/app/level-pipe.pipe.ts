import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelPipe'
})
export class LevelPipePipe implements PipeTransform {

  transform(value: number): string {
   let result="";
   while(value!=0){
    result+="*";
    value--;
   }
    return result;
  }

}
