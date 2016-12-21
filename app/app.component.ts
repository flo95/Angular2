import { Component} from '@angular/core';
import {Movie} from "./movie";
import {MovieService} from "./movie.service";
import {Observable} from "rxjs/Rx";


@Component({
  selector: 'my-app',
  providers: [MovieService],
  template: `<h1>JavaScript Training</h1>

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let movie of movies">
          <td>{{movie.id}}</td>
          <td>{{movie.title}}</td>
          <td>{{movie.description}}</td>
        </tr>
      </tbody>
    </table>

    <input type="text" name="title" />
    <input type="text" name="description" />
    <button name="save">Add</button>`,
})
export class AppComponent  {

  movies: Observable<Movie[]>;
  movieService: MovieService;

  constructor(_movieService: MovieService) {
    this.movieService = _movieService;
  }

  getMovies(): void{
    this.movies = this.movieService.getAllMovies();
  }

  ngOnInit(): void {
    this.getMovies();
  }
}
