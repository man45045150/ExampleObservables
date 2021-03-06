import { UsersService } from './user/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user1Activated = false;
  user2Activated = false;
  constructor(private usersService : UsersService){

  }
  ngOnInit(): void {
    this.usersService.userActived.subscribe(
      (id:number) =>{
        if(id===1)
          this.user1Activated = true;
        else if(id===2)
          this.user2Activated = true;
      }
    );
  }
}
