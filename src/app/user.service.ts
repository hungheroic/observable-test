import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../app/models/user';

const baseUrl: string = 'https://api.github.com/users/hungheroic';

@Injectable()
export class UserService {

  private user: User;
  constructor(private http: Http) {
    //this.user = this.getUser();
  }

  getUser(): Observable<User> {
    return Observable.create(observer => {
      this.http.get(baseUrl)
        .map((res: Response) => res.json())
        .subscribe(data => {
          setTimeout(() => {
            observer.next(this.mapUser(data));
            observer.complete();
          }, 3000);
        });
    });
  }
  get currentUser() {
    return this.user;
  }

  set currentUser(data) {
    this.user = this.mapUser(data);
  }

  private mapUser(data): User {
    return new User(data.id, data.login);
  }

  private isUserDataLost(): boolean {
    return localStorage.getItem('token') !== null && (this.user === undefined || this.user === null);
  }

}
