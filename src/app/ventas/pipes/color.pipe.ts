import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colorCorrecto:string = '';

  transform(valor: number): string {
    
    if(valor === 0 ){
      this.colorCorrecto = 'azul';
    }else if(valor === 1 ){
      this.colorCorrecto = 'negro';
    }else if(valor === 2){
      this.colorCorrecto = 'rojo';
    }else {
      this.colorCorrecto = 'verde';
    }

    return  this.colorCorrecto;
  }

}
