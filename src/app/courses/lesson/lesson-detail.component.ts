import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent{

  lesson$: Observable<LessonDetail>;

  // Constructor
  constructor(private route:ActivatedRoute, private router:Router) {

    console.log("Created LessonDetailComponent...");

  }

  // Initialization
  ngOnInit() {
    // Map lesson$ to the route data observable
    this.lesson$ = this.route.data.pipe( map(data => data['lesson'] )
    )
  }

  // Navigate to previous
  previous(lesson:LessonDetail){

    // Route to previous seqNo relative to parent route
    this.router.navigate(['lessons', lesson.seqNo - 1], {relativeTo:this.route.parent})
  }

  // Navigate to next
  next(lesson:LessonDetail){

    // Route to next seqNo relative to parent route
    this.router.navigate(['lessons', lesson.seqNo + 1], {relativeTo:this.route.parent})
  }

}
