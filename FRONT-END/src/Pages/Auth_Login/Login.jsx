import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const rememberMe = watch('rememberMe');

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center mb-4">Inicio de Sesión</h2>
        <div className="form-group">
          <input 
            {...register("email", { required: true })}
            type="email"
            className="input-field form-control"
            placeholder="Correo electrónico"
            required
          />
          {errors.email && <p className="error-message">El correo electrónico es requerido</p>}
        </div>
        <div className="form-group">
          <input 
            {...register("password", { required: true })}
            type="password"
            className="input-field form-control"
            placeholder="Contraseña"
            required
          />
          {errors.password && <p className="error-message">La contraseña es requerida</p>}
        </div>
        <div className="form-group form-check">
          <input 
            {...register("rememberMe")}
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
          />
          <label className="form-check-label" htmlFor="rememberMe">Recuérdame</label>
        </div>
        <div className="form-group">
          <a href="/forgot-password" className="forgot-password">
            Olvidé mi contraseña
          </a>
        </div>
        <button 
          type="submit"
          className="login-btn btn btn-primary btn-block"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;