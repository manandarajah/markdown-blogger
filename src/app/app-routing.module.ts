import { NgModule, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPageService } from './services/blog-page.service';
import { PostBlogFormComponent } from './post-blog-form/post-blog-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoriesService } from './services/categories.service';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: "blog", title: 'Blog', component: BlogPageComponent },
  { path: "post-blog", component: PostBlogFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "category", title: 'Category', component: CategoryPageComponent }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title, private bps : BlogPageService, private cs : CategoriesService) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    let title = this.buildTitle(routerState);
    if (title !== undefined) {
      let params = (new URL(document.location.href)).searchParams;

      if (params.has('id')) {
        let uuid = params.get('id');

        if (uuid !== null) {
          this.bps.getData(uuid).subscribe((data:any) => {
            this.title.setTitle(window.atob(data['title']));
          });
        }
      }

      else {
        this.title.setTitle(params.get('val') || "Mugiesshan's Blog");
      }
    }

    else {
      this.title.setTitle(`Mugiesshan's Blog`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
