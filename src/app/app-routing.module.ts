import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AddUpdateDeleteTPTComponent } from './add-update-delete-tpt/add-update-delete-tpt.component';
//import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'account-detail', component: AccountDetailComponent },
  { path:'account-transaction', component: AccountTransactionComponent},
  {path:"fund-transfer",component:FundTransferComponent},
  {path:"add-update-delete",component:AddUpdateDeleteTPTComponent},
  // {path:"login-signup",component:LoginSignupComponent},
  {path:"signup", component:RegisterComponent},
  {path:"login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
