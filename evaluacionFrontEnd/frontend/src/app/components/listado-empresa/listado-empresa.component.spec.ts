import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEmpresaComponent } from './listado-empresa.component';

describe('ListadoEmpresaComponent', () => {
  let component: ListadoEmpresaComponent;
  let fixture: ComponentFixture<ListadoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
