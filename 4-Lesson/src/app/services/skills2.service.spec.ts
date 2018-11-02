import { TestBed } from '@angular/core/testing';

import { Skills2Service } from './skills2.service';

describe('Skills2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Skills2Service = TestBed.get(Skills2Service);
    expect(service).toBeTruthy();
  });
});
