import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pasos = [
    {
      numero: 1,
      icono: 'person_add',
      titulo: 'Regístrate',
      descripcion: 'Crea tu cuenta para poder buscar, contactar y agendar servicios.'
    },
    {
      numero: 2,
      icono: 'search',
      titulo: 'Busca y elige',
      descripcion: 'Encuentra al profesional ideal según las necesidades, opiniones y disponibilidad.'
    },
    {
      numero: 3,
      icono: 'calendar_month',
      titulo: 'Agenda',
      descripcion: 'Elige la fecha y hora que mejor te convenga y confirma la solicitud.'
    },
    {
      numero: 4,
      icono: 'check_circle',
      titulo: 'Servicio realizado',
      descripcion: 'El profesional realiza el servicio y tú calificas el trabajo.'
    }
  ];
}
