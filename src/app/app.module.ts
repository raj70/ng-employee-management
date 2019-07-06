import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeModule } from './employee/employee.module';
import { InMemoryDataService } from './in-memory-data.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /* ng-bootstrap */
    NgbModule.forRoot(),
    FormsModule,
    /* Employee Module; this module has to be before AppRoutingModule: 
   https://angular.io/guide/router#add-heroes-functionality */
    /* https://angular.io/guide/router#module-import-order-mattersb */
    AuthModule,
    EmployeeModule,
    AppRoutingModule,
    /* ng http : to talk to outside api: https://angular.io/tutorial/toh-pt6 */
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Employee Module; this module has to be before AppRoutingModule:
   https://angular.io/guide/router#add-heroes-functionality */
/* https://angular.io/guide/router#module-import-order-mattersb */
