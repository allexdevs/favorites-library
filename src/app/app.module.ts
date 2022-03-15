import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FavotiteComponentComponent } from './favotite-component/favotite-component.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    FavotiteComponentComponent,
    MainLayoutComponentComponent,
    MenuComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
