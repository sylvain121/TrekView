import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekEditDialogComponent } from './trek-edit-dialog.component';

describe('TrekEditDialogComponent', () => {
  let component: TrekEditDialogComponent;
  let fixture: ComponentFixture<TrekEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrekEditDialogComponent]
    });
    fixture = TestBed.createComponent(TrekEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
