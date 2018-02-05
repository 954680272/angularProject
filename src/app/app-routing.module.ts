import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RecommendComponent } from './recommend/recommend.component';
import { LocalComponent } from './local/local.component';
import { GourmetComponent } from './gourmet/gourmet.component';
import { MyComponent } from './my/my.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocalstoredetailComponent } from './localstoredetail/localstoredetail.component';

const routes: Routes = [
  {path:"",redirectTo:"/layout/recommend",pathMatch:'full'},
  {path:"layout",component:LayoutComponent,
    children:[
      {path:"recommend",component:RecommendComponent},
      {path:"local",component:LocalComponent},
      {path:"gourmet",component:GourmetComponent},
      {path:"my",component:MyComponent}
    ]
  },
  {path:"user",component:UserComponent,
    children:[
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent}
    ]
  },
  {path:"local/dtoredetail",component:LocalstoredetailComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
