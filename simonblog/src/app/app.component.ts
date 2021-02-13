import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, delay, repeat } from 'rxjs/operators';
​
import TypeIt from 'typeit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  src$: Observable<any>;

  constructor() {
    this.src$ = of('https://cdn.devdojo.com/images/november2020/hero-image.jpeg').pipe(
      concatMap(url => of(url).pipe())
    );
  }


  ngOnInit(): void {
    // this.loadImages();
    this.typeWords();
  }

  typeWords(): void {
    new TypeIt("#apps", {
      strings: ['Apps', 'and Tools.']
    }).go();
  }

  loadImages() {

    this.src$ = of('../assets/img/ds/ds1.jpg', '../assets/img/ds/da2.png').pipe(
      concatMap(url => of(url).pipe(delay(3000))),
      repeat()
   );

   console.log(this.src$);
  }

}
