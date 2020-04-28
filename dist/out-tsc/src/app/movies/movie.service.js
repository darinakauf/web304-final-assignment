import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.movieURL = 'assets/movies.json';
    }
    getMovies() {
        return this.http.get(this.movieURL);
    }
};
MovieService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MovieService);
export { MovieService };
//# sourceMappingURL=movie.service.js.map