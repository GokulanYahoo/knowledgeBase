import {Pipe, PipeTransform,Injectable} from '@angular/core';


@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(sLists: any[], field : string, value : string): any[] {  
        if (!sLists) return [];        
        return sLists.filter(it => it[field] == value);
    }
}
