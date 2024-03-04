import { Component } from '@angular/core';
import { Campana } from '../models/campana';
import { CampanaService } from '../services/campana.service';

@Component({
  selector: 'app-registro-campana',
  templateUrl: './registro-campana.component.html',
  styleUrls: ['./registro-campana.component.css']
})
export class RegistroCampanaComponent {
  campana: Campana = {
    titulo: '',
    descripcion: '',
    fecha: new Date()
  };

  constructor(private campanaService: CampanaService) { }

  submitForm(): void {
    this.campanaService.registrarCampana(this.campana)
      .subscribe(() => {
        console.log('Campaña registrada exitosamente');
        // Puedes agregar aquí lógica adicional después de enviar el formulario, como redireccionar a otra página
      });
  }
}
