import { Injectable } from '@angular/core';

import users from '../_files/users.json';
import { User } from '../type-definitions/User.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userList: User[] = users.users;

  selectedUserToUpdate: User;

  userUpdated = new Subject<User>();

  getUserById(id: number) {
    console.log(
      'user ID from service is ',
      this.userList.find((user: User) => user.id === id)
    );
    return this.userList.find((user: User) => user.id === id);
  }

  updateUserById(id: Number, updatedUser: User) {
    console.log(this.selectedUserToUpdate);

    this.userUpdated.next(updatedUser);

    console.log('updated user', updatedUser);
    console.log('user list', this.userList);
  }
}
