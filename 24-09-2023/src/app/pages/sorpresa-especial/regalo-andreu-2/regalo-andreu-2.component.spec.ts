import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaloAndreu2Component } from './regalo-andreu-2.component';

describe('RegaloAndreu2Component', () => {
  let component: RegaloAndreu2Component;
  let fixture: ComponentFixture<RegaloAndreu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegaloAndreu2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegaloAndreu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
