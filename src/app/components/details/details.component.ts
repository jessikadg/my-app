import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data-service/data.service';
import { User } from 'src/app/type-definitions/User.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @ViewChild('f', { read: NgForm }) updateUserForm: NgForm;

  usersOnDetails: User[] = [];
  subscription: Subscription;
  id: number;
  selectedUser: User = {
    id: 0,
    fullName: '',
    displayName: '',
    email: '',
    details: '',
  };

  userWasUpdatedDone: Subscription;

  constructor(public DataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.selectedUser = this.DataService.getUserById(this.id)!;

    this.userWasUpdatedDone = this.DataService.userUpdated.subscribe(
      (user: User) => {
        // find the user by id, and assign that one to selectedUser
        this.selectedUser = user;
      }
    );
  }

  onSubmit(form: NgForm) {
    this.DataService.updateUserById(
      this.selectedUser.id,
      this.updateUserForm.value
    );
  }
}
