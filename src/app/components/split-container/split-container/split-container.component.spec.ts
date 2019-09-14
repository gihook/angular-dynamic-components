import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitContainerComponent } from './split-container.component';

describe('SplitContainerComponent', () => {
  let component: SplitContainerComponent;
  let fixture: ComponentFixture<SplitContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
