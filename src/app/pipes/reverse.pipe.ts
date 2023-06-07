import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(reverse: string) {
    var res = "";
    for (let i = 0; i < reverse.length; i++) {
      res = reverse[i] + res;
    }
    return res;
  }
  
  }



