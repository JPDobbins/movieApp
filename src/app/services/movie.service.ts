/**
 * 
 * A service, provides help to the movie it is named after
 *    In this case we are handling the API calls 
 *    Services are defined by classes as per OOP
 *    This is similar to a controller 
 * 
 *  - SearchType: Used for the API call
 *        - TypeScript requires the use of OOP, so we define our enum here
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com';
  apiKey = 'ff07d96f';

  // constructor function
  constructor(private http: HttpClient) { }

  // custom class function name, input parameters, returned object<type>, function code
  searchData(title: string, type: SearchType): Observable<any> {
      return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
      .pipe(
        map(results => results['Search']) // show only the results containing the 'Search' field
      );
    }

    getDetails(id) {
      return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`)
    }
  
}
