import { Component } from '@angular/core';
import { Recompensa } from '../models/recompensa';
import { RecompensaService } from '../services/recompensa.service';

@Component({
  selector: 'app-registro-recompensa',
  templateUrl: './registro-recompensa.component.html',
  styleUrls: ['./registro-recompensa.component.css']
})
export class RegistroRecompensaComponent {
  recompensa: Recompensa = {
    nombre: '',
    descripcion: '',
    puntos_requeridos: '',
    stocks_disponibles: 0
  };

  constructor(private recompensaService: RecompensaService) { }

  submitForm(): void {
    this.recompensaService.registrarRecompensa(this.recompensa)
      .subscribe(() => {
        console.log('Recompensa registrada exitosamente');
        // Puedes agregar aquí lógica adicional después de enviar el formulario, como redireccionar a otra página
      });
  }
}
