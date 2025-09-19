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

    getPopularMovies() {
        const url = `${this.baseUrl}/movie/popular?language=en-US&page=1`;
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.apiToken}`,
            'Accept': 'application/json'
        });
        return this.http.get<MoviesResponse>(url, { headers });
    }

}
