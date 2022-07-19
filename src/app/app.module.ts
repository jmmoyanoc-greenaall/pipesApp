import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRuouterModule } from './app-ruouter.module';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData} from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

registerLocaleData(localeES);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SharedModule,
    AppRuouterModule, 
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
