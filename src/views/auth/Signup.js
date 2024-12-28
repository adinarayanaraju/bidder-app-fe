import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { signUpSchema } from "../../utils/validationSchema";

export default function Signup() {
  const signupInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleFromSubmit = (values, {resetForm})=>{
    console.log('form values', values)
    setTimeout(() => {
      resetForm()
    }, 4000);
  }
  return (
    <div className="m-4">
      <Formik 
      initialValues={signupInitialValues}
      validationSchema={signUpSchema}
      onSubmit={handleFromSubmit}
      >
        {({ errors, touched, }) => (
          <Form>
            {/* first name */}
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
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            {/* last name */}
            <FormGroup>
              <Label>
                Last Name 
              </Label>
              <Field
                type="text"
                name="last_name"
                className={`form-control ${
                  touched.last_name && errors.last_name ? "is-invalid" : ""
                }`}
                placeholder="Enter Last Name"
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            {/* email id */}
            <FormGroup>
              <Label>
                Email <span className="error">*</span>
              </Label>
              <Field
                type="email"
                name="email"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            {/* password */}
            <FormGroup>
              <Label>
                Password <span className="error">*</span>
              </Label>
              <Field
                type="password"
                name="password"
                className={`form-control ${
                  touched.password && errors.password ? "is-invalid" : ""
                }`}
                placeholder="Enter Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            {/* confirm password */}
            <FormGroup>
              <Label>
                Confirm Password <span className="error">*</span>
              </Label>
              <Field
                type="password"
                name="confirm_password"
                className={`form-control ${
                  touched.confirm_password && errors.confirm_password
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="invalid-feedback"
              />
            </FormGroup>
            {/* submit button */}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
