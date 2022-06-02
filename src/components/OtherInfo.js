import React from "react";

function OtherInfo({ formData, setFormData, page, setPage, FormTitles }) {
  return (
    <>
      <div className="other-info-container">
        <input
          required
          type="text"
          placeholder="Nationality..."
          value={formData.nationality}
          onChange={(e) => {
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
        <input
          required
          type="text"
          placeholder="Other..."
          value={formData.other}
          onChange={(e) => {
            setFormData({ ...formData, other: e.target.value });
          }}
        />
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
              alert("FORM SUBMITTED");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}

export default OtherInfo;
