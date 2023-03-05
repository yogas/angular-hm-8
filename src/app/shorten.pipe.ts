import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform { 
  transform(value: string, ...args: any[]) {
    return value.substring(0, 10) + (value.length > 10 ? '...' : '')
  }
}