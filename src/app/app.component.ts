import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable';
  constructor() {
    
  }

  test3() { // doesn't work
    let increment = document.getElementById('increment');
    console.log(increment);
    let decrement = document.getElementById('decrement');
    console.log(decrement);   
    let counter = document.getElementById('counter');
    console.log(counter);    
    let incrementClick = Observable.fromEvent(increment, 'click');
    let decrementClick = Observable.fromEvent(decrement, 'click');

    incrementClick.subscribe(event=>console.log(event));
  }

  test2() {
    let stream = new Observable(observer => {
      let counter: number = 0;
      let interval = setInterval(() => {
        observer.next(counter++);
      }, 1000);
      return () => {
        clearInterval(interval);
      }
    });

    stream.filter((value: number) => value % 2 === 0)
      .subscribe(value => console.log(value));
  }

  test1() {
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

    let disposible = stream.subscribe(value => console.log(value));
    setTimeout(() => {
      disposible.unsubscribe();
    }, 1000);
  }
}
