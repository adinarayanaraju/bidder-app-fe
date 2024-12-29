import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { signUpSchema } from "../../utils/validationSchema";
import "./auth.scss";
import AuthDetails from "./AuthDetails";
import eye from "../../assets/icons/eye.svg";
import eyeHide from "../../assets/icons/eye_hide.svg";

export default function Signup() {
  const [isPasswordView, setIsPasswordView] = useState(false);
  const [isConfirmPasswordView, setIsConfirmPasswordView] = useState(false);

  const signupInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleFromSubmit = (values, { resetForm }) => {
    console.log("form values", values);
    setTimeout(() => {
      resetForm();
    }, 4000);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card row m-0">
        {/* Form Section */}
        <div className="col-12 col-md-12 col-lg-6 form-section">
          <Formik
            initialValues={signupInitialValues}
            validationSchema={signUpSchema}
            onSubmit={handleFromSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="heading">
                  <h2>Signup</h2>
                </div>
                {/* First Name */}
                <FormGroup>
                  <Label>
                    First Name <span className="error">*</span>
                  </Label>
                  <Field
                    type="text"
                    name="first_name"
                    className={`form-control custom-input-box ${
                      touched.first_name && errors.first_name
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter First Name"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>
                {/* Last Name */}
                <FormGroup>
                  <Label>Last Name</Label>
                  <Field
                    type="text"
                    name="last_name"
                    className={`form-control custom-input-box ${
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
                {/* Email */}
                <FormGroup>
                  <Label>
                    Email <span className="error">*</span>
                  </Label>
                  <Field
                    type="email"
                    name="email"
                    className={`form-control custom-input-box ${
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
                {/* Password */}
                <FormGroup>
                  <Label>
                    Password <span className="error">*</span>
                  </Label>
                  <div className="password-input-container">
                    <Field
                      type={isPasswordView ? "text" : "password"}
                      name="password"
                      className={`form-control  custom-input-box ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Password"
                    />
                    <div
                      className="eye-icon"
                      onClick={() => setIsPasswordView(!isPasswordView)}
                    >
                      <img
                        src={isPasswordView ? eye : eyeHide}
                        alt="password hide"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </FormGroup>
                {/* Confirm Password */}
                <FormGroup>
                  <Label>
                    Confirm Password <span className="error">*</span>
                  </Label>
                  <div className="password-input-container">
                    <Field
                      type={isConfirmPasswordView ? "text" : "password"}
                      name="confirm_password"
                      className={`form-control custom-input-box ${
                        touched.confirm_password && errors.confirm_password
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Confirm Password"
                    />
                    <div
                      className="eye-icon"
                      onClick={() =>
                        setIsConfirmPasswordView(!isConfirmPasswordView)
                      }
                    >
                      <img
                        src={isConfirmPasswordView ? eye : eyeHide}
                        alt="password hide"
                      />
                    </div>
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </FormGroup>
                {/* Submit Button */}
                <Button type="submit" className="btn btn-primary">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Details Section */}
        <div className="col-12 col-md-12 col-lg-6  details-section">
          <AuthDetails />
        </div>
      </div>
    </div>
  );
}
