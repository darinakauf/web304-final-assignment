import { Component } from '@angular/core';
import { IMvovies } from  './movies';
import { MovieService } from './movie.service';



@Component({
    selector: 'app-movies',
    templateUrl: 'movies-list.component.html',
    styleUrls: ['movies-list.component.css']
})

export class MoviesListComponent{
    pageTitel:string= 'Movies List';
    imageWidth:number = 50;
    newimageWidth:number = 150;
    imagHeight:number = 40;
    imageMargin:number = 3;

    movies: IMvovies[] = [];

constructor(private movieService:MovieService){}

ngOnInit():void{
   this.movieService.getMovies().subscribe(data=>this.movies=data);
}

}