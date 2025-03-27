import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'second', component: SecondPageComponent },
];
