import { Component, OnInit } from "@angular/core";
import {
  MovieApiService,
  MovieList,
  Movie
} from "../movie-api.service";
import { MovieService } from "../movie.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  favorites: any;

  constructor(
    public _movieApiService: MovieApiService,
    public _movieService: MovieService
  ) {}

  ngOnInit() {
    this.populateFavorites();
  }

  populateFavorites() {
    this._movieService.getFavorites().subscribe((res: any) => {
    
      // create an array of cold observables that represent the http.get requests that don't fire until something listens using subscribe
      const requests = res.map(favorite =>
        this._movieApiService.getMovie(favorite.movieId)
      );
      
      // forkJoin operator is used when you have a group of observables and only care about the final emitted value of each. Use when you only want to take action when a response has been received for all.
      forkJoin(requests).subscribe(moviesArray => {
        this.favorites = moviesArray;
      });

    });
  }
}
