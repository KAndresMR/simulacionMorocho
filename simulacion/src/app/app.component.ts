import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { DetalleTareasComponent } from './components/detalle-tareas/detalle-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TareasComponent, DetalleTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simulacion';
}
