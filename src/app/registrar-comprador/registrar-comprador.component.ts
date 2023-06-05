import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-comprador',
  templateUrl: './registrar-comprador.component.html',
  styleUrls: ['./registrar-comprador.component.css']
})
export class RegistrarCompradorComponent {
  names: string = '';
  lastNames: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: number = 0;

  constructor(private router: Router) {}

  registrarComprador() {
    // Validar que todos los campos estén completos
    if (
      !this.names.trim() ||
      !this.lastNames.trim() ||
      !this.email.trim() ||
      !this.password.trim() ||
      !this.phoneNumber
    ) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    // Validar si el correo electrónico ya está registrado (puedes hacer una llamada a la API o usar una lógica específica)
    const correoRegistrado = false; // Variable de ejemplo, debes reemplazarla con la lógica adecuada
    if (correoRegistrado) {
      alert('El correo electrónico ya está registrado. Por favor, inicia sesión.');
      this.router.navigate(['/iniciar-sesion']);
      return;
    }

    // Si todos los datos son válidos, guardar los datos en la base de datos y redirigir a la página de inicio
    // Aquí debes implementar la lógica para guardar los datos en la base de datos

    // Simulamos una llamada a la API o guardado en la base de datos con un tiempo de espera de 2 segundos
    setTimeout(() => {
      alert('Registro exitoso. Serás redirigido a la página de inicio.');
      this.router.navigate(['/']);
    }, 2000);
  }
}
