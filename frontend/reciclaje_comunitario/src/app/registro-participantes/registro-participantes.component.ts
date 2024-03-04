import { RegistroParticipante } from './registro-participante.interface';

@Component({
  selector: 'app-registro-participantes',
  templateUrl: './registro-participantes.component.html',
  styleUrls: ['./registro-participantes.component.css']
})
export class RegistroParticipantesComponent {

  nuevoParticipante: RegistroParticipante = {
    id: '',
    nombre: '',
    direccion: '',
    correo: '',
    contraseña: '',
    puntos_acumulados: 0
  };

  constructor(private registroService: RegistroService) { }

  registrarParticipante() {
    this.registroService.registrarParticipante(this.nuevoParticipante).subscribe(
      (respuesta) => {
        console.log('Registro exitoso:', respuesta);
        // Manejar la respuesta del servidor
      },
      (error) => {
        console.error('Error en el registro:', error);
        // Manejar el error
      }
    );
  }
}


  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes() {
    this._registroService.getParticipantes().subscribe(data => {
      console.log(data);
      this.listParticipantes = data;
    }, error => {
      console.log(error);
    });
  }

  deleteParticipante(id: any){
    this._registroService.deleteParticipante(id).subscribe(data => {
      this.getParticipantes();
    }, error => {
      console.log(error)
    });
  }
}
