import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeycoulombComponent } from './leycoulomb.component';

describe('LeycoulombComponent', () => {
  let component: LeycoulombComponent;
  let fixture: ComponentFixture<LeycoulombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeycoulombComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeycoulombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
