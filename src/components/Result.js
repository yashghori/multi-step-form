import React from "react";

const Result = ({ formData, setFormData, page, setPage, FormTitles }) => {
  return (
    <>
      <>
        <div className="other-info-container">
          <table border="1">
            <tr>
              <th>Email</th>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>{formData.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{formData.lastName}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{formData.username}</td>
            </tr>
            <tr>
              <th>Nationaloty</th>
              <td>{formData.nationality}</td>
            </tr>
            <tr>
              <th>Other</th>
              <td>{formData.other}</td>
            </tr>
          </table>
        </div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData);
                alert("SUBMITED");
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </>
    </>
  );
};

export default Result;
