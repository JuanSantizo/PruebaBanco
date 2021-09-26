import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { from, Subscription } from 'rxjs';

import { CrudService } from 'src/app/services/crud.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empresa-modal',
  templateUrl: './empresa-modal.component.html',
  styleUrls: ['./empresa-modal.component.css'],
})
export class EmpresaModalComponent implements OnInit {
  form!: FormGroup;

  @Input() id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private _crudService: CrudService,
    public activeModal: NgbActiveModal
  ) {
    this.buildFrom();
  }

  ngOnInit(): void {
    this.getEmpresa();
  }

  private buildFrom() {
    this.form = this.formBuilder.group({
      nombreComercial: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      nit: ['', [Validators.required]],
      estado: [''],
      direccion: ['', [Validators.required]],
    });
  }

  getEmpresa() {
    this._crudService.getEmpresa(this.id).subscribe(
      (res) => {
        this.form.patchValue({
          nombreComercial: res.nombre_comercial,
          razonSocial: res.razon_social,
          telefono: res.telefono,
          correoElectronico: res.correo,
          nit: res.nit,
          estado: res.estado,
          direccion: res.direccion,
        });
      },
      (err) => console.log(err)
    );
  }

  async guardar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      let R: string;
      R = '{"empresa":{';
      R = R + '"nombre_comercial":"' + this.form.value.nombreComercial + '"';
      R = R + ', "razon_social":"' + this.form.value.razonSocial + '"';
      R = R + ', "telefono":"' + this.form.value.telefono + '"';

      R = R + ', "nit":"' + this.form.value.nit + '"';
      R = R + ', "direccion":"' + this.form.value.direccion + '"';
      R = R + ', "estado":"' + this.form.value.estado + '"';

      R = R + '}';
      R = R + '}';

      this._crudService.updateEmpresa(this.id, R).subscribe(
        (res) => {
          this.activeModal.dismiss();
        },
        (err) => console.error(err)
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

  Cerrar() {
    this.activeModal.dismiss();
  }

  get nombreComercialField() {
    return this.form.get('nombreComercial');
  }

  get razonSocialField() {
    return this.form.get('razonSocial');
  }
  get telefonoField() {
    return this.form.get('telefono');
  }
  get correoElectronicoField() {
    return this.form.get('correoElectronico');
  }
  get nitField() {
    return this.form.get('nit');
  }
  get estadoField() {
    return this.form.get('estado');
  }
  get direccionField() {
    return this.form.get('direccion');
  }
}
