import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results-gifs',
  templateUrl: './results-gifs.component.html',
  styles: [],
})
export class ResultsGifsComponent {
  constructor(private gifsService: GifsService) {}

  get results() {
    return this.gifsService.results;
  }
}
