import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuditListComponent } from './components/audit-list/audit-list.component';
import { AuditDetailsComponent } from './components/audit-details/audit-details.component';
import { CreateAuditComponent } from './components/create-audit/create-audit.component';
import { EditAuditComponent } from './components/edit-audit/edit-audit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'audits',
    component: AuditListComponent
  },
  {
    path: 'auditdetails/:auditId',
    component:   AuditDetailsComponent 
  },
  {
    path: 'createaudit',
    component: CreateAuditComponent
  },
  {
    path: 'editaudit/:auditId',
    component: EditAuditComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
