import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  usersOnDetails: User[] = [];

  //setting default id
  id: number = 1;

  constructor(public DataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.usersOnDetails = this.DataService.userList;

    // getting ID from routing params:
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
}
