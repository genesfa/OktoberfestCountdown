import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  VERSION,
  HostListener,
} from '@angular/core';

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  getScreenWidth: any;
  getScreenHeight: any;

  name = 'Angular ' + VERSION.major;
  date: Date = new Date('10/23/2021, 15:00 GMT');
  //config: CountdownConfig = { stopTime: this.date.getTime() };
  boolVar = true;
  timeVar = this.date.getTime() - new Date().getTime();
  ngOnInit() {
    console.log(new Date().valueOf() - this.date.valueOf()); // OK
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
}
