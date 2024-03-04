import { Component } from '@angular/core';
import { RegistroActividad } from '../models/registro-actividad';
import { RegistroActividadService } from '../services/registro-actividad.service';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.css']
})
export class RegistroActividadComponent {
  registroActividad: RegistroActividad = {
    tipo: '',
    fecha: new Date()
  };

  constructor(private registroActividadService: RegistroActividadService) { }

  submitForm(): void {
    this.registroActividadService.registrarActividad(this.registroActividad)
      .subscribe(() => {
        console.log('Actividad registrada exitosamente');
        // Puedes agregar aquí lógica adicional después de enviar el formulario, como redireccionar a otra página
      });
  }
}
