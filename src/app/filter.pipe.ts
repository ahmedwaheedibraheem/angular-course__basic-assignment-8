import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class FilterPipe implements PipeTransform {
  transform(
    value: {
      instanceType: string;
      name: string;
      status: string;
      started: Date;
    }[],
    propertyValue: string
  ): any {
    if (propertyValue) {
      return value.filter(obj => obj.name.startsWith(propertyValue));
    } else {
      return value;
    }
  }
}
