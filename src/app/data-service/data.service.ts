import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../type-definitions/User.model';
import { Observable } from 'rxjs';

// if your service gets another service injected, you need injectables()
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    this.getUsers().subscribe((data) => {
      console.log(data);
    });
  }

  public getUsers() {
    return this.http.get('assets/users.json');
  }
}
