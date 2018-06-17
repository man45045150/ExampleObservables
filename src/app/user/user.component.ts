import { UsersService } from './users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private userService:UsersService) 
  { }

  ngOnInit() {
    //subscribe() is observer part
    this.route.params
      .subscribe(
        //next is chaged
        (params: Params) => {
          this.id = +params['id'];
        },
        //error
        ()=>{},
        //completed
        ()=>{}
      );
  }
  onActive(){
    this.userService.userActived.next(this.id);
  }
  ngOnDestroy(): void {
    this.userService.userActived.unsubscribe();
  }

}
