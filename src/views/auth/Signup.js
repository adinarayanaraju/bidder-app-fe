import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Input, Label } from "reactstrap";

export default function Signup() {
  return (
    <div>
      <Formik initialValues={{ first_name: "", last_name: "" }}>
        {({ errors, touched, values }) => (
          <Form>
            <FormGroup>
              <Label>
                First Name <span className="error">*</span>
              </Label>
              <Field
                type="text"
                name="first_name"
                className={`form-control ${
                  touched.first_name && errors.first_name ? "is-invalid" : ""
                }`}
                placeholder="Enter First Name"
                style={{ maxWidth: "170px" }}
              />
              <ErrorMessage name="first_name" component="div" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
