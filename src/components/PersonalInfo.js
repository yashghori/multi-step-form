import React, { useState } from "react";

function PersonalInfo({ formData, setFormData, page, setPage, FormTitles }) {
  const [validate, setValidate] = useState({
    usernameValidate: false,
    firstNameValidate: false,
    lastNameValidate: false,
  });
  const nxtButton = () => {
    if (
      formData.username.length >= 3 &&
      formData.firstName.length >= 3 &&
      formData.lastName.length >= 3
    ) {
      setPage((currPage) => currPage + 1);
    } else {
      if (formData.firstName.length < 3) {
        console.log(1);
        setValidate({ ...validate, firstNameValidate: true });
        return;
      }
      if (formData.lastName.length < 3) {
        console.log(2);
        setValidate({ ...validate, lastNameValidate: true });
        return;
      }
      if (formData.username.length < 3) {
        console.log(3);
        setValidate({ ...validate, usernameValidate: true });
      }
    }
  };
  return (
    <>
      <div className="personal-info-container">
        <input
          type="text"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        {validate.firstNameValidate ? (
          <p style={{ color: "red" }}>firstname must be greater then 5</p>
        ) : null}
        <input
          type="text"
          placeholder="Last Name..."
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        {validate.lastNameValidate ? (
          <p style={{ color: "red" }}>lastname must be greater then 5</p>
        ) : null}
        <input
          type="text"
          placeholder="Username..."
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
        {validate.usernameValidate ? (
          <p style={{ color: "red" }}>usenme must be greater then 5</p>
        ) : null}
      </div>
      <div className="footer">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button onClick={nxtButton}>
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}

export default PersonalInfo;
