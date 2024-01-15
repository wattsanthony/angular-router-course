import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver{

    // Constructor
    constructor(private coursesService: CoursesService){

    }

    // Resolve function
    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Course>{

        // Get URL param
        const courseUrl = route.paramMap.get('courseUrl');

        // Use courses service to load
        return this.coursesService.loadCourseByUrl(courseUrl);
    }
}