import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'login', pathMatch: 'full', redirectTo: '/login'},
    {path: '', pathMatch: 'full', redirectTo: '/'},
    {path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
