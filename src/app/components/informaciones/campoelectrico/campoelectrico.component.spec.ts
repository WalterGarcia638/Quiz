import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoelectricoComponent } from './campoelectrico.component';

describe('CampoelectricoComponent', () => {
  let component: CampoelectricoComponent;
  let fixture: ComponentFixture<CampoelectricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoelectricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoelectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
