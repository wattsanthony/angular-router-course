import { Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";

@Injectable()
export class LessonsDetailResolver {

    // Constructor
    constructor(private courses:CoursesService){

    }

    // Resolve funct
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<LessonDetail>{

        // Get parent route for courseUrl, then lessonSeqNum
        const courseUrl = route.parent.paramMap.get('courseUrl');
        const lessonSeqNo = route.paramMap.get('lessonSeqNo');

        // Return lesson detail
        return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
    }
}