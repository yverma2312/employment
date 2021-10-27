import React from "react";
import MenuBar from "../LayOut/MenuBar";
import { NavLink } from "react-router-dom";

const InstructionsRequestSubmission = () => {
  return (
    <>
      <section>
        <MenuBar />

        <div className="InnerSection">
          <div className="InnerSectionBox">
            <h4>Procedure for Request Submission</h4>
            <ul>
              <li>
                <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                The form is only for the EMPLOYERS. APPLICANTS/ JOBSEEKERS
                SHOULD NOT SUBMIT THEIR BIO-DATA using this form
              </li>
              <li>
                <i className="mdi mdi-numeric-2-box-multiple-outline icon"></i>
                Read the instructions given below carefully before submitting
                the Request.
              </li>
              <li>
                <i className="mdi mdi-numeric-3-box-multiple-outline icon"></i>
                Enter the Basic Information regrading the Organisation and the
                Contact Details.
              </li>
              <li>
                <i className="mdi mdi-numeric-4-box-multiple-outline icon"></i>
                Enter the Vacancy details.
              </li>
              <li>
                <i className="mdi mdi-numeric-5-box-multiple-outline icon"></i>
                Enter the Qualification, Skill & Experience required for the
                Post. While entering remember the following:
                <ul>
                  <li>
                    <i className="mdi mdi-numeric-1-box icon"></i>The data added
                    to list will be submitted. Only selection of data does not
                    mean that data will be submitted.
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-2-box icon"></i>After
                    selecting the data you MUST CLICK ON “ADD CRITERIA” button.
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-3-box icon"></i>Skill set is
                    an auto-complete field, wait to populate. As you will type
                    data field will be populated and you have to select from the
                    appearing list by clicking on desired data.
                  </li>
                </ul>
              </li>
              <li>
                <i className="mdi mdi-numeric-6-box-multiple-outline icon"></i>
                In case of any details specific to the request are to be
                mentioned; Kindly mention the same in the Remarks column in not
                more than 100 words.
              </li>
              <li>
                <i className="mdi mdi-numeric-7-box-multiple-outline icon"></i>
                Click on “Submit” to generate the acknowledgement receipt.
              </li>
              <li>
                <i className="mdi mdi-numeric-8-box-multiple-outline icon"></i>
                In case of problems in submitting the details, kindly mail to
                <span>
                  <i class="mdi mdi-email-outline mailbox"></i>
                  <a href="mailto:help.dee@gmail.com">help.dee@gmail.com</a>
                </span>
              </li>
            </ul>
            <div className="importantInstruction">
              <h4>Important Instructions/ Points to Remember</h4>
              <ul>
                <li>
                  <i className="mdi mdi-numeric-1-box icon"></i>The fields
                  marked * are mandatory.
                </li>
                <li>
                  <i className="mdi mdi-numeric-2-box icon"></i>Please check all
                  the details and spelling before submitting the page. The
                  Department will not be responsible for the errors at the
                  User-end.
                </li>
              </ul>
            </div>
            <NavLink to="/RegistrationForm">
              <button
                type="button"
                className="btn btn-outline-info btn-sm submitButton"
              >
                <i class="mdi mdi-file-check btn-icon-prepend"></i>
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructionsRequestSubmission;
