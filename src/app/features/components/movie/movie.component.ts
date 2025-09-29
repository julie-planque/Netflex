import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../core/services/movie.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movie',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  faHeart = faHeartSolid;
  faHeartRegular = faHeartRegular;
  faStar = faStar;
  public favorite = false;

  @Input() movie!: Movie;

  addToFavorites() {
    this.favorite = !this.favorite;
  }
}
