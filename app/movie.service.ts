import {Injectable, Component} from "@angular/core";
import {Http} from "@angular/http";
import {Movie} from "./movie";

@Injectable()
export class MovieService {

  constructor(private http: Http){}

  getAllMovies(): Promise<Movie[]> {
    return Promise.resolve(
      this.http.get("http://movie-database.herokuapp.com/movies")
    );
  }
}
