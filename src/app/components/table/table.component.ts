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
  public userList: User[] = users.users;

  usersForTable: User[] = [];

  constructor(public DataService: DataService) {}

  ngOnInit() {
    console.log(this.userList);
    this.usersForTable = this.userList;
  }

  onSortById() {
    this.usersForTable.sort((a, b) => a.id - b.id);
    console.log(this.usersForTable.sort((a, b) => a.id - b.id));
  }

  onSortByName() {
    this.usersForTable.sort((a, b) => a.fullName.localeCompare(b.fullName));
  }
}
