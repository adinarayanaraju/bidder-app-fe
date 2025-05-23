import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import CustomDropDown from "../../../sharedComponents/customDropDown/CustomDropDown";
import { useSelector } from "react-redux";
import { USER_ROLE } from "../../../utils/propertyResolver";
import CustomInput from "../../../sharedComponents/customInput/CustomInput";

export default function UserForm() {
  const initialFormState = {
    role_id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [userDetail, setUserDetail] = useState(initialFormState);
  const [error, setError] = useState(initialFormState);

  const { loginUserInfo } = useSelector((state) => state.user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));

    //Clear the error for the field being type into
    setError((prev)=>{
      const newErrors ={...prev}
      if(newErrors[name]){
        delete newErrors[name];
      }
      return newErrors
    })
  };

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!userDetail?.role_id) newErrors.role_id = "User role is required";
    if (!userDetail.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!userDetail?.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(userDetail?.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!userDetail?.password.trim()) {
      newErrors.password = "Password is required";
    } else if (userDetail?.password.trim()?.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!userDetail?.confirm_password.trim()) {
      newErrors.confirm_password = "Confirm password is required";
    } else if (userDetail.password !== userDetail.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDropDownChange = (value) => {
    setUserDetail((prev) => ({
      ...prev,
      role_id: value,
    }));
  };

  const handleSubmit = () => {
    if (validateFields()) {
      //logic
    }
  };
  return (
    <div className="user-form-wrapper">
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomDropDown
            label="User Role"
            name="role_id"
            value={userDetail?.role_id}
            onChange={handleDropDownChange}
            placeholder="Choose a role"
            options={[
              ...(loginUserInfo?.role_id === USER_ROLE.SUPER_ADMIN
                ? [{ label: "Admin", value: USER_ROLE.ADMIN }]
                : []),
              {
                label: "User",
                value: USER_ROLE.USER,
              },
            ]}
            required
            error={error?.role_id}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomInput
            label="First Name"
            type="text"
            name="first_name"
            value={userDetail?.first_name}
            placeholder="Enter first name"
            required
            onChange={handleInputChange}
            error={error?.first_name}
            validationRegex="^[A-Za-z][A-Za-z ]*$"
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomInput
            label="Last Name"
            type="text"
            name="last_name"
            value={userDetail?.last_name}
            placeholder="Enter last name"
            required={false}
            onChange={handleInputChange}
            error={error?.last_name}
            validationRegex="^[A-Za-z][A-Za-z ]*$"
          />
        </Col>

        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomInput
            label="Email"
            type="text"
            name="email"
            value={userDetail?.email}
            placeholder="Enter email"
            required
            onChange={handleInputChange}
            error={error?.email}
          />
        </Col>

        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={userDetail?.password}
            placeholder="Enter password"
            required
            onChange={handleInputChange}
            error={error?.password}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomInput
            label="Confirm Password"
            type="password"
            name="confirm_password"
            value={userDetail?.confirm_password}
            placeholder="Enter confirm password"
            required
            onChange={handleInputChange}
            error={error?.confirm_password}
          />
        </Col>
      </Row>

      <Row className="mt-3 d-flex justify-content-center align-items-center gap-2">
        <Col xs={12} sm={6} md={4} lg={2}>
          <button className="secondary-button w-100">Reset</button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <button className="custom-button w-100" onClick={handleSubmit}>
            Submit
          </button>
        </Col>
      </Row>
    </div>
  );
}
