import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service'; // Asegúrate de importar el servicio correcto
import { Usuario } from '../model/usuario'; // Asegúrate de importar el modelo correcto

@Component({
  selector: 'usuario',
  templateUrl: 'usuario.component.html',
  styleUrls: ['usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  title = 'Crear Usuario';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService, private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      puntos_acumulados: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addUsuario() {
    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      direccion: this.usuarioForm.get('direccion')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      contraseña: this.usuarioForm.get('contraseña')?.value,
      puntos_acumulados: this.usuarioForm.get('puntos_acumulados')?.value
    };

    if (this.id !== null) {
      this.usuarioService.editUsuario(this.id, USUARIO).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      });
    } else {
      this.usuarioService.saveUsuario(USUARIO).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      });
    }
  }

  Edit() {
    if (this.id !== null) {
      this.usuarioService.getUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          nombre: data.nombre,
          direccion: data.direccion,
          correo: data.correo,
          contraseña: data.contraseña,
          puntos_acumulados: data.puntos_acumulados
        });
      });
    }
  }
}
