import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AddUpdateDeleteTPTComponent } from './add-update-delete-tpt/add-update-delete-tpt.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomePageComponent,
    AccountDetailComponent,
    AccountTransactionComponent,
    FundTransferComponent,
    AddUpdateDeleteTPTComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



