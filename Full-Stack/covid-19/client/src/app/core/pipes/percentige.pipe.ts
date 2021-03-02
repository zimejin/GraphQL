import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentige'
})
export class PercentigePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
