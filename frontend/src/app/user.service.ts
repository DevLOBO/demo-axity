import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  url = 'http://localhost:8080/users';

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
