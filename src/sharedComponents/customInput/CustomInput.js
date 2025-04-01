import React from "react";
import "./customInput.scss";
import { Input, Label } from "reactstrap";
export default function CustomInput({
  label,
  type = "text",
  name,
  value,
  placeholder,
  required = false,
  onChange,
  onKeyPress,
  error,
}) {
  return (
    <div className="custom-input-wrapper">
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="input-box"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
