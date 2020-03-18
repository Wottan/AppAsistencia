import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrincipalModule } from './principal/principal.module';
import { PrincipalComponent } from './menu/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    PrincipalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
