import React from "react";
import { NavLink } from "react-router-dom";
import MenuBar from "../LayOut/MenuBar";
const EmploymentPortal = () => {
  return (
    <>
      <section>
        <MenuBar />
        <div className="InnerSection">
          <div className="InnerSectionBox">
            <h4>FACILITY AVAILABLE</h4>

            <ul>
              <li>
                <NavLink
                  exact
                  to="assets/files/FinalManual.pdf"
                  target="_blank"
                >
                  <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                  Dte. of Employment Manual
                </NavLink>
                <i className="mdi mdi-file-pdf pdf"></i>
                <img src="assets/images/new.gif" alt="gif" className="gif" />
              </li>
              <li>
                <NavLink exact to="/ValidatingExistingData">
                  <i className="mdi mdi-numeric-2-box-multiple-outline icon"></i>
                  Validating Existing Data
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/InstructionsNewRegistration">
                  <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                  New Registration
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/LoginForm">
                  <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                  Jobseeker Login
                </NavLink>
                <ul>
                  <li>
                    <i className="mdi mdi-numeric-1-box icon"></i>
                    Modify/Updation Profile
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-2-box icon"></i>Add/delete
                    Qualification, Skill, Experience & Language Profile
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-3-box icon"></i>Add Preference
                    Profile
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-4-box icon"></i>Change
                    Password Profile
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-5-box icon"></i>Print
                    Certificate Profile
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-6-box icon"></i>Sponsorship
                    Detail
                    <img
                      src="assets/images/new.gif"
                      alt="gif"
                      className="gif"
                    />
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-7-box icon"></i>Forgot
                    Password (on the Login page) Profile
                  </li>
                </ul>
              </li>
              <li>
                <NavLink exact to="/CandidateList">
                  <i className="mdi mdi-numeric-5-box-multiple-outline icon"></i>
                  List of Newly Registered and Validated Jobseekers.
                </NavLink>
              </li>
              <li>
                <i className="mdi mdi-numeric-6-box-multiple-outline icon"></i>
                Vacancy Notification
                <img src="assets/images/new.gif" alt="gif" className="gif" />
                <ul>
                  <li>
                    <NavLink exact to="/InstructionsRequestSubmission">
                      <i className="mdi mdi-numeric-1-box icon"></i>Employers
                      not covered under Compulsory Notification of Vacancies
                      Act,1959
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/InstructionsRequestSubmissionUnderCNVAct1959"
                    >
                      <i className="mdi mdi-numeric-2-box icon"></i>
                      Employers covered under Compulsory Notification of
                      Vacancies Act,1959
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <div>
                  <NavLink exact to="/StatusofNotifiedVacancies">
                    <i className="mdi mdi-numeric-7-box-multiple-outline icon"></i>
                    Status of Vacancies Notified
                  </NavLink>

                  <img src="assets/images/new.gif" alt="gif" className="gif" />
                </div>
              </li>
              <li>
                <NavLink exact to="/">
                  <i className="mdi mdi-numeric-8-box-multiple-outline icon"></i>
                  Hiring of Skilled/ Semi-Skilled Workers for Short Duration
                </NavLink>

                <img src="assets/images/new.gif" alt="gif" className="gif" />
              </li>
            </ul>
            <div className="importantInstruction">
              <h4>IMPORTANT INSTRUCTIONS</h4>
              <ul>
                <li>
                  <i className="mdi mdi-numeric-1-box icon"></i>
                  The Registrants who have not updated their data are requested
                  to update/ validate their registration onlilne.
                </li>
                <li>
                  <i className="mdi mdi-numeric-2-box icon"></i>
                  User are requested to read User Manual before registering.
                </li>
                <li>
                  <i className="mdi mdi-numeric-3-box icon"></i>
                  Any problem/error to be reported at
                  <span>
                    <i className="mdi mdi-email-outline mailbox"></i>
                    <a href="mailto:help.dee@gmail.com">help.dee@gmail.com</a>
                  </span>
                </li>
                <li>
                  <i className="mdi mdi-numeric-4-box icon"></i>
                  <a href="/">View the answer</a> of reported problems/errors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmploymentPortal;
