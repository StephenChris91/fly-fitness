import React from "react";

//styles
import "./Button.css";

export default function Button({ children }) {
  return <button className="btn mx-auto">{children}</button>;
}
