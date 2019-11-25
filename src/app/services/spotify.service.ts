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
      Authorization : 'Bearer BQCY2VpF6tX5pb8JpjllX9GCS4RMhlvGa6pRzy2KHL-YmueeZAK2dXomO_J9bsM9mCFLtDYemMnmVW7p2yY' });

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

  getSingleArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    // tslint:disable-next-line: no-string-literal
    // .pipe( map ( (data: any) =>  data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    // tslint:disable-next-line: no-string-literal
    .pipe( map ( (data: any) =>  data['tracks']));
  }
}
