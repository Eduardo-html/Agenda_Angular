import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroComponent } from './pages/filtro/filtro.component';
import { TableComponent } from './pages/table/table.component';
import { HomeComponent } from './home/home.component';
import { AgendaService } from './services/agenda.service';
import { ModalModule } from 'ngx-bootstrap/modal';  
import { ModalComponent } from './components-bootstrap/modal/modal.componet';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    TableComponent,
    HomeComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  exports: [ModalModule],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
