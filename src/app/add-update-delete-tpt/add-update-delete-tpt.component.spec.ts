import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteTPTComponent } from './add-update-delete-tpt.component';

describe('AddUpdateDeleteTPTComponent', () => {
  let component: AddUpdateDeleteTPTComponent;
  let fixture: ComponentFixture<AddUpdateDeleteTPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteTPTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDeleteTPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
