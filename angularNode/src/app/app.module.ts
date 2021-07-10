import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//pagination
import {MatPaginatorModule} from '@angular/material/paginator';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//----

//spinner
import { NgxSpinnerModule } from "ngx-spinner";



import { GraphicsCardsComponent } from './component/graphics-cards/graphics-cards.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GraphicCardDetailsComponent } from './component/graphic-card-details/graphic-card-details.component';
import { InterceptorService } from './services/interceptor.service';
 

@NgModule({
  declarations: [
    AppComponent,
    GraphicsCardsComponent,
    GraphicCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
