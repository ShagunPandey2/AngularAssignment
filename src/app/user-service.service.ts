import { Injectable,inject } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url='https://jsonplaceholder.typicode.com'
  httpclient=inject(HttpClient);
  private userDataSubject =new BehaviorSubject<any>(null);
  userData$=this.userDataSubject.asObservable();


  constructor() { }

  getUserById(id:number):Observable<Users|undefined>{
    return this.httpclient.get<Users>(`${this.url}/users/${id}`)
  }
  setUserData(userData:any):void{
    this.userDataSubject.next(userData);
  }
}
