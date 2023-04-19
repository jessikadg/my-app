import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  usersOnDetails: User[] = [];
  // id: number;

  constructor(
    public DataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.DataService.userList);
    this.usersOnDetails = this.DataService.userList;

    this.route.params.subscribe((params: Params) => {
      // this.id = +params['id'];
      // console.log(this.id);
    });
  }
}
