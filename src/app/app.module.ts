import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MainSidebarComponent} from './main/main-sidebar/main-sidebar.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthComponent} from './auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MainBlockComponent} from './main/main-block/main-block.component';
import {MatInputModule} from '@angular/material/input';
import {MainSearchComponentComponent} from './main/main-search-component/main-search-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainOrderBlockComponent} from './main/main-order-block/main-order-block.component';
import {ManuComponentComponent} from './main/manu-component/manu-component.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FavoriteItemsComponentComponent} from './main/favorite-items-component/favorite-items-component.component';
import {UserInfoComponent} from './main/cab/user-info.component/user-info.component';
import {UserCardComponent} from './main/cab/user-card.component/user-card.component';
import {OrderListComponent} from './main/cab/order-list.component/order-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        MainSidebarComponent,
        LoginComponent,
        RegisterComponent,
        AuthComponent,
        MainBlockComponent,
        MainSearchComponentComponent,
        MainOrderBlockComponent,
        ManuComponentComponent,
        FavoriteItemsComponentComponent,
        UserInfoComponent,
        UserCardComponent,
        OrderListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatGridListModule,
        NgbModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
