import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo ');
  }

  getQuery(query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization : 'Bearer BQBuJIxs59vz9o8Hbi16xUB3flqmy-ibmhV0JoEbfz43PVdn89olGm2F_JVzDx9-doGvwnYDHMvI2xlvJmk' });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      // tslint:disable-next-line: no-string-literal
      .pipe( map ( (data: any) =>  data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
    // tslint:disable-next-line: no-string-literal
    .pipe( map ( (data: any) =>  data['artists'].items));
  }
}
