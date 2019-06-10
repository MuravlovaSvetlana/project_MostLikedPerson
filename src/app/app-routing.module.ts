import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/global-guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', data: { withoutHeader: true } },
  { path: 'users/:id', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: 'news', loadChildren:'./modules/news/news.module#NewsModule', canActivate: [AuthGuard]},
  { path: 'winners', loadChildren:'./modules/winners/winners.module#WinnersModule', canActivate: [AuthGuard]},
  { path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
