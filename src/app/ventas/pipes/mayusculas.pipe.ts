import { UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(valor: string, enMayusculas: boolean = true) {

        if(enMayusculas){
            return valor.toUpperCase();
        }else{
            return valor.toLowerCase();
        }
        
    }

}