import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Movie} from "./movie";

@Injectable()
export class MovieService {
  getAllMovies(http: Http): Promise<Movie[]> {
    return Promise.resolve(
      http.get("http://movie-database.herokuapp.com/movies")
    );
  }
}
