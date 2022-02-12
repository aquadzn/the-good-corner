import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiImageWidthHeightComponent } from './api-image-width-height.component';

describe('ApiImageWidthHeightComponent', () => {
  let component: ApiImageWidthHeightComponent;
  let fixture: ComponentFixture<ApiImageWidthHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiImageWidthHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiImageWidthHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
