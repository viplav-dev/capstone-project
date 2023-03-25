import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostsigninComponent } from './header-postsignin.component';

describe('HeaderPostsigninComponent', () => {
  let component: HeaderPostsigninComponent;
  let fixture: ComponentFixture<HeaderPostsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPostsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPostsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
