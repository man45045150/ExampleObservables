import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
// subject is observable and obserer at the same time
userActived = new Subject();
constructor() { }

}
