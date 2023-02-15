import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTACT_ROUTE, HOME_PATH, HOME_ROUTE, RECORDS_ROUTE } from './constants/routing.constants';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RecordsContainerComponent } from './containers/records-container/records-container.component';

const routes: Routes = [
  { path: '', redirectTo: HOME_PATH, pathMatch: 'full' },
  { path: HOME_ROUTE, component: HomeContainerComponent },
  { path: CONTACT_ROUTE, component: ContactContainerComponent },
  { path: RECORDS_ROUTE, component: RecordsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
