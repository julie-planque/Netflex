import { Component, effect, inject, Input, signal } from '@angular/core';
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
export class MoviesListComponent {
  @Input() MoviesList!: any[];
  private movieService = inject(MovieService);

  
  // Ici on transforme l'Observable en signal
  moviesResponse = toSignal(this.movieService.getPopularMovies(), { initialValue: { page: 1, results: [], total_pages: 0, total_results: 0 } });
  
  genreResponse = toSignal(this.movieService.getGenres(), { initialValue: { genres: [] } });
  
  enrichedMovies = signal<any[]>([]);
  constructor() {
    effect(() => {
      const genres = this.genreResponse().genres;
      const movies = this.moviesResponse().results;
  
      const mapped = movies.map(movie => ({
        ...movie,
        genreNames: movie.genre_ids?.map((id: number) => genres.find(g => g.id === id)?.name)
          .filter(Boolean)
      }));
  
      this.enrichedMovies.set(mapped);
    });
  }

  // On expose directement un signal qui ne contient QUE le tableau de films
  movies = () => this.moviesResponse().results;
}
