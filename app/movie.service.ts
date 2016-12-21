import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Movie} from "./movie";

@Injectable()
export class MovieService {

  http: Http;

  constructor(http: Http){
    this.http = http;
  }

  getAllMovies(): Promise<Movie[]> {
    return Promise.resolve(
      this.http.get("http://movie-database.herokuapp.com/movies")
    );
  }
}
