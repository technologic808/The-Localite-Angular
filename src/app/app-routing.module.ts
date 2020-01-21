import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./components/auth/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { LogoutComponent } from "./components/auth/logout/logout.component";
import { HomeComponent } from "./components/layout/home/home.component";
import { NotFoundComponent } from "./components/layout/not-found/not-found.component";
import { PrivacyComponent } from "./components/pages/privacy/privacy.component";
import { TermsComponent } from "./components/pages/terms/terms.component";
import { ProductDetailsComponent } from "./components/store/products/product-details/product-details.component";
import { ProductsComponent } from "./components/store/products/products.component";
import { CartComponent } from "./components/user/cart/cart.component";
import { LocationComponent } from "./components/user/location/location.component";
import { AuthGaurdService } from "./services/auth/auth-gaurd.service";
import { ServiceDetailsComponent } from './components/store/services/service-details/service-details.component';
import { ServiceListComponent } from './components/store/services/service-list/service-list.component';
import { ServicesComponent } from './components/store/services/services.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: LoginComponent },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGaurdService]
  },
  { path: "cart", component: CartComponent },
  { path: "location", component: LocationComponent },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: "products", component: ProductsComponent },
  { path: "services", component: ServicesComponent },
  { path: "service/:id", component: ServiceDetailsComponent },
  { path: "privacy", component: PrivacyComponent },
  {
    path: "terms",
    component: TermsComponent
  },
  {
    path: "forgot-password",
    children: [
      { path: "", component: ForgotPasswordComponent },
      { path: "**", component: ForgotPasswordComponent }
    ]
  },
  { path: "**", component: NotFoundComponent, canActivate: [AuthGaurdService] }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
