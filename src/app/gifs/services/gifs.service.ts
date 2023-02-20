import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsResponse } from '../models/gifsModels';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  private apikey = 'l4IluzcckOhkm8UQFW53SybhtSOLVQrK';

  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  public results: any = [];

  searchGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=l4IluzcckOhkm8UQFW53SybhtSOLVQrK&q=${query}&limit=25&offset=0&rating=g&lang=en`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.results = resp.data;
      });
  }
}
