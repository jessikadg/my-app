import { Component, Injectable } from '@angular/core';
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
  usersOnDetails: User[] = [];
  subscription!: Subscription;

  //setting default id
  id: number = 1;

  selectedUser: User | undefined = {
    id: 0,
    fullName: '',
    displayName: '',
    email: '',
    details: '',
  };

  constructor(public DataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.selectedUser = this.DataService.getUserById(this.id);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = value.fullName;
    console.log(newUser);
  }
}
