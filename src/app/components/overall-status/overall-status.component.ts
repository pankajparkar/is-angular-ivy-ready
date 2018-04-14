import { Component, Input } from '@angular/core';

import { OverallStatus } from './../../models';

@Component({ selector: 'app-hello-world', template: 'Hello World!' })
export class HelloWorldComponent {}

/**
 * OverallStatusComponent is a presentation component whose job is to display overall status on Ivy
 * implementation: (progress percentage, number of implemented features and number of pending
 * features)
 */
@Component({
  selector: 'app-overall-status',
  templateUrl: './overall-status.component.html',
  styleUrls: ['./overall-status.component.scss'],
})
export class OverallStatusComponent {
  @Input() status: OverallStatus;
  HelloWorldComponent = HelloWorldComponent;
}
