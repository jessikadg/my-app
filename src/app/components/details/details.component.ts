import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  selectedUser: User | undefined = {
    id: 0,
    fullName: '',
    displayName: '',
    email: '',
    details: '',
  };

  constructor(
    public DataService: DataService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  updateUserForm = this.formBuilder.group({
    fullName: '',
    email: '',
    displayName: '',
    details: '',
  });

  ngOnInit() {
    this.usersOnDetails = this.DataService.userList;

    // getting ID from routing params:
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.selectedUser = this.DataService.getUserById(this.id);

    //Pre-filling the Form with Data from the Service:
    this.updateUserForm
      .get('fullName')
      ?.setValue(this.selectedUser?.fullName || 'Name');

    this.updateUserForm
      .get('email')
      ?.setValue(this.selectedUser?.email || 'Email');

    this.updateUserForm
      .get('displayName')
      ?.setValue(this.selectedUser?.displayName || 'Display Name');

    this.updateUserForm
      .get('details')
      ?.setValue(this.selectedUser?.details || 'Details');
  }

  onSubmit(): void {
    console.log(this.updateUserForm.value);
  }
}
