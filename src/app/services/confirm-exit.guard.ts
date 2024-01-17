import { Injectable } from "@angular/core";
import { CourseComponent } from "../courses/course/course.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class ConfirmExitGuard{

    // Check if can deactivate (exit route)
    canDeactivate(component: CourseComponent, 
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot){
            // Return confirmation
            return component.confirmExit();
        }
}