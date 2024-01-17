import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';


const routes: Routes = [
    // Default route redirect to /courses
    // Must have pathMatch full to work
    {
      path: "",
      redirectTo: "/courses",
      pathMatch: "full"
    },
    // Courses lazy loading
    {
      path: "courses",
      // Uses function to import courses module then export it using promises
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
      canLoad: [CanLoadAuthGuard] // Blocks loading guard if not logged in
    },
    // Login path to component
    {
      path: "login",
      component: LoginComponent
    },
    // About path to component
    {
      path: "about",
      component: AboutComponent
    },
    // 404 Component -- COMES LAST FOR FALL THROUGH!!
    {
      path: "**", // Anything we haven't mapped, must be at end so fall through occurs!
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Imports the routes array from above
  ],
  exports: [RouterModule], // Export module for use
  providers: [
    CanLoadAuthGuard
  ]
})
export class AppRoutingModule {


}
