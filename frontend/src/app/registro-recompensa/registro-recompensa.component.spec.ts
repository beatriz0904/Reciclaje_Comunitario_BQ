import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRecompensaComponent } from './registro-recompensa.component';

describe('RegistroRecompensaComponent', () => {
  let component: RegistroRecompensaComponent;
  let fixture: ComponentFixture<RegistroRecompensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroRecompensaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
