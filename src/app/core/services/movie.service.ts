import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids?: number[];
    genreNames?: string[];
}

export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private baseUrl = environment.apiBaseUrl;
    private http = inject(HttpClient);
    private headers = new HttpHeaders({
        'Authorization': `Bearer ${environment.apiToken}`,
        'Accept': 'application/json'
    });

    getPopularMovies() {
        const url = `${this.baseUrl}/movie/popular?language=en-US&page=1`;
        return this.http.get<MoviesResponse>(url, { headers: this.headers });
    }

    getMoviesGenre(movie_id: number) {
        const url = `${this.baseUrl}/movie/${movie_id}?language=en-US`;
        return this.http.get<{genres: {id:number,name:string}[]}>(url, { headers: this.headers });
    }

    getGenres() {
        const url = `${this.baseUrl}/genre/movie/list?language=en`;
        return this.http.get<{genres: {id:number,name:string}[]}>(url, { headers: this.headers });
    }

    getMovieDetails(movie_id: number) {
        const url = `${this.baseUrl}/movie/${movie_id}?language=en-US`;
        return this.http.get<any>(url, { headers: this.headers });
    }

}
