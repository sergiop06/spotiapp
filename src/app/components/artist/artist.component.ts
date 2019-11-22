import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  loading: boolean;
  artist: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {

    this.loading = true;
    this.router.params.subscribe( params => {
      // console.log(params['id']);
      this.getSingleArtist(params.id);
      this.getTopTracks(params.id);
    });
   }


   getSingleArtist( id: string ) {
    this.loading = true;
    this.spotifyService.getSingleArtist (id).subscribe( artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
   }

   getTopTracks( id: string ) {
    this.loading = true;
    this.spotifyService.getTopTracks (id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
      this.loading = false;
    });
   }
}
