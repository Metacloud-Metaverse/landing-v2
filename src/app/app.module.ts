import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McCoreModule } from './modules/mc-core/mc-core.module';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreModule, SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAnalyticsModule,
  APP_NAME,
  APP_VERSION,
  ScreenTrackingService,
  UserTrackingService,
  COLLECTION_ENABLED
} from '@angular/fire/compat/analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    McCoreModule,

    // Angular Material
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAnalytics(() => getAnalytics()),
    //provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
  ],
  providers: [
    ScreenTrackingService,
    { provide: FIRESTORE_SETTINGS, useValue: { ignoreUndefinedProperties: true } },
    { provide: APP_VERSION, useValue: '1.0.0' },
    { provide: APP_NAME, useValue: 'MetaCloud' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
