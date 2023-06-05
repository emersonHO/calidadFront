import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    // Obtener los valores de los campos del formulario
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    // Validar que ambos campos estén completos
    if (!email.trim() || !password.trim()) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    // Verificar si la contraseña es correcta (puedes hacer una llamada a la API o usar una lógica específica)
    const passwordCorrecta = false; // Variable de ejemplo, debes reemplazarla con la lógica adecuada
    if (!passwordCorrecta) {
      alert('La contraseña ingresada no es válida. Por favor, intenta nuevamente.');
      return;
    }

    // Si todos los datos son válidos, redirigir a la página principal
    this.router.navigate(['/pagina-principal']);
  }
}
