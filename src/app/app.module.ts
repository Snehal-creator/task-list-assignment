import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpService } from './shared/http.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzCheckboxModule,
    HttpClientModule,
    NzCardModule,
    NzTableModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
