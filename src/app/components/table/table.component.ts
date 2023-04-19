import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';
import users from '../../_files/users.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  // type should be Observable<> if it comes from a service.
  public userList: User[] = users.users;

  usersForTable: User[] = [];
  // users = User[];

  public usersHardCoded: User[] = [
    // new User(1, 'John Test', 'Display John', 'email@email.com', 'description'),
    // this.userList.map(())
  ];

  constructor(public DataService: DataService) {}

  ngOnInit() {
    console.log(this.userList);
    this.usersForTable = this.userList;
    this.usersHardCoded = this.usersHardCoded;
    // console.log(this.usersHardCoded);
  }
}
