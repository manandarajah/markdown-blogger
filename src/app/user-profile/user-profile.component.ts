import { Component, OnInit } from '@angular/core';
import { IUsersInfo } from '../objects/interfaces/users-info';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, IUsersInfo {
  private username: string = "";
  private birth_date: Date = new Date();
  private creation_date: Date = new Date();
  private email: string = "";
  private firstname: string = "";
  private lastname: string = "";
  private phone: number = 0;
  private role: string = "";

  constructor(private us : UsersService) { }

  ngOnInit(): void {
    const uuid = sessionStorage.getItem('localUuid');

    if (uuid !== null) {
      this.us.getData(uuid).subscribe((data:any) => {
        this.username = data['username'];
        this.birth_date = new Date(data['birthday']['$date']);
        this.creation_date = new Date(data['creation_date']['$date']);
        this.email = data['email'];
        this.firstname = data['firstname'];
        this.lastname = data['lastname'];
        this.phone = data['phone'];
        this.role = data['role'];
      });
    }
  }

  getBirthday(): Date {
    return this.birth_date;
  }

  getCreationDate(): Date {
    return this.creation_date;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  getFirstname(): string {
    return this.firstname;
  }

  setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  getLastname(): string {
    return this.lastname;
  }

  setPhone(phone: number): void {
    this.phone = phone;
  }

  getPhone(): number {
    return this.phone;
  }

  getRole(): string {
    return this.role;
  }

  getUsername(): string {
    return this.username;
  }
}
