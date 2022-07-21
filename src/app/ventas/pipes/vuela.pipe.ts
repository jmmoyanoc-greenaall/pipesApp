import { UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    
    transform(hayVuelo: boolean):string {
        return hayVuelo ? 'vuela' : 'no vuela';
    }

}