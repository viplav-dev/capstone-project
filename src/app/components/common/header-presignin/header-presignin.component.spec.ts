import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPresigninComponent } from './header-presignin.component';

describe('HeaderPresigninComponent', () => {
  let component: HeaderPresigninComponent;
  let fixture: ComponentFixture<HeaderPresigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPresigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPresigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
