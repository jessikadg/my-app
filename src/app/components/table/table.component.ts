import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  users: any;

  constructor(public DataService: DataService) {}

  ngOnInit() {
    this.users = this.DataService.getUsers();
    console.log(this.users);
  }
}
