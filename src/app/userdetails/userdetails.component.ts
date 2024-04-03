import { Component,Input,OnInit,EventEmitter,Output, inject, OnDestroy } from '@angular/core';
import { Users } from '../users';
import { EventEmitterReferencingAsyncResource } from 'events';

import { RouterLink,RouterOutlet } from '@angular/router';


import { UserServiceService } from '../user-service.service';
import { CommonModule } from '@angular/common';
import { FinaldetailsComponent } from '../finaldetails/finaldetails.component';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FinaldetailsComponent],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit{
  
  ngOnInit():void{


  }
  @Input() userCard!:Users;
  constructor(){}
  @Output() userSelected:EventEmitter<any>=new EventEmitter<any>();

  onSelectUser():void{
    this.userSelected.emit(this.userCard);
  }
 
}
