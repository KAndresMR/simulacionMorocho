import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareasComponent } from './detalle-tareas.component';

describe('DetalleTareasComponent', () => {
  let component: DetalleTareasComponent;
  let fixture: ComponentFixture<DetalleTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
