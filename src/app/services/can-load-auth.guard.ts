import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { Router, UrlSegment } from "@angular/router";
import { Route } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";

@Injectable()
export class CanLoadAuthGuard{

    // Constructor
    constructor(private auth:AuthStore,
        private router: Router){

    }

    // Can load function
    canLoad(route: Route,
        segments: UrlSegment[]):Observable<boolean> | Promise<boolean>{
            // Return isLoggedIn
            return this.auth.isLoggedIn$
            .pipe(
                first(),  // Ensure it emits immediately
                tap(loggedIn => {
                    // If not logged in, navigate to login
                    if(!loggedIn){
                        this.router.navigateByUrl('/login');
                    }
                })
                );
    }

}