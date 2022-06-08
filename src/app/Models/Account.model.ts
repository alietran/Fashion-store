export class Account
{
    id:number;
    username:string;
    password:string;
    phone:number;
    email:string;
    constructor(id:number, username: string, password:string, phone: number, email: string){
      this.id = id;
      this.username= username;
      this.password = password;
      this.phone= phone;
      this.email = email;

    }
}
