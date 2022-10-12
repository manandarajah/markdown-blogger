import { Component, OnInit } from '@angular/core';
import { IBlogPage } from '../objects/interfaces/blog-page';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  title: string | null = "Loading...";
  private title_char_limit: number = 38;
  blogs: any[] = [];

  constructor(private cs : CategoriesService) { }

  ngOnInit(): void {

  }

  ngDoCheck() {
    let params = (new URL(document.location.href)).searchParams;
    let category = params.get('val');

    if (category !== null && category !== this.title) {
      this.cs.getBlogs(category).subscribe((data:any) => {
        this.title = category;
        this.blogs = data;

        for (let blog of this.blogs) {
          blog.title = window.atob(blog.title);
          blog.title = blog.title.length >= this.title_char_limit ? blog.title.replace(blog.title.substring(this.title_char_limit),"...") : blog.title;

          blog.summary = window.atob(blog.summary);
          blog.content = window.atob(blog.content);
          blog.creation_date = new Date(blog.creation_date['$date']);
        }
      });
    }
  }
}
