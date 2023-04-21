import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  usersForTable: User[] = [];

  userWasUpdatedDone: Subscription;
  userUpdated: User;
  color: string = '';

  constructor(public DataService: DataService) {}

  ngOnInit() {
    this.usersForTable = this.DataService.userList;

    this.userWasUpdatedDone = this.DataService.userUpdated.subscribe(
      (user: User) => {
        this.userUpdated = user;
      }
    );
  }

  onSortById() {
    this.usersForTable.sort((a, b) => a.id - b.id);
  }

  onSortByName() {
    this.usersForTable.sort((a, b) => a.fullName.localeCompare(b.fullName));
  }
}
