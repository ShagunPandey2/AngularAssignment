import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FinaldetailsComponent } from './finaldetails/finaldetails.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserMasterComponent,UserdetailsComponent,FinaldetailsComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
}
