import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { signInSchema } from "../../utils/validationSchema";
import "./auth.scss";
import AuthDetails from "./AuthDetails";
import eye from "../../assets/icons/eye.svg";
import eyeHide from "../../assets/icons/eye_hide.svg";

export default function Signin() {
  const [isPasswordView, setIsPasswordView] = useState(false);

  const signupInitialValues = {
    email: "",
    password: "",
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
            validationSchema={signInSchema}
            onSubmit={handleFromSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="heading">
                  <h2>Signin</h2>
                </div>
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
          <AuthDetails formType="signin" />
        </div>
      </div>
    </div>
  );
}
