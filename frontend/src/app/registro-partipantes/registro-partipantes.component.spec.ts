import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPartipantesComponent } from './registro-partipantes.component';

describe('RegistroPartipantesComponent', () => {
  let component: RegistroPartipantesComponent;
  let fixture: ComponentFixture<RegistroPartipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPartipantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroPartipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
