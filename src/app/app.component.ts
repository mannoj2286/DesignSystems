import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DesignSystems';

  ngOnInit(): void {
    const test1 = new Promise((res, rej) => {

    })
    const test = new Observable((obs) => {
      obs.next(1);
      setTimeout(() => {
        console.log('render');
      }, 1000);
      setTimeout(() => {
        console.log('next render');
      }, 1500);
      obs.next(2);
    });
    test.subscribe((val) => console.log(val));
  }
}
