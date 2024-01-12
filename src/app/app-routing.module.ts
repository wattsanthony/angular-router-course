import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    // Login path to component
    {
      path: "login",
      component: LoginComponent
    },
    // About path to component
    {
      path: "about",
      component: AboutComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Imports the routes array from above
  ],
  exports: [RouterModule], // Export module for use
  providers: [

  ]
})
export class AppRoutingModule {


}
