
import 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  private numberObsSubcription : Subscription;
  private customSubcription : Subscription;
  constructor() { }

  ngOnInit() {
    //interval is automaticlly add some numbers
    const myNumbers = Observable.interval(1000);
    this.numberObsSubcription =myNumbers.subscribe((number:number)=>{
      console.log(number);
    });

    //observable from scratch
    //this bridge from obserable to observer.
    const myObservable = Observable.create((observer:Observer<string>)=>{
      setTimeout(() => {
        //next is emit data package
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        //next is emit data package
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        //next is emit data package
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        //next is emit data package
        observer.next('third package');
      }, 6000);
    });

    this.customSubcription = myObservable.subscribe(
      (data:string)=>{ console.log(data); },
      (error:string)=>{console.log(error); },
      ()=>{ console.log('completed'); }
    );
  }
  ngOnDestroy(): void {
    this.numberObsSubcription.unsubscribe();
    this.customSubcription.unsubscribe();
  }
}
