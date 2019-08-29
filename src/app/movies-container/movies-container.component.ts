import { Component, OnInit, Input } from '@angular/core';
import { MovieApiService, MovieList, Movie } from '../movie-api.service'
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {

  @Input() moviesCategory;
  movies: any;

  constructor(public _movieApiService: MovieApiService, public _movieService: MovieService) { }

  ngOnInit() {
    this.populateMovies()
  }

  populateMovies(){
    this._movieApiService.getMovies(this.moviesCategory)
    .subscribe((res: MovieList) => {
        this.movies = res.results;
    })
  }

  getMovieImagePath(poster_path: string){
    return this._movieApiService.getMovieImagePath(poster_path)
  }

  addToFavorites(movie: Movie){
    this._movieService.addToFavorites(movie).subscribe((res: any) => {
      // todo - populate local favorites
    })
  }

}