import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitanciaComponent } from './capacitancia.component';

describe('CapacitanciaComponent', () => {
  let component: CapacitanciaComponent;
  let fixture: ComponentFixture<CapacitanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
