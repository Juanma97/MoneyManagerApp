import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstTimeGuard } from './first-time.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate:[FirstTimeGuard] },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[FirstTimeGuard]},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule'},
  { path: 'expense-form', loadChildren: './expense-form/expense-form.module#ExpenseFormPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'save-money', loadChildren: './save-money/save-money.module#SaveMoneyPageModule' },
  { path: 'edit-salary', loadChildren: './edit-salary/edit-salary.module#EditSalaryPageModule'},
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
