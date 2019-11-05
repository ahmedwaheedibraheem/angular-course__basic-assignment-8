import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'string') {
      const reversedString = value
        .split('')
        .reverse()
        .join('');
      return reversedString;
    }
    return value;
  }
}
