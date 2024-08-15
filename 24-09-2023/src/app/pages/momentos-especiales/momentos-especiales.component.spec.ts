import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentosEspecialesComponent } from './momentos-especiales.component';

describe('MomentosEspecialesComponent', () => {
  let component: MomentosEspecialesComponent;
  let fixture: ComponentFixture<MomentosEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomentosEspecialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentosEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
