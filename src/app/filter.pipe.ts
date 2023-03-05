import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown[], filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString.length === 0) {
      return value;
    }
    return value.filter(item => {
      const regExp = new RegExp(`^${filterString}`, 'g')
      return item[propName].match(regExp)
    })
  }

}
