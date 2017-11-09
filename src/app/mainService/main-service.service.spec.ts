import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './main-service.service';

describe('MainServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
