import { Injectable } from '@angular/core';
import { IMvovies } from './movies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable ({
    providedIn: 'root'
})

export class MovieService {

    private movieURL = 'assets/movies.json';
    constructor(private http:HttpClient){

    }

    getMovies():Observable <IMvovies[]> {
        return this.http.get<IMvovies[]>(this.movieURL);

    }
}