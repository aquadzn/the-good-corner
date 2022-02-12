import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiImageSizeComponent } from './api-image-size.component';

describe('ApiImageSizeComponent', () => {
  let component: ApiImageSizeComponent;
  let fixture: ComponentFixture<ApiImageSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiImageSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiImageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
