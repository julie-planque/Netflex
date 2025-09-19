import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../core/services/movie.service';

@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @Input() movie!: Movie;
}
