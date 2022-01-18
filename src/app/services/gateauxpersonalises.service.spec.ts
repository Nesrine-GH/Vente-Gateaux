import { TestBed } from '@angular/core/testing';

import { GateauxPersonalisesService } from './gateauxpersonalises.service';

describe('ProduitsService', () => {
  let service: GateauxPersonalisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GateauxPersonalisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

