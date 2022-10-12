import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlogFormComponent } from './post-blog-form.component';

describe('PostBlogFormComponent', () => {
  let component: PostBlogFormComponent;
  let fixture: ComponentFixture<PostBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBlogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
