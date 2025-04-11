import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONCERTS_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE, RECORDS_ROUTE } from './constants/routing.constants';

const routes: Routes = [
  { path: '', redirectTo: HOME_ROUTE, pathMatch: 'full' },
  {
    path: HOME_ROUTE,
    loadComponent: () => import('./containers/home-container/home-container.component').then((m) => m.HomeContainerComponent),
  },
  {
    path: CONCERTS_ROUTE,
    loadComponent: () => import('./containers/concerts-container/concerts-container.component').then((m) => m.ConcertsContainerComponent),
  },
  {
    path: GALLERY_ROUTE,
    loadComponent: () => import('./containers/gallery-container/gallery-container.component').then((m) => m.GalleryContainerComponent),
  },
  {
    path: CONTACT_ROUTE,
    loadComponent: () => import('./containers/contact-container/contact-container.component').then((m) => m.ContactContainerComponent),
  },
  {
    path: RECORDS_ROUTE,
    loadComponent: () => import('./containers/records-container/records-container.component').then((m) => m.RecordsContainerComponent),
  },
  { path: '**', loadComponent: () => import('./containers/home-container/home-container.component').then((m) => m.HomeContainerComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
