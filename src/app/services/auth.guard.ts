import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard {

    // Constructor
    constructor(private auth:AuthStore, private router: Router){

    }

    // Can activate function
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree>{
            return this.checkIfAuthenticated();
    }

    // Can activate child function
    canActivateChild(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree>{
        return this.checkIfAuthenticated();
    }

    // Reuseable auth function
    private checkIfAuthenticated(){
        return this.auth.isLoggedIn$
        .pipe(
            map(
                loggedIn => loggedIn? true : this.router.parseUrl('/login')
            )
        );
    }
}