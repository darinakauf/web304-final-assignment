import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.pageTitrl = '';
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        template: `
         <div>

           <h1>{{pageTitrl}}</h1>
           <app-movies></app-movies>

         </div>
         `
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map