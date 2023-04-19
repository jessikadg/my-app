import { Component } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  usersForTable: User[] = [];

  constructor(public DataService: DataService) {}

  ngOnInit() {
    console.log(this.DataService.userList);
    this.usersForTable = this.DataService.userList;
  }

  onSortById() {
    this.usersForTable.sort((a, b) => a.id - b.id);
    console.log(this.usersForTable.sort((a, b) => a.id - b.id));
  }

  onSortByName() {
    this.usersForTable.sort((a, b) => a.fullName.localeCompare(b.fullName));
  }
}
