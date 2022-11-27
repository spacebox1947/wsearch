import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      pageid: number;
      snippet: string;
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) {}

  public search(term: string) {
    // get an observable from Wikipedia Response Object
    return this.http.get<WikipediaResponse>(
      'http://en.wikipedia.org/w/api.php?', 
      {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      map(x => x.query?.search)
    );
  }
}