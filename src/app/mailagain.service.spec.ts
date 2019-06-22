import { TestBed } from '@angular/core/testing';

import { MailagainService } from './mailagain.service';

describe('MailagainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailagainService = TestBed.get(MailagainService);
    expect(service).toBeTruthy();
  });
});
