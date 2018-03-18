import { NgModule } from '@angular/core';
import { GC_SERVICES } from './static/service';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GC_COMPONENTS } from './static/component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputCPFDirective } from './directives/input-cpf.directive';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GC_Pipes } from './static/pipes';
// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    AppComponent,
    GC_COMPONENTS,
    InputCPFDirective, 
    GC_Pipes
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    NgxBarcodeModule
  ],
  providers: [GC_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
