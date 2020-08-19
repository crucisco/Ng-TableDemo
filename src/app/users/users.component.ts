import { Component, OnInit } from '@angular/core';
import { UserService, IUserService } from '../user.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  Users: any[];
  filteredUsers: any[];
  errorMessage: string;
  searchTerm: string = '';
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetUsers().subscribe(
      data => {
        this.Users = <any[]>data;
        this.Users = this.Users.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.filteredUsers = this.Users;
      },
      error => this.errorMessage = error
    );
  }

  filterUsers() : void {
     this.filteredUsers = this.Users.filter(f => f.name.toLocaleLowerCase().substr(0, this.searchTerm.length) == this.searchTerm.toLocaleLowerCase())
  }

  resetAllBalances() : void {
    this.filteredUsers.forEach(u => {
      u.balance = '0';
    });
  }
}
