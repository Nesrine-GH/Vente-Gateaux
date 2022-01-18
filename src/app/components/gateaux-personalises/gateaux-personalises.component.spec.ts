import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateauxPersonalisesComponent } from './gateaux-personalises.component';

describe('GateauxPersonalisesComponent', () => {
  let component: GateauxPersonalisesComponent;
  let fixture: ComponentFixture<GateauxPersonalisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateauxPersonalisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateauxPersonalisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
