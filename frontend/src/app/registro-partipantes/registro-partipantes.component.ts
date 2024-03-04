import { Component } from '@angular/core';
import { Participante } from '../models/participante';
import { ParticipanteService } from '../services/participante.service';

@Component({
  selector: 'app-registro-participantes',
  templateUrl: './registro-participantes.component.html',
  styleUrls: ['./registro-participantes.component.css']
})
export class RegistroParticipantesComponent {
  participante: Participante = {
    id: '',
    nombre: '',
    direccion: '',
    correo: '',
    contraseña: '',
    puntos_acumulados: 0
  };

  constructor(private participanteService: ParticipanteService) { }

  submitForm(): void {
    this.participanteService.registrarParticipante(this.participante)
      .subscribe(() => {
        console.log('Participante registrado exitosamente');
        // Puedes agregar aquí lógica adicional después de enviar el formulario, como redireccionar a otra página
      });
  }
}
