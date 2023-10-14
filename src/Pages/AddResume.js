import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import "./AddResume.css";

const AddResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mhp_degree", resumeFile);

    const email = localStorage.getItem("email"); // Retrieve email from local storage
    formData.append("email", email);

    const token = localStorage.getItem("token"); // Retrieve token from local storage

    fetch("http://localhost:8000/auth/mhp-degree-upload/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`, // Include the token in the request header
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response
        console.log("Upload response:", data);
        const { status, message } = data;

        if (status === "success") {
          MySwal.fire({
            icon: "success",
            title: "Upload Successful",
            text: message,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home"); // Navigate to the home page
            }
          });
        } else {
          MySwal.fire({
            icon: "error",
            title: "Upload Failed",
            text: message,
          });
        }
      })
      .catch((error) => {
        // Handle error response
        console.error("Upload error:", error);
        MySwal.fire({
          icon: "error",
          title: "Upload Failed",
          text: "An error occurred while uploading your resume.",
        });
      });
  };

  return (
    <div className="res-container">
      <form onSubmit={handleSubmit}>
        <div className="res-input-field">
          <div className="res-submit-text">
            <label htmlFor="resume">Upload Resume</label>
          </div>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleResumeChange}
          />
        </div>
        <div className="res-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddResume;
