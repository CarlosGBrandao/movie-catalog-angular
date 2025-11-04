import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, HttpClientModule, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Catálogo de Filmes';
}
