import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavotiteComponentComponent } from './favotite-component.component';

describe('FavotiteComponentComponent', () => {
  let component: FavotiteComponentComponent;
  let fixture: ComponentFixture<FavotiteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavotiteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavotiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
