import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: unknown[], propName: string): unknown[] {
    if (!propName) return value;

    return value.sort((a: unknown[],b: unknown[]) => {
      if (a[propName] === b[propName]) return 0;
      return a[propName] > b[propName] ? 1 : -1;
    });
  }

}
