import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsListItemComponent } from './villains-list-item.component';

describe('VillainsListItemComponent', () => {
  let component: VillainsListItemComponent;
  let fixture: ComponentFixture<VillainsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
