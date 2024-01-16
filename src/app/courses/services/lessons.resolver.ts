import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

@Injectable()
export class LessonsResolver{

    // Constructor
    constructor(private courses:CoursesService){

    }

    // Resolve funct
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<LessonSummary[]>{

        // Get course Url from paramMap
        const courseUrl = route.paramMap.get('courseUrl');

        // Return the course lessons summary
        return this.courses.loadAllCourseLessonsSummary(courseUrl);
    }
}