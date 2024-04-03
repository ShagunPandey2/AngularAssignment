import { Component,OnDestroy,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { FinaldetailsComponent } from '../finaldetails/finaldetails.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-master',
  standalone: true,
  imports: [CommonModule,HttpClientModule,UserdetailsComponent,FinaldetailsComponent],
  templateUrl: './user-master.component.html',
  styleUrl: './user-master.component.css'
})
export class UserMasterComponent implements OnInit,OnDestroy {
  dest:Subscription
  httpClient=inject(HttpClient);
  data:any=[]
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData()
  {
    this.dest=this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      // console.log(data);
      this.data=data;
    })
   
  }

 user:any;
 selectUser:any;
 onUserSelected(user:any):void{
  this.selectUser=user;
 }
  
ngOnDestroy(): void {
    this.dest.unsubscribe();
    // console.log("worked");
}
}
