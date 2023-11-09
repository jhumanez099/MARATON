import React from "react";
import './Context.css'
import Input from "../../components/InputField"

export default function Context({componentPage,stadePage}) {
  
  return (
    <div className="container-fluid">
      { componentPage[stadePage] } 
    </div>
  );
}