import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'dating-blog';
  name: string = 'Log in';

  constructor(private us : UsersService) {

  }

  ngOnInit(): void {

  }

  ngDoCheck() {
    const uuid = sessionStorage.getItem('localUuid');

    if (uuid !== (null && '') && this.name === 'Log in') {
      this.us.getData(uuid).subscribe((data:any) => {
        this.name = data['firstname'] + ' ' + data['lastname'];
      });
    }
  }

  logout() {
    sessionStorage.removeItem('localUuid');
    this.name = 'Log in';
  }

  login(formdata: any) {
    this.us.exist(formdata).subscribe((data:any) => {
      sessionStorage.setItem("localUuid", data['uuid']);
      console.log("session created " + sessionStorage.getItem('localUuid'));
    });
  }
}
