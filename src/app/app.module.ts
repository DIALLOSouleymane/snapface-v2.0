import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnapFaceComponent } from './snap-face/snap-face.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapFaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
