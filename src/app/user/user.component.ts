import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

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

}
