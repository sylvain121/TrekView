import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStreetMapComponent } from './open-street-map.component';

describe('OpenStreetMapComponent', () => {
  let component: OpenStreetMapComponent;
  let fixture: ComponentFixture<OpenStreetMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenStreetMapComponent]
    });
    fixture = TestBed.createComponent(OpenStreetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
