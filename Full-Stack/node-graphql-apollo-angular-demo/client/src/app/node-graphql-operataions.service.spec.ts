import { TestBed } from '@angular/core/testing';

import { NodeGraphqlOperataionsService } from './node-graphql-operataions.service';

describe('NodeGraphqlOperataionsService', () => {
  let service: NodeGraphqlOperataionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeGraphqlOperataionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
