import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyesnewtonComponent } from './leyesnewton.component';

describe('LeyesnewtonComponent', () => {
  let component: LeyesnewtonComponent;
  let fixture: ComponentFixture<LeyesnewtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeyesnewtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyesnewtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
