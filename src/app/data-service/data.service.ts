import { Injectable } from '@angular/core';

import users from '../_files/users.json';
import { User } from '../type-definitions/User.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userList: User[] = users.users;
  selectedUserToUpdate: any = {};

  userUpdated = new Subject<User>();

  getUserById(id: number) {
    console.log(
      'user ID from service is ',
      this.userList.find((user: User) => user.id === id)
    );
    return this.userList.find((user: User) => user.id === id);
  }

  updateUserById(id: Number, user: any) {
    console.log('User updated to', id, user);
    this.selectedUserToUpdate = this.userList.find(
      (foundUser: User) => foundUser.id === user.id
    );
    console.log(this.selectedUserToUpdate);
    this.userUpdated.next(this.selectedUserToUpdate);
  }
}
