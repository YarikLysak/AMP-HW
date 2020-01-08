import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private AUTHORS_URL = 'http://localhost:3004/authors';

  constructor(private http: HttpClient) {}

  getAuthors(searchString): Observable<Author[]> {
    return this.http.get<Author[]>(this.AUTHORS_URL, {
      params: { textFragment: searchString }
    });
  }

  hello(searchString): Observable<Author[]> {
    return this.http.get<Author[]>(this.AUTHORS_URL, {
      params: { textFragment: searchString }
    });
  }
}
