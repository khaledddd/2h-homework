import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { TicketComponent } from './ticket/ticket.component';
import { DetailTicketComponent } from './detailticket/detailTicket.component';

@NgModule({
    declarations: [AppComponent,TicketComponent,UserComponent,ErrorComponent,DetailTicketComponent],
    imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
