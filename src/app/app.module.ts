import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TqdataComponent } from './data/tqdata/tqdata.component';
import { HttpClientModule } from '@angular/common/http';
import { TqnavigationComponent } from './layout/tqnavigation/tqnavigation.component';
import { TqfooterComponent } from './layout/tqfooter/tqfooter.component';
import { TqsiteComponent } from './layout/tqsite/tqsite.component';
import { NgxModule } from './components/db/dbconfig';

@NgModule({
  declarations: [
    AppComponent,
    TqdataComponent,
    TqnavigationComponent,
    TqfooterComponent,
    TqsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
