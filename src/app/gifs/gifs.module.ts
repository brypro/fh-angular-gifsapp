import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { ResultsGifsComponent } from './results-gifs/results-gifs.component';

@NgModule({
  declarations: [GifsPageComponent, SearchGifsComponent, ResultsGifsComponent],
  imports: [CommonModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
