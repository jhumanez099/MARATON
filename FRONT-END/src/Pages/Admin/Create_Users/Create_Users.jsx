import React from 'react';
import { useForm } from 'react-hook-form';
import './Create_Users.css';

export default function Create_Users() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    
  };

  return (
    <div className="create-users-container">
      <form className="create-users-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center mb-4">Crear Usuario</h2>
        
        {/* Nombre */}
        <div className="form-group">
          <input 
            {...register("nombre", { required: "El nombre es requerido" })}
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
          {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}
        </div>
        
        {/* Correo Electrónico */}
        <div className="form-group">
          <input 
            {...register("correo", { required: "El correo electrónico es requerido" })}
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
          />
          {errors.correo && <p className="error-message">{errors.correo.message}</p>}
        </div>
        
        {/* Rol */}
        <div className="form-group">
          <select {...register("rol", { required: "El rol es requerido" })} className="form-control">
            <option value="">Seleccionar Rol</option>
            <option value="estudiante">Estudiante</option>
            <option value="lider_semillero">Líder de Semillero</option>
            <option value="investigador_principal">Investigador Principal</option>
            <option value="co_investigador">Co-Investigador</option>
          </select>
          {errors.rol && <p className="error-message">{errors.rol.message}</p>}
        </div>

        {/* Programa Académico */}
        <div className="form-group">
          <select {...register("programaAcademico", { required: "El programa académico es requerido" })} className="form-control">
            <option value="">Seleccionar Programa Académico</option>
            <option value="ciencias_basicas_ingenieria">Ciencias Básicas e Ingeniería</option>
            <option value="educacion">Educación</option>
            <option value="salud">Salud</option>
            <option value="teologia">Teología</option>
          </select>
          {errors.programaAcademico && <p className="error-message">{errors.programaAcademico.message}</p>}
        </div>

        {/* Facultad */}
        <div className="form-group">
          <select {...register("facultad", { required: "La facultad es requerida" })} className="form-control">
            <option value="">Seleccionar Facultad</option>
            <option value="ciencias_juridicas_politicas">CIENCIAS JURÍDICAS Y POLÍTICAS</option>
            <option value="ciencia_basicas">Ciencias Básicas</option>
            <option value="comunicacion_lenguaje">Comunicación y Lenguaje</option>
            <option value="ciencias_salud">Ciencias de la Salud</option>
            <option value="humanidades">Humanidades</option>
          </select>
          {errors.facultad && <p className="error-message">{errors.facultad.message}</p>}
        </div>

        {/* Grupo de Investigación */}
        <div className="form-group">
          <select {...register("grupoInvestigacion", { required: "El grupo de investigación es requerido" })} className="form-control">
            <option value="">Seleccionar Grupo de Investigación</option>
            <option value="lumen_humanitas">Lumen Humanitas</option>
            <option value="derecho">Derecho</option>
            <option value="khimera">Khimera</option>
            <option value="giico">Giico</option>
            <option value="yeshua">Yeshua</option>
            <option value="educarte">Educarte</option>
          </select>
          {errors.grupoInvestigacion && <p className="error-message">{errors.grupoInvestigacion.message}</p>}
        </div>

        {/* Semillero */}
        <div className="form-group">
          <select {...register("semillero", { required: "El semillero es requerido" })} className="form-control">
            <option value="">Seleccionar Semillero</option>
            <option value="ayni">Semillero de Investigación AYNI</option>
            <option value="serendipia">Semillero de Investigación SERENDIPIA</option>
            <option value="proyectos_grupos_investigacion">Proyectos y Grupos de Investigación</option>
            <option value="desapp">Semillero de Investigación DESAPP</option>
          </select>
          {errors.semillero && <p className="error-message">{errors.semillero.message}</p>}
        </div>

        {/* Contraseña */}
        <div className="form-group">
          <input 
            {...register("contrasena", { required: "La contraseña es requerida", minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" } })}
            type="password"
            className="form-control"
            placeholder="Crear contraseña"
          />
          {errors.contrasena && <p className="error-message">{errors.contrasena.message}</p>}
        </div>

        {/* Botón de registro */}
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
}