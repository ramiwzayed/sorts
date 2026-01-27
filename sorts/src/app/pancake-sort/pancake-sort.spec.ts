import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeSort } from './pancake-sort';

describe('PancakeSort', () => {
  let component: PancakeSort;
  let fixture: ComponentFixture<PancakeSort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PancakeSort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancakeSort);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
