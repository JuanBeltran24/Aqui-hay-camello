import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

export interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
  tipo: string;         // 'Residencial' | 'Comercial' | etc.
  rating: number;
  opiniones: number;
  distancia: string;
  tiempo: string;
  llegaEn: string;
  ubicacion: string;
  tarifa: number;
  porQueEl: string;
  verificado: boolean;
  foto: string;         // iniciales para el avatar
  color: string;        // color de fondo del avatar
}

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  servicio = 'Electricista';
  area = 'Neiva, Huila';
  filtroActivo = 'cercanos';

  areas = [
    'Neiva, Huila',
    'Bogotá, Cundinamarca',
    'Medellín, Antioquia',
    'Cali, Valle del Cauca',
    'Barranquilla, Atlántico'
  ];

  profesionales: Profesional[] = [
    {
      id: 1, nombre: 'Juan Perez', especialidad: 'Electricista',
      tipo: 'Residencial', rating: 4.7, opiniones: 100,
      distancia: '0.8 km', tiempo: '5 min', llegaEn: '10 min',
      ubicacion: 'Zona Norte (Neiva)', tarifa: 30000,
      porQueEl: 'Verificado y el más rápido.',
      verificado: true, foto: 'JP', color: '#1a6b5a'
    },
    {
      id: 2, nombre: 'Maria Paz', especialidad: 'Mecánica',
      tipo: 'Residencial', rating: 4.5, opiniones: 164,
      distancia: '0.8 km', tiempo: '5 min', llegaEn: '24 min',
      ubicacion: 'Zona Sur (Neiva)', tarifa: 25000,
      porQueEl: 'Máxima calidad verificada.',
      verificado: true, foto: 'MP', color: '#6a4c9c'
    },
    {
      id: 3, nombre: 'David Roa', especialidad: 'Carpintero',
      tipo: 'Residencial', rating: 4.2, opiniones: 200,
      distancia: '0.8 km', tiempo: '5 min', llegaEn: '30 min',
      ubicacion: 'Zona Oriente (Neiva)', tarifa: 20000,
      porQueEl: 'Verificado y económico.',
      verificado: true, foto: 'DR', color: '#c0392b'
    },
    {
      id: 4, nombre: 'Daniel Villa', especialidad: 'Mecánico',
      tipo: 'Residencial', rating: 4.1, opiniones: 100,
      distancia: '0.8 km', tiempo: '5 min', llegaEn: '35 min',
      ubicacion: 'Zona Norte (Neiva)', tarifa: 40000,
      porQueEl: 'Verificado y el más rápido.',
      verificado: true, foto: 'DV', color: '#2980b9'
    },
    {
      id: 5, nombre: 'Sofia Acost', especialidad: 'Chef',
      tipo: 'Residencial', rating: 4.3, opiniones: 164,
      distancia: '0.8 km', tiempo: '5 min', llegaEn: '14 min',
      ubicacion: 'Zona Sur (Neiva)', tarifa: 22000,
      porQueEl: 'Por su calidad verificada.',
      verificado: true, foto: 'SA', color: '#e67e22'
    },
    {
      id: 6, nombre: 'Julian Peña', especialidad: 'Tecn. Sistemas',
      tipo: 'Residencial', rating: 4.3, opiniones: 200,
      distancia: '0.8 km', tiempo: '5 min', llegaEn: '40 min',
      ubicacion: 'Zona Oriente (Neiva)', tarifa: 30500,
      porQueEl: 'Verificado y económico.',
      verificado: true, foto: 'JP', color: '#16a085'
    }
  ];

  // Marcadores del mapa (posiciones relativas en %)
  marcadores = [
    { nombre: 'Juan Pérez',   subtitulo: 'Profesional',  top: 58, left: 18 },
    { nombre: 'María Gómez',  subtitulo: 'Residencial',  top: 22, left: 68 },
    { nombre: 'Roberto Díaz', subtitulo: 'Profesional',  top: 65, left: 74 }
  ];

  setFiltro(filtro: string) {
    this.filtroActivo = filtro;
  }

  buscar() {
    console.log('Buscar:', this.servicio, this.area);
  }

  verPerfil(id: number) {
    console.log('Ver perfil:', id);
  }
}
