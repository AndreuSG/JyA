import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaloLydiaCristianComponent } from './regalo-lydia-cristian.component';

describe('RegaloLydiaCristianComponent', () => {
  let component: RegaloLydiaCristianComponent;
  let fixture: ComponentFixture<RegaloLydiaCristianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegaloLydiaCristianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegaloLydiaCristianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
