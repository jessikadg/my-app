import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';
import { Users } from 'src/app/type-definitions/User.model';
import * as userData from '../../_files/users.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  public userList: any = userData;
  users = Users;

  constructor(public DataService: DataService) {}

  ngOnInit() {
    console.log(this.userList.users);
    this.users = this.userList.users;
  }
}
