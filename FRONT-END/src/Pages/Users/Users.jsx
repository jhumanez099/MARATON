import React from 'react';
import './Users.css';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import LogoUnicatolica from '../../assets/IMG/logo_unicatolica.png'

import { useForm, Controller } from "react-hook-form";

export default function Users() {
  const { handleSubmit, control } = useForm();

  const options = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
  ];


  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='container-fluid d-flex'>
        <div className='row'>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-toggler"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-between" id="navbar-toggler">
                <a className="navbar-brand">
                  <img src={LogoUnicatolica} alt="logo unicatolica" style={{ height: "38pt" }} />
                </a>
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item">
                    <a className="nav-link" href="#Cerrar_sesion">
                      Cerrar Sesion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='row'>
            <div className='container-fluid '>
              <div className='row'>
                <div className='col-6'>
                  <SelectField
                    label='Programa Academico'
                    options={options}
                    id='selectField'
                    control={control}
                  />
                </div>
                <div className='col-6'>
                  <SelectField
                    label='Facultad'
                    options={options}
                    id='selectField'
                    control={control}
                  />
                </div>
                <div className='col-6'>
                  <SelectField
                    label='Grupo_Investigacion'
                    options={options}
                    id='selectField'
                    control={control}
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Convocatoria de prueba'
                    type='text'
                    placeholder='Escriba la Convocatoria de prueba'
                    name='Nombre'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Fecha de inicio'
                    type='date'
                    name='FechaInicio'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Fecha Finalizacion'
                    type='date'
                    name='FechaFinal'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <SelectField
                    label='Estado'
                    options={options}
                    id='selectField'
                    control={control}
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Acta de inicio'
                    type='file'
                    name='ActaInicio'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Acta de compromiso'
                    type='file'
                    name='ActoCompromiso'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Acta de propiedad intelectual'
                    type='file'
                    name='ActaIntelectual'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Guia de soporte'
                    type='file'
                    name='GuiaSoporte'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Investigadores'
                    type='text'
                    name='Investigadores'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Estudiantes'
                    type='text'
                    name='Estudiantes'
                    placeholder='Mencione todos los estudiantes'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <SelectField
                    label='Semillero'
                    options={options}
                    id='selectField'
                    control={control}
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Titulo'
                    type='text'
                    name='Titulo'
                    placeholder='Mencione todos los estudiantes'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Resumen'
                    type='text'
                    name='Resumen'
                    placeholder='Mencione todos los estudiantes'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Objectivos'
                    type='text'
                    name='GuiaSoporte'
                    placeholder='Mencione todos los estudiantes'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Metodologia'
                    type='text'
                    name='Metodologia'
                    placeholder='Mencione todos los estudiantes'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
                <div className='col-6'>
                  <InputField
                    label='Cronograma'
                    type='text'
                    name='Cronograma'
                    placeholder='Mencione todos los estudiantes'
                    control={control} // Pasa la instancia de useForm a InputField
                  />
                </div>
              </div>
              <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
                <input type='submit' value='Enviar' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

  );
}
