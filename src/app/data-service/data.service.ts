import { Injectable } from '@angular/core';

import users from '../_files/users.json';
import { User } from '../type-definitions/User.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userList: User[] = users.users;
}
