import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MoviesListComponent = class MoviesListComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.pageTitel = 'Movies List';
        this.imageWidth = 50;
        this.newimageWidth = 150;
        this.imagHeight = 40;
        this.imageMargin = 3;
        this.movies = [];
    }
    ngOnInit() {
        this.movieService.getMovies().subscribe(data => this.movies = data);
    }
};
MoviesListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-movies',
        templateUrl: 'movies-list.component.html',
        styleUrls: ['movies-list.component.css']
    })
], MoviesListComponent);
export { MoviesListComponent };
//# sourceMappingURL=movies-list.component.js.map