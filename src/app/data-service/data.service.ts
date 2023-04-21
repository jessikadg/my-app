import { Injectable } from '@angular/core';

import users from '../_files/users.json';
import { User } from '../model/User.model';
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
    return this.userList.find((user: User) => user.id === id);
  }

  updateUserById(id: number, updatedUser: User) {
    this.userUpdated.next(updatedUser);
    const foundIndex = this.userList.findIndex((user: User) => {
      return user.id == id;
    });

    this.userList[foundIndex] = updatedUser;
  }
}
