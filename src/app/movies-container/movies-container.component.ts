import { Component, OnInit, Input } from '@angular/core';
import { MovieApiService, Response, ResponseResults } from '../movie-api.service'
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
    .subscribe((res: Response) => {
        this.movies = res.results;
    })
  }

  getMoviePath(poster_path: string){
    return this._movieApiService.imageBaseUrl 
            + this._movieApiService.posterSizes[4] 
            + poster_path;
  }

  addToFavorites(movieTitle: string){
    this._movieService.addToFavorites(movieTitle).subscribe((res: any) => {
      console.log(res);
    })
  }

}