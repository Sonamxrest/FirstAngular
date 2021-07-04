import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './FirstComponent/firstcomponent.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponentComponent } from './update-component/update-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    FormComponentComponent,
    UpdateComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
	ToastrModule.forRoot()
 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
