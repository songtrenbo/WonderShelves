import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBookByCategoryComponent } from './carousel-book-by-category.component';

describe('CarouselBookByCategoryComponent', () => {
  let component: CarouselBookByCategoryComponent;
  let fixture: ComponentFixture<CarouselBookByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBookByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBookByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
