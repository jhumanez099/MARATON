import React from "react";
import './Context.css'

export default function Context({componentPage,stadePage}) {
  
  return (
    <div className="container-fluid">
      { componentPage[stadePage] }
    </div>
  );
}