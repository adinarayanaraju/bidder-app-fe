import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import {
  forgotPasswordSchema
} from "../../utils/validationSchema";
import "./auth.scss";
import AuthDetails from "./AuthDetails";

export default function ForgotPassword() {

  const signupInitialValues = {
    email: ""
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
            validationSchema={forgotPasswordSchema}
            onSubmit={handleFromSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="heading">
                  <h2>Forgot Password</h2>
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
          <AuthDetails formType="forgotPassword" />
        </div>
      </div>
    </div>
  );
}
