import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import StudiesInfo from "./StudiesInfo";
import SignUpInfo from "./SignUpInfo";
import ReviewInfo from "./ReviewInfo";

export type User = {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  nationality: string;
  age: string;
  currentjob: string;
  university: string;
  highschool: string;
  foreignLanguage: string;
};

export default function Form() {
  const [page, setPage] = useState<number>(0);
  const [formData, setformData] = useState<User>({
    email: "ioaana",
    userName: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    nationality: "",
    age: "",
    currentjob: "",
    university: "",
    highschool: "",
    foreignLanguage: "",
  });
  const formTitles = ["Sign Up", "Personal Info", "Studies", "Review info"];

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setformData={setformData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setformData={setformData} />;
    } else if (page === 2) {
      return <StudiesInfo formData={formData} setformData={setformData} />;
    } else if (page === 3) {
      return <ReviewInfo formData={formData} setformData={setformData} />;
    }
  };

  function next() {
    setPage((prev) => prev + 1);
    if (page === formTitles.length - 1) {
      alert("Welcome to our club!");
    }
  }
  function back() {
    setPage((prev) => prev - 1);
  }
  let a = 1;
  let b = 2;
  return (
    <>
      {page <= formTitles.length - 1 && (
        <div className="Form">
          <div className="progressbar">
            <div
              style={{
                width:
                  page === 0
                    ? "25%"
                    : page === 1
                    ? "50%"
                    : page === 2
                    ? "75%"
                    : "100%",
              }}
              className="miniprogressbar"
            ></div>
          </div>
          <div className="formcontainer">
            <div className="header">
              <h1>{formTitles[page]}</h1>
            </div>

            <div className="body">{pageDisplay()}</div>
            <div className="footer">
              {page < formTitles.length ? (
                <button disabled={page === 0} onClick={back}>
                  Prev
                </button>
              ) : (
                <></>
              )}
              {page !== formTitles.length && (
                <button onClick={next}>
                  {page < formTitles.length - 1 ? "Next" : "Submit"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
