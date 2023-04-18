import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCapacitanciaComponent } from './info-capacitancia.component';

describe('InfoCapacitanciaComponent', () => {
  let component: InfoCapacitanciaComponent;
  let fixture: ComponentFixture<InfoCapacitanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCapacitanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCapacitanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
