import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: MainComponent},
    {path: '**', component: MainComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
