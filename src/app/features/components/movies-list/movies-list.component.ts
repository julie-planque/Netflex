import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MovieComponent } from "../movie/movie.component";

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, MovieComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {
  private movieService = inject(MovieService);

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((res) => {
      console.log('Movies reçus ✅', res);
    });
  }

  // Ici on transforme l'Observable en signal
  moviesResponse = toSignal(this.movieService.getPopularMovies(), { initialValue: { page: 1, results: [], total_pages: 0, total_results: 0 } });

  // On expose directement un signal qui ne contient QUE le tableau de films
  movies = () => this.moviesResponse().results;
}
