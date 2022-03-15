import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavotiteComponentComponent } from './favotite-component/favotite-component.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      {
        path: 'search',
        component: SearchComponentComponent,
      },
      {
        path: 'favorites',
        component: FavotiteComponentComponent
      }
    ]
  },
  {
    path: '**',
    component: MainLayoutComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
