import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tasks:Array<{nombre:string, descripcion:string}> = []

  constructor() { 
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks)
    }
  }



  agregarTarea(task: {nombre: string, descripcion: string}) {
    this.tasks.push(task)
    this.updateLocalStorage();
  }

  getTareas() {
    return this.tasks
  }

  private updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  eliminarTarea(index:number) {
    this.tasks.splice(index, 1)
    this.updateLocalStorage()
  }

}
