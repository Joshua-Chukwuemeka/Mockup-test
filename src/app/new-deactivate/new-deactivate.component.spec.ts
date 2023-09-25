import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeactivateComponent } from './new-deactivate.component';

describe('NewDeactivateComponent', () => {
  let component: NewDeactivateComponent;
  let fixture: ComponentFixture<NewDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeactivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
