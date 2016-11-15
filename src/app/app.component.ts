import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable';
  constructor() {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('promise timeout');
      }, 2000);
    });

    promise.then(value => console.log(value));

    let stream = new Observable(observer => {
      let timeout = setTimeout(() => {
        observer.next('observable timeout');
      }, 2000);

      return () => {
        clearTimeout(timeout);
      }
    });

    let disposible = stream.subscribe(value=>console.log(value));
    setTimeout(()=>{
      disposible.unsubscribe();
    }, 1000);

  }
}
