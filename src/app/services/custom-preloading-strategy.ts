import { Injectable } from "@angular/core";
import { Route } from "@angular/router";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class CustomPreloadingStrategy{

    // Preloading function
    preload(route: Route, load: () => Observable<any>): Observable<any>{

        // Check if route data labelled for preload
        if(route.data["preload"]){
            // Load if true
            return load();
        }
        else{
            // Returns observable null
            of(null); 
        }

    }

}