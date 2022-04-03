import { Component, Input } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

    themeList = ['purpleTheme','orangeTheme', 'blueTheme', 'greenTheme'];

    @Input() data: any;
    @Input() position: number;

}
