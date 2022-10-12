import { Component, OnInit } from '@angular/core';
import { IBlogPage } from '../objects/interfaces/blog-page';
import { BlogPageService } from '../services/blog-page.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, IBlogPage {
  private title: string = "Loading...";
  private content: string = "";
  private date: Date = new Date();
  private comments: [] = []

  constructor(private bps : BlogPageService) {

  }

  ngOnInit(): void {
    let params = (new URL(document.location.href)).searchParams;
    let uuid = params.get('id');

    if (uuid !== null) {
      this.bps.getData(uuid).subscribe((data:any) => {
        this.title = window.atob(data['title']);
        this.content = window.atob(data['content']);
        this.date = new Date(data['creation_date']['$date']);
      });
    }
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  getDate(): Date{
    return this.date;
  }

  getComments(): [] {
    return this.comments;
  }
}
