import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCampanaComponent } from './registro-campana.component';

describe('RegistroCampanaComponent', () => {
  let component: RegistroCampanaComponent;
  let fixture: ComponentFixture<RegistroCampanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCampanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroCampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
