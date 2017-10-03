import {Component} from '@angular/core';
import {trigger, state, style, animate, transition, query} from "@angular/animations";

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
            transform: 'translateY(305%)'
          }),
          {optional: true}),
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateY(-300%)'
            })
          ),
          {optional: true}),
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateY(0%)'
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
