import React from "react";
import { Controller } from "react-hook-form";

export default function InputField({ label, type, name, placeholder, disabled, control }) {
  return (
    <div className="mb-3 d-flex align-items-center">
      <label
        htmlFor="exampleInput"
        className="col-sm-4 col-lg-4 d-flex justify-content-center align-items-center form-label me-2"
      >
        {label}
      </label>
      <div className="col-sm-5 col-lg-8 mx-auto rounded border-black">
        <Controller
          name={name} // Nombre del campo
          control={control} // Utiliza la instancia de control pasada como prop
          defaultValue="" // Valor inicial
          render={({ field }) => (
            <input
              type={type}
              className="form-control border-black"
              placeholder={placeholder}
              {...field}
            />
          )}
        />
      </div>
    </div>
  );
}