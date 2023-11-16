// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isAuthenticated: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const role = this.authService.login(this.email, this.password);

    if (role) {
      console.log(`Inicio de sesión exitoso como ${role}`);
      this.redirectByRole(role);
    } else {
      console.log('Credenciales incorrectas');
      // Puedes mostrar un mensaje de error en el formulario
      this.isAuthenticated = false;
    }
  }

  private redirectByRole(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'cliente':
        this.router.navigate(['/generic-dashboard']);
        break;
      case 'invitado':
        // Puedes redirigir a otra página para invitados si es necesario
        break;
      default:
        break;
    }
  }
}
