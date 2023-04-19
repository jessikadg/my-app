import { Component } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  usersOnDetails: User[] = [];
  constructor(public DataService: DataService) {}

  ngOnInit() {
    console.log(this.DataService.userList);
    this.usersOnDetails = this.DataService.userList;
  }
}
