import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  // Visibilidad de contraseñas
  showPassword = false;
  showConfirmPassword = false;

  // Datos del formulario
  form = {
    nombre: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    aceptaTerminos: false
  };

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmitCliente() {
    console.log('Registro cliente:', this.form);
    // Aquí irá la lógica de autenticación
  }

  onSubmitProfesional() {
    console.log('Registro profesional:', this.form);
    // Aquí irá la lógica de autenticación
  }
}
