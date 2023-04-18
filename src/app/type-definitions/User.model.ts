import { EmailValidator } from '@angular/forms';

export class User {
  public id: number;
  public fullName: string;
  public email: EmailValidator;
  details: string;

  constructor(
    id: number,
    fullName: string,
    email: EmailValidator,
    details: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.details = details;
  }
}
