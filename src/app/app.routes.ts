import { Routes } from '@angular/router';
import { MoviesListComponent } from './features/components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './features/components/movie-details/movie-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailsComponent }
];