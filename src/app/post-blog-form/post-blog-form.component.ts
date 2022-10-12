import { Component, OnInit, ElementRef } from '@angular/core';
import { BlogPageService } from '../services/blog-page.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-post-blog-form',
  templateUrl: './post-blog-form.component.html',
  styleUrls: ['./post-blog-form.component.scss']
})
export class PostBlogFormComponent implements OnInit {
  uuid: string | null = "";
  blog_uuid: string = "";
  title: string = "";
  summary: string = "";
  content: string = "";
  categories: string[] = [];
  blogs: any[] = [];

  constructor(private bps : BlogPageService, private us : UsersService) {

  }

  ngOnInit(): void {
    this.bps.getData('').subscribe((data:any) => {
      this.blogs = data;

      for (let blog of this.blogs)
        blog.title = window.atob(blog.title);
    });
  }

  ngDoCheck() {
    const uuid = sessionStorage.getItem("localUuid");

    if (uuid !== null && this.uuid === "") {
      this.us.getData(uuid).subscribe((data:any) => {
        if (data['role'] === "admin") this.uuid = uuid;
      });
    }

    else if (uuid === null) {
      this.uuid = "";
    }
  }

  upload(formdata: any) {
    formdata.categories = formdata.categories.toString();
    formdata.title = window.btoa(formdata.title);
    formdata.summary = window.btoa(formdata.summary);
    formdata.content = window.btoa(formdata.content);
    this.bps.uploadBlog(formdata).subscribe((data:any) => console.log(data));

  }

  update(formdata: any) {
    this.blog_uuid = formdata.select_blog.uuid || "";
    this.title = formdata.select_blog.title;
    this.summary = window.atob(formdata.select_blog.summary);
    this.content = window.atob(formdata.select_blog.content);
    this.categories = formdata.select_blog.categories.split(",");

  }
}
