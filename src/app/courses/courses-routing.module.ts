import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './services/course.resolver';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsResolver } from './services/lessons.resolver';
import { LessonsDetailResolver } from './services/lessons-detail.resolver';

// Routing for the courses module section
const routes: Routes = [
  // Default route
  {
    path: "",
    component: HomeComponent
  },
  // Course route
  {
    path: ":courseUrl", // Path variable
    component: CourseComponent,
    // Children of route
    children: [
      {
        path: "",
        component: LessonsListComponent,
        // Before displaying, resolve
        resolve: {
          // Resolve the lessons using lessons resolver
          lessons: LessonsResolver
        }
      },
      {
      path: "lessons/:lessonSeqNo", // Path variable
      component: LessonDetailComponent,
      resolve: {
        lesson: LessonsDetailResolver
      }
      }
    ],
    // Before displaying, resolve
    resolve: {
      // Resolve the course via the course resolver
      course: CourseResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver, // Service that resolves courses
    LessonsResolver, // Service that resolves lessons
    LessonsDetailResolver // Service that resolves lesson detail
  ]
})
export class CoursesRoutingModule {



}
