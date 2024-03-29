/**
 * 
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchterm = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.searchterm, this.type);

    // this.results.subscribe(res => {

    // })
  }


}
