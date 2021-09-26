import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { from, Subscription } from 'rxjs';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _crudService: CrudService
  ) {
    this.buildFrom();
  }

  ngOnInit(): void {}

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

  async guardar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      let R: string;
      R = '{"empresa":{';
      R = R + '"nombre_comercial":"' + this.form.value.nombreComercial + '"';
      R = R + ', "razon_social":"' + this.form.value.razonSocial + '"';
      R = R + ', "telefono":"' + this.form.value.telefono + '"';
      R = R + ', "correo":"' + this.form.value.correoElectronico + '"';
      R = R + ', "nit":"' + this.form.value.nit + '"';
      R = R + ', "direccion":"' + this.form.value.direccion + '"';
      R = R + ', "estado":"' + this.form.value.estado + '"';

      R = R + '}';
      R = R + '}';

      this._crudService.saveEmpresa(R).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.error(err)
      );
    } else {
      this.form.markAllAsTouched();
    }
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
