import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent  {

  nombre:string = 'Juan Manuel';
  genero:string = 'masculino';
  contador:number = 1;
  resto:number = 0;

  invitacionMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  persona = {
    'nombre:': 'Juan Manuel',
    'edad': 50,
    'direccion': 'Málaga, España'
  }

  heroes =[
    {
      nombre: 'Superman',
      vuela: true 
    },
    {
      nombre: 'Robin',
      vuela: false 
    }
  ]

  clientes:string[] = ['María', 'Juan', 'Pepe', 'Fernando', 'Antonio'];
  clientesMapas = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3600);
  });

  cambiarCliente(){
    if(this.genero==='femenino'){
      this.nombre='Juan Manuel';
      this.genero='masculino';
    }else{
      this.nombre='Susana';
      this.genero='femenino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  anadirCliente(){
    this.clientes.push('Juan');
  }
}
