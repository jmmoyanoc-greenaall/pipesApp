import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent  {

  nombreLower: string = 'juanma';
  nombreUpper: string = 'JUANMA';
  nombreCompleto: string = 'JuaN ManUeL';

  fecha: Date = new Date();
}
