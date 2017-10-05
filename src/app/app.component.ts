import {Component} from '@angular/core';
import {trigger, style, animate, transition, query} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            opacity: 0,
            transform: 'scale(1.1)'
          }),
          {optional: true}),
        query(':leave',
          animate('400ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'scale(0)'
            })
          ),
          {optional: true}),
        query(':enter',
          animate('400ms ease',
            style({
              opacity: 1,
              transform: 'scale(1)'
            })
          ),
          {optional: true}),
      ])
    ])
  ]
})

export class AppComponent {
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
