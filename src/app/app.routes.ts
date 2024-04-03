import { Routes } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';


import { FinaldetailsComponent } from './finaldetails/finaldetails.component';


export const routes: Routes = [
    {path:'',component:UserMasterComponent},
    {path:'userdetails/:id',component:FinaldetailsComponent}
];
