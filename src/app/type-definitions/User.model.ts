import { EmailValidator } from '@angular/forms';

export class Users {
  public id: number;
  public fullName: string;
  public email: string;
  public details: string;

  constructor(id: number, fullName: string, email: string, details: string) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.details = details;
  }
}
[];
