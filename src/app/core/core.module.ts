import { NgModule } from '@angular/core';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    NavbarComponent, 
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule,
    NavbarComponent
  ]
})
export class CoreModule { }
