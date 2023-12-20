import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OpenStreetMapComponent} from './components/open-street-map/open-street-map.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import * as firebaseConfig from "firebase-config.json"
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule, FIREBASE_OPTIONS} from "@angular/fire/compat";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from './components/header/header.component';
import {TrekComponent} from './components/trek/trek.component';
import {TrekEditDialogComponent} from './components/trek-edit-dialog/trek-edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DeleteDialogComponent} from './components/delete-dialog/delete-dialog.component';
import {NgOptimizedImage} from "@angular/common";
import {LoginComponent} from './components/login/login.component';
import {getAuth, provideAuth} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

@NgModule({
  declarations: [
    AppComponent,
    OpenStreetMapComponent,
    HeaderComponent,
    TrekComponent,
    TrekEditDialogComponent,
    DeleteDialogComponent,
    LoginComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    NgOptimizedImage
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: "fr-FR"},
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
