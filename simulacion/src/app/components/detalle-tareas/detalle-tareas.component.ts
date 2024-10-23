import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-detalle-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-tareas.component.html',
  styleUrl: './detalle-tareas.component.scss'
})
export class DetalleTareasComponent implements OnInit{
  tasks: Array<{ nombre: string, descripcion: string }> = []

  constructor(private tareasService: TareasService) {}


  ngOnInit(): void {
    this.tasks = this.tareasService.getTareas()
  }

  eliminarTarea(index: number) {
    this.tareasService.eliminarTarea(index)
    this.tasks = this.tareasService.getTareas() // Actualizar la lista de tareas
  }

}
