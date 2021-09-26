import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpresaModalComponent } from '../empresa-modal/empresa-modal.component';

@Component({
  selector: 'app-listado-empresa',
  templateUrl: './listado-empresa.component.html',
  styleUrls: ['./listado-empresa.component.css'],
})
export class ListadoEmpresaComponent implements OnInit, OnDestroy {
  suscription: Subscription | undefined;

  faEdit = faEdit;
  faTrash = faTrash;

  empresas: any[] = [];

  constructor(
    private _crudService: CrudService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.suscription = this._crudService.refresh$.subscribe(() => {
      this.getEmpresas();
    });
    this.getEmpresas();
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  getEmpresas() {
    this._crudService.getEmpresas().subscribe(
      (res) => {
        this.empresas = res;
      },
      (err) => console.log(err)
    );
  }

  editarEmpresa(id: number) {
    const modalRef = this.modalService.open(EmpresaModalComponent, {
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.id = id;
  }
}
