import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer, PreloadingStrategy} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';
import { CustomPreloadingStrategy } from './services/custom-preloading-strategy';
import { ChatComponent } from './chat/chat.component';

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
      // Blocks loading guard if not logged in - OVERRIDES PRELOADING SETTINGS IN IMPORTS!
      // canLoad: [CanLoadAuthGuard] // CURRENTLY DISABLED
      data: {
        // Flag used inside custom preload strategy service
        preload: false
      }
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
    // Path for chat component
    {
      path: "helpdesk-chat",
      component: ChatComponent,
      outlet: "chat" // Will load in secondary router-outlet "chat"

    },
    // 404 Component -- COMES LAST FOR FALL THROUGH!!
    {
      path: "**", // Anything we haven't mapped, must be at end so fall through occurs!
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, // Imports the routes array from above
        {
          preloadingStrategy: CustomPreloadingStrategy, // Set how preloading occurs
          enableTracing: false, // Shows all kinds of log data in console for debug
          useHash: false, // Allows # in urls, adds automatically to URLs
          scrollPositionRestoration: 'enabled', // Scroll position settings
          paramsInheritanceStrategy: 'always' // Simplifies so you don't have to call parent routes to find params
          
        }
      ) 
  ],
  exports: [RouterModule], // Export module for use
  providers: [
    CanLoadAuthGuard, // Can load auth guard service
    CustomPreloadingStrategy // Custom preload service
  ]
})
export class AppRoutingModule {


}
