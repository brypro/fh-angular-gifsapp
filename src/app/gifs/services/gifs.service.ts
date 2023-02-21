import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  private apikey = 'l4IluzcckOhkm8UQFW53SybhtSOLVQrK';
  private _serviceUrl = 'https://api.giphy.com/v1/gifs';

  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  public results: Gif[] = [];

  searchGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '25')
      .set('q', query);

    this.http
      .get<GifsResponse>(`${this._serviceUrl}/search`, { params })
      .subscribe((resp: GifsResponse) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
