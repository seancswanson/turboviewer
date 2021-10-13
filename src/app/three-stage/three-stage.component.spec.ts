import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStageComponent } from './three-stage.component';

describe('ThreeStageComponent', () => {
  let component: ThreeStageComponent;
  let fixture: ComponentFixture<ThreeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
