import { Injectable } from '@angular/core';

import users from '../_files/users.json';
import { User } from '../type-definitions/User.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userList: User[] = users.users.slice();

  selectedUserToUpdate: User;

  userUpdated = new Subject<User>();
  userListUpdated = new Subject<User[]>();

  getUserById(id: number) {
    console.log(
      'user ID from service is ',
      this.userList.find((user: User) => user.id === id)
    );
    return this.userList.find((user: User) => user.id === id);
  }

  updateUserById(id: number, updatedUser: User) {
    console.log(this.selectedUserToUpdate);

    this.userUpdated.next(updatedUser);

    console.log('updated user', updatedUser);
    console.log('user list', this.userList);

    console.log(id);
    const foundIndex = this.userList.findIndex((user: User) => {
      return user.id == id;
    });

    console.log(foundIndex);

    this.userList[foundIndex] = updatedUser;

    console.log('updated user list final', this.userList);
  }
}
