
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);