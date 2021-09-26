import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EmpresaComponent } from './components/empresa/empresa.component';
import { ListadoEmpresaComponent } from './components/listado-empresa/listado-empresa.component';
import { EmpresaModalComponent } from './components/empresa-modal/empresa-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ListadoEmpresaComponent,
    EmpresaModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
