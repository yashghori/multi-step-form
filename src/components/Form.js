import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          FormTitles={FormTitles}
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          FormTitles={FormTitles}
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else {
      return (
        <OtherInfo
          FormTitles={FormTitles}
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
      </div>
    </div>
  );
}

export default Form;
