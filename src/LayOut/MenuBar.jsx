import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from "react-router";

const MenuBar = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const Url = history.location.pathname;
  const HomePageNavbarButton = () => {
    return (
      <>
        <NavLink exact to="/">
          <button
            type="button"
            className="btn btn-inverse-info  btn-icon"
            title="Home"
          >
            <i className="mdi mdi-home-outline"></i>
          </button>
        </NavLink>

        <NavLink exact to="/assets/files/Manual.pdf" target="_blank">
          <button
            type="button"
            className="btn btn-inverse-info  btn-icon"
            title="Help"
          >
            <i className="mdi mdi mdi-help"></i>
          </button>
        </NavLink>
      </>
    );
  };
  const InnerPageNavbarButton = () => {
    return (
      <>
        <NavLink exact to="/">
          <button
            type="button"
            className="btn btn-inverse-info  btn-icon"
            title="Home"
          >
            <i className="mdi mdi-home-outline"></i>
          </button>
        </NavLink>
        <span>
          <button
            type="button"
            className="btn btn-inverse-info  btn-icon"
            onClick={history.goBack}
            title="Back"
          >
            <i className="mdi mdi mdi-keyboard-backspace"></i>
          </button>
          <NavLink exact to="/assets/files/Manual.pdf" target="_blank">
            <button
              type="button"
              className="btn btn-inverse-info  btn-icon"
              style={{ marginLeft: "10px" }}
              title="Help"
            >
              <i className="mdi mdi mdi-help"></i>
            </button>
          </NavLink>
        </span>
      </>
    );
  };
  const PageTitle = () => {
    switch (Url) {
      case "/":
        return <h3>Empolyment Portal</h3>;
      case "/ValidatingExistingData":
        return <h3>Validating Existing Data</h3>;
      case "/CheckForExistingUsers":
        return <h3>Check For Existing Users</h3>;
      case "/InstructionsNewRegistration":
        return <h3>New Registration</h3>;
      case "/RegistrationForm":
        return (
          <h3> Registration Form (Fields marked with * are Mandatory.)</h3>
        );
      case "/LoginForm":
        return <h3>Login Form </h3>;
      case "/CandidateList":
        return <h3>Candidate List </h3>;
      case "/InstructionsRequestSubmission":
        return <h3> Request Submission</h3>;
      case "/RequestforSponsoringSuitableCandidates":
        return <h3> Request for Sponsoring Suitable Candidates</h3>;
      case "/InstructionsRequestSubmissionUnderCNVAct1959":
        return <h3>Request Submission Under CNV Act 1959 </h3>;
      case "/StatusofNotifiedVacancies":
        return <h3>Status of Notified Vacancies</h3>;
      case "/ResetPassword":
        return <h3>Reset Password</h3>;
      case "/NewlyRegisteredCandidateList":
        return <h3>Newly Registered Candidate List</h3>;
      case "/ValidatedExistingCandidateList":
        return <h3>Validated Existing Candidate List</h3>;
      case `/CoveredNonCNVAct1959/${id}`:
        return <h3>Covered Non-CNV Act,1959</h3>;
      default:
        return <h3>No Title Found</h3>;
    }
  };

  return (
    <>
      <div className="page-header homeBotton ">
        {Url === "/" ? <HomePageNavbarButton /> : <InnerPageNavbarButton />}
      </div>
      <div className="portal">{PageTitle()}</div>
      {/* <div className="page-header homeBotton ">
        {Url === "/" ? <HomePageNavbar /> : <InnerPageNavbar />}
      </div> */}
    </>
  );
};

export default MenuBar;
