import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAccionReciclajeComponent } from './registro-accion-reciclaje.component';

describe('RegistroAccionReciclajeComponent', () => {
  let component: RegistroAccionReciclajeComponent;
  let fixture: ComponentFixture<RegistroAccionReciclajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAccionReciclajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroAccionReciclajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
