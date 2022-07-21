import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor:string = 'sin ordenacion'): Heroe[] {

    if(ordenarPor == 'nombre'){
      value = value.sort((a, b) => (a.nombre > b.nombre  ? 1 : -1));
    }else if(ordenarPor == 'vuela'){
      value = value.sort((a, b) => (a.vuela > b.vuela  ? -1 : 1));
    }else if(ordenarPor == 'color'){
      value = value.sort((a, b) => (a.color > b.color  ? 1 : -1));
    }else{
      value = value.sort((a, b) => (a.nombre > b.nombre  ? 1 : -1));
    }
   
    return value;
  }

}
