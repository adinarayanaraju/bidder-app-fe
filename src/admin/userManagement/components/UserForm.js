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

  const { loginUserInfo } = useSelector((state) => state.user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropDownChange = (value) => {
    setUserDetail((prev) => ({
      ...prev,
      role_id: value,
    }));
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
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <CustomInput
            label="Last Name"
            type="text"
            name="last_name"
            value={userDetail?.last_name}
            placeholder="Enter last name"
            required
            onChange={handleInputChange}
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
          />
        </Col>
      </Row>

      <Row className="mt-3 d-flex justify-content-center align-items-center gap-2">
        <Col xs={12} sm={6} md={4} lg={2}>
          <button className="secondary-button w-100">Reset</button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <button className="custom-button w-100">Submit</button>
        </Col>
      </Row>
    </div>
  );
}
