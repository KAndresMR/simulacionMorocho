import { Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { DetalleTareasComponent } from './components/detalle-tareas/detalle-tareas.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'agregar_tarea', component: TareasComponent },
    { path: 'detalle_tarea', component: DetalleTareasComponent },
];
