import { User } from './user';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  users: User[] = [];

  constructor() { 
   this.users = [
     new User('Diana'),
     new User('Ben'),
     new User('Tina'),
     new User('Kris')
   ]
  }

}
