import { Component } from '@angular/core';
import {Movie} from "./movie";
import {MovieService} from "./movie.service";

@Component({
  selector: 'my-app',
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
        <tr *ngFor="let movie of Movies">
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

  movies: Movie[];
  movieService: MovieService;

  constructor(_movieService: MovieService) {
    this.movieService = _movieService;
  }

  getMovies(): void{
    this.movieService.getAllMovies().then(movies => this.movies = movies);
  }

  ngOnInit(): void {
    this.getMovies();
  }
}
