import React from "react";
import { Controller } from "react-hook-form";

export default function SelectField({ label, options, id, control }) {
  return (
    <div className="mb-3 d-flex align-items-center">
      <label
        htmlFor={id}
        className="col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center form-label me-2"
        style={{
          fontSize: "clamp(8px, 3vw, 15px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
        title={label} // Muestra el texto completo en el hover
      >
        {label}
      </label>
      <div className="col-sm-5 col-lg-8 mx-auto rounded border-black">
        <Controller
          name={id}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select className="form-select border-black" {...field}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      </div>
    </div>
  );
}
