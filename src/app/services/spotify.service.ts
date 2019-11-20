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

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQCn-Jh2lo0BFiGrxw0_OSE6zbBKgosOeUVixSvlc8P-kohYMxO-cgKx511k1whwwB9Jb0UiGcMK86Q9n00' });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      // tslint:disable-next-line: no-string-literal
      .pipe( map ( (data: any) =>  data['albums'].items));
  }

  getArtists(term: string) {
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQCn-Jh2lo0BFiGrxw0_OSE6zbBKgosOeUVixSvlc8P-kohYMxO-cgKx511k1whwwB9Jb0UiGcMK86Q9n00' });
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {headers})
    // tslint:disable-next-line: no-string-literal
    .pipe( map ( (data: any) =>  data['artists'].items));
  }
}
