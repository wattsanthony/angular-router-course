import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  // Constructor
  constructor(private route:ActivatedRoute, private router: Router) { }

  // Close for chat component to work around bug
  closeChatViaParent() {
    // Navigate to null chat outlet relative to parent route
    this.router.navigate(
			[{ outlets: {chat: null} }],
			{ relativeTo: this.route.parent }
		);
  }

}
