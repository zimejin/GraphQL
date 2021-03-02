import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitPipe'
})
export class DigitPipePipe implements PipeTransform {

  transform(value: any): any {

    // return value.slice(-1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return value.slice(-1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  }

}
