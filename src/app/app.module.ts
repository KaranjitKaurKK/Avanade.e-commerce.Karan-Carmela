import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BeerFilterPipe } from './features/catalog/pipe/beer-filter.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    RouterModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
