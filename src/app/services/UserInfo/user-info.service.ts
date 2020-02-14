import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as exampleData from '../../db.json';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(public http: HttpClient) {
    this.getUserData().subscribe(data => {
      console.log(data);
    });
  }

  public getUserData(): Observable <any> {
    return of(exampleData.users);
  }

  public getUserDataById(userId) {
    return of(exampleData.users + userId);
  }

  public addNewUserData(user) {
    return of(exampleData.users, user);
  }

  public editUserDataById(user) {
    return of(exampleData.users, user);
  }

  public deleteUserDataById(user) {
    return of(exampleData.users + user);
  }
}
