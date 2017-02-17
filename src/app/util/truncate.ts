import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringTruncate'})

export class StringTruncatePipe implements PipeTransform {
  transform(value: string, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[0], 13) : 13;

    return value.length > limit ? value.substring(0, limit) : value;
  }
}