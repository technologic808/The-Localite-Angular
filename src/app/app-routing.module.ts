import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./components/auth/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { AddProductComponent } from "./components/data/add-product/add-product.component";
import { AddStoreComponent } from "./components/data/add-store/add-store.component";
import { HomeComponent } from "./components/layout/home/home.component";
import { NotFoundComponent } from "./components/layout/not-found/not-found.component";
import { PrivacyComponent } from "./components/pages/privacy/privacy.component";
import { TermsComponent } from "./components/pages/terms/terms.component";
import { ProductsComponent } from "./components/store/products/products.component";
import { ServiceDetailsComponent } from "./components/store/services/service-details/service-details.component";
import { ServiceListComponent } from "./components/store/services/service-list/service-list.component";
import { ServicesComponent } from "./components/store/services/services.component";
import { StorePageComponent } from "./components/store/stores/store-page/store-page.component";
import { StoresComponent } from "./components/store/stores/stores.component";
import { CartComponent } from "./components/user/cart/cart.component";
import { LocationComponent } from "./components/user/location/location.component";
import { OrdersComponent } from "./components/user/orders/orders.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { ImageUploaderComponent } from "./components/utils/image-uploader/image-uploader.component";
import { AuthGaurdService } from "./services/auth/auth-gaurd.service";
import { ProductPageComponent } from "./components/store/products/product-page/product-page.component";
import { SearchResultsComponent } from "./components/store/products/search-results/search-results.component";
import { TechnicianDetailsComponent } from "./components/store/services/technician-details/technician-details.component";
import { ChangePasswordComponent } from "./components/auth/change-password/change-password.component";
import { TestComponent } from "./components/auth/test/test.component";
import { CategoriesListComponent } from "./components/store/products/categories-list/categories-list.component";
import { ProductCategoriesComponent } from "./components/store/products/product-categories/product-categories.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: LoginComponent },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canActivate: [AuthGaurdService]
  },
  { path: "cart", component: CartComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGaurdService]
  },
  { path: "location", component: LocationComponent },
  { path: "orders", component: OrdersComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/add", component: AddProductComponent },
  { path: "search/:searchTerm", component: SearchResultsComponent },
  { path: "stores", component: StoresComponent },
  { path: "categories", component: CategoriesListComponent },
  { path: "category/:category", component: ProductCategoriesComponent },
  { path: "stores/add", component: AddStoreComponent },
  { path: "store/:id", component: StorePageComponent },
  { path: "services", component: ServicesComponent },
  { path: "technicianRegistration", component: TechnicianDetailsComponent },
  { path: "service/:id", component: ServiceDetailsComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "test-uploader", component: ImageUploaderComponent },
  { path: "terms", component: TermsComponent },
  { path: "test", component: TestComponent },
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
