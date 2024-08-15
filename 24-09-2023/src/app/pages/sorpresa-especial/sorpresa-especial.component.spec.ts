import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorpresaEspecialComponent } from './sorpresa-especial.component';

describe('SorpresaEspecialComponent', () => {
  let component: SorpresaEspecialComponent;
  let fixture: ComponentFixture<SorpresaEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorpresaEspecialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorpresaEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
