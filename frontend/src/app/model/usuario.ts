export class Usuario {
    _id?: string;
    nombre: string;
    direccion: string;
    correo: string;
    contraseña: string;
    puntos_acumulados: number;
  
    constructor(nombre: string, direccion: string, correo: string, contraseña: string, puntos_acumulados: number) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.correo = correo;
      this.contraseña = contraseña;
      this.puntos_acumulados = puntos_acumulados;
    }
  } 
  