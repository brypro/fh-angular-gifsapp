import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styles: [],
})
export class SearchGifsComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search(term: string) {
    const value = this.txtSearch.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }
    this.gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
