import React, { useEffect, useState } from "react";
import "./customEditor.scss";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FormGroup, Label } from "reactstrap";

export default function CustomEditor({
  label,
  name,
  value,
  placeholder = "Write something...",
  required = false,
  onChange,
  theme = "snow",
  readOnly = false,
  error,
  maxLength,
}) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = value || "";
    const text = temp.innerText || "";
    setCharCount(text.length);
  }, [value]);

  const handleStateUpdate = (content) => {
    if (name) {
      onChange(content, name);
    } else {
      onChange(content);
    }
  };

  const handleChange = (content, delta, source, editor) => {
    if (maxLength) {
      const plainText = editor.getText(); // this gets plain text (without html tags)
      if (plainText?.trim()?.length <= maxLength) {
        handleStateUpdate(content);
      } else {
      }
    } else {
      handleStateUpdate(content);
    }
  };
  return (
    <div className="custom-editor-wrapper position-relative">
      <FormGroup>
        {label && (
          <Label className="form-label">
            {label}
            {required && <span className="text-danger ms-1">*</span>}
          </Label>
        )}
        <ReactQuill
          theme={theme}
          value={value}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder={placeholder}
        />
        {error && <div className="invalid-feedback d-block">{error}</div>}
        {/* Char count */}
        {maxLength && (
          <div className="char-counter">
            {charCount} / {maxLength}
          </div>
        )}
      </FormGroup>
    </div>
  );
}
