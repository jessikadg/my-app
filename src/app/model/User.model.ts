export class User {
  public id: number;
  public fullName: string;
  public displayName: string;
  public email: string;
  public details: string;

  constructor(
    id: number,
    fullName: string,
    email: string,
    details: string,
    displayName: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.details = details;
    this.displayName = displayName;
  }
}
