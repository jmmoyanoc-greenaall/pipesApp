import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {

  cambiar:boolean = true;
  ordenarPor:string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul  
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro  
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde  
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo  
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde  
    }];

  cambiarTexto(){
      this.cambiar ? this.cambiar=false : this.cambiar=true;
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
  }

}
