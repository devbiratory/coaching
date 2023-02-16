import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
