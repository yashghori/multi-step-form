import React, { useState } from "react";

function SignUpInfo({ formData, setFormData, page, setPage, FormTitles }) {
  const [validate, setValidate] = useState({
    email: false,
    password: false,
  });
  const nxtButton = () => {
    if (formData.email.includes("@") && formData.password.length > 5) {
      setPage((currPage) => currPage + 1);
    } else {
      if (!formData.email.includes("@")) {
        setValidate({ ...validate, email: true });
      } else {
        setValidate({ ...validate, password: true });
      }
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <input
          type="email"
          placeholder="Email..."
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        {validate.email ? (
          <p style={{ color: "red" }}>email include @</p>
        ) : null}
        <input
          type="text"
          placeholder="Password..."
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        {validate.password ? (
          <p style={{ color: "red" }}>password must be greater then 5</p>
        ) : null}
        <input
          type="text"
          placeholder="Confirm Password..."
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, confirmPassword: event.target.value })
          }
        />
      </div>
      <div className="footer">
        <button disabled={page == 0}>Prev</button>
        <button onClick={nxtButton}>
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}

export default SignUpInfo;
