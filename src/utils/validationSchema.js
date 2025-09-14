import * as Yup from "yup";

export const signUpSchema = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .matches(/^[a-zA-Z]+$/, "First name can only contain letters"),
  last_name: Yup.string().matches(
    /^[a-zA-Z]+$/,
    "Last name can only contain letters"
  ),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
