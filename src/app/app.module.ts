import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAuditComponent } from './components/create-audit/create-audit.component';
import { AuditListComponent } from './components/audit-list/audit-list.component';
import { AuditDetailsComponent } from './components/audit-details/audit-details.component';
import { EditAuditComponent } from './components/edit-audit/edit-audit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuditService} from './audit.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateAuditComponent,
    AuditListComponent,
    AuditDetailsComponent,
    EditAuditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
