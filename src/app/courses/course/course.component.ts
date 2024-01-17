import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent {

    course: Course;

    couponCode: string;

    // Constructor
    constructor(private route:ActivatedRoute) {

    }

    // Initialise
    ngOnInit(){
        // Get snapshot of route and data course
        this.course = this.route.snapshot.data["course"];

        // Get the coupon code from url
        this.couponCode = this.route.snapshot.queryParamMap.get("couponCode");
    }

    // Confirm on exit route funct
    confirmExit(){
        return confirm(`Are you sure you want to exit ${this.course.description}?`);
    }

}











