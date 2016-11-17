import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { UserService } from './user.service';
import { UserResolve } from './user.resolve';
const appRoutes: Routes = [
  { path: 'product', component: ProductComponent, resolve: { user: UserResolve} },
  { path: 'account', component: AccountComponent } 
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, UserResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
