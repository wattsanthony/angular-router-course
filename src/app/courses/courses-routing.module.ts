import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './services/course.resolver';

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
    CourseResolver // Service that routes courses
  ]
})
export class CoursesRoutingModule {



}
