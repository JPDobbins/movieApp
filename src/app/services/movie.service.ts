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
      var result;
      console.log('searcData triggered');
      //http://www.omdbapi.com/?i=tt3896198&apikey=ff07d96f
      //http://www.omdbapi.com/?i=${encodeURI(title)}&type=${type}&apikey=ff07d96f
      // return this.http.get(`http://www.omdbapi.com/?i=${encodeURI(title)}&type=${type}&apikey=ff07d96f`)
      return this.http.get(`http://www.omdbapi.com/?s=${ encodeURI(title) }&plot=full&apikey=ff07d96f`)
      .pipe(
        // show only the results containing the 'Search' field
        map(results => {
          console.log('RAW: ', results);
          return results['Search'];
        }));
    }

    getDetails(id) {
      return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`)
    }
  
}
