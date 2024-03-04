import { Component } from '@angular/core';
import { AccionReciclaje } from '../models/accion-reciclaje';
import { AccionReciclajeService } from '../services/accion-reciclaje.service';

@Component({
  selector: 'app-registro-accion-reciclaje',
  templateUrl: './registro-accion-reciclaje.component.html',
  styleUrls: ['./registro-accion-reciclaje.component.css']
})
export class RegistroAccionReciclajeComponent {
  accionReciclaje: AccionReciclaje = {
    tipo_material: '',
    cantidad: 0,
    fecha: new Date()
  };

  constructor(private accionReciclajeService: AccionReciclajeService) { }

  submitForm(): void {
    this.accionReciclajeService.registrarAccionReciclaje(this.accionReciclaje)
      .subscribe(() => {
        console.log('Acción de reciclaje registrada exitosamente');
        // Puedes agregar aquí lógica adicional después de enviar el formulario, como redireccionar a otra página
      });
  }
}
