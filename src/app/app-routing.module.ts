import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PostsComponent } from './posts/posts.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { 
    path:'products', component:ProductsComponent, 
    data:{roles: ['admin']}, canActivate: [AuthGuard]
  },
  {
    path:'add-products', component:AddProductComponent, 
    data:{roles: ['admin']}, canActivate: [AuthGuard]
  },
  {
    path:'edit-products', component:EditProductComponent,
    data:{roles: ['admin']}, canActivate: [AuthGuard]
  },
  {
    path:'posts', component:PostsComponent,
    data:{roles: ['admin', 'user']}, canActivate: [AuthGuard]
  },
  {path: '', redirectTo:'/posts', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
