import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  @Input()
  routing: boolean = false;

  @Input()
  detectRoutingOngoing: boolean = false;

  // Constructor
  constructor(public loadingService: LoadingService,
    private router:Router) {

  }

  // Initialization
  ngOnInit(){

    // Subscribe to router events
    this.router.events.subscribe(
      event => {
        // If instance of start, show load,
        // in other cases we want it off
        if(event instanceof NavigationStart
          || event instanceof RouteConfigLoadStart){
          this.loadingService.loadingOn();
        }
        else if(event instanceof NavigationEnd
          || event instanceof RouteConfigLoadEnd
          || event instanceof NavigationCancel
          || event instanceof NavigationError){
          this.loadingService.loadingOff();
        }
      }
    )
  }
}
