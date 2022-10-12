import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(private us : UsersService) { }

  ngOnInit(): void {
  }

  registerUser(formdata: any) {
    if (formdata.password === formdata.cpassword)
      this.us.insert(formdata).subscribe((data:any) => console.log("this works"));
  }
}
