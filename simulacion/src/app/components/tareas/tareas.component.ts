import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss',
})
export class TareasComponent {
  nombreTarea: string = ''; // Variable para almacenar el nombre de la tarea
  descripcionTarea: string = ''; // Variable para almacenar la descripción de la tarea

  constructor(private servicioTarea: TareasService) {}

  agregarTarea() {
    if (this.nombreTarea.trim() || this.descripcionTarea.trim()) {
      this.servicioTarea.agregarTarea({
        nombre: this.nombreTarea,
        descripcion: this.descripcionTarea,
      });
      this.nombreTarea = '';
      this.descripcionTarea = '';
    } else {
      console.log('Faltan valores.');
    }
  }
}
