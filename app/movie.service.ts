import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Movie} from "./movie";
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor(private http: Http){}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get("http://movie-database.herokuapp.com/movies")
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
