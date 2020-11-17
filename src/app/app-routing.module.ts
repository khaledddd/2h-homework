import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DetailComponent } from './detail/detail.component';
import { TicketComponent } from './ticket/ticket.component';
import { ErrorComponent } from './error/error.component';
import { DetailTicketComponent } from './detailTicket/detailTicket.component';

const routes: Routes = [

  {
    path: 'ticket',
    component: TicketComponent
  },
    {
    path: 'ticket',
    component: UserComponent
  },
  {
    path: '/detail/:id',
    component: DetailTicketComponent
  },
  
  {
    path: '**',
    redirectTo: '/error',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
