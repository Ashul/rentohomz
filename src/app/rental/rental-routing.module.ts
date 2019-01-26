import {NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RentalComponent } from './rental.component'

const rentalRoutes:Routes = [
    {path:'', component:RentalComponent}
]

@NgModule({
    imports: [RouterModule.forChild(rentalRoutes)],
    exports: [RouterModule]
  
})

export class RentalRoutingModule{}