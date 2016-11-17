import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../app/user.service';

@Injectable()
export class UserResolve implements Resolve<any> {
  
  constructor(private userService: UserService) {}
  
  resolve() {
    return this.userService.getUser();
  }
}