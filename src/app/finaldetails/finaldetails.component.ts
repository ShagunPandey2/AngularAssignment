import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Users } from '../users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finaldetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finaldetails.component.html',
  styleUrl: './finaldetails.component.css'
})
export class FinaldetailsComponent {

route:ActivatedRoute=inject(ActivatedRoute);
userService=inject(UserServiceService);
users:Users|undefined;
constructor()
{
  const userId=Number(this.route.snapshot.params['id']);
  this.userService.getUserById(userId).subscribe((user:any)=>{
    this.users=user
  });
}

}
