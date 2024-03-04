// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contraseña: string = '';

  iniciarSesion() {
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Correo electrónico:', this.correo);
    console.log('Contraseña:', this.contraseña);
  }
}

