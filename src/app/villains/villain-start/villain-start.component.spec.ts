import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainStartComponent } from './villain-start.component';

describe('VillainStartComponent', () => {
  let component: VillainStartComponent;
  let fixture: ComponentFixture<VillainStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
