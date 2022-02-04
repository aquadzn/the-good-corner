import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPageComponent } from './images-page.component';

describe('ImagesPageComponent', () => {
  let component: ImagesPageComponent;
  let fixture: ComponentFixture<ImagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
