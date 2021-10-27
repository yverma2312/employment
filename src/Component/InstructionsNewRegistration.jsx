import React from "react";
import MenuBar from "../LayOut/MenuBar";
import { NavLink } from "react-router-dom";

const InstructionsNewRegistration = () => {
  return (
    <>
      <section>
        <MenuBar />

        <div className="InnerSection">
          <div className="InnerSectionBox">
            <h4>Procedure for New Registration</h4>
            <ul>
              <li>
                <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                Read the instructions given below carefully before clicking on
                “Register” button.
              </li>
              <li>
                <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                Enter the basic information and select required fields and click
                on “Continue” button.
              </li>
              <li>
                <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                Enter the Qualification, Skill set, Experience, National &
                International Language. While entering remember the following:
                <ul>
                  <li>
                    <i className="mdi mdi-numeric-1-box icon"></i>The data added
                    to list will be submitted. Only selection of data does not
                    mean that data will be submitted.
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-2-box icon"></i>After
                    selecting the data you MUST CLICK ON “ADD TO LIST” button.
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-3-box icon"></i>You can enter
                    maximum of 5 records in each category.
                  </li>
                  <li>
                    <i className="mdi mdi-numeric-4-box icon"></i>
                    Skill set is an auto-complete field, wait to populate. As
                    you will type data field will be populated and you have to
                    select from the appearing list by clicking on desired data.
                  </li>
                </ul>
              </li>
              <li>
                <i className="mdi mdi-numeric-4-box-multiple-outline icon"></i>
                Click on “Submit” to generate receipt. The userid and password
                for accessing the Employment Portal is provided in the receipt.
              </li>
              <li>
                <i className="mdi mdi-numeric-5-box-multiple-outline icon"></i>
                In order to change the Password, Log-in using the User ID and
                Password mentioned.
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
                <li>
                  <i className="mdi mdi-numeric-3-box icon"></i>The verification
                  of details provided by the User is not the responsibilty of
                  the Department.
                </li>
                <li>
                  <i className="mdi mdi-numeric-4-box icon"></i>The Registration
                  Process consists of TWO Steps: Providing Basic Details and
                  Providing Qualification & Experience Details.
                </li>
                <li>
                  <i className="mdi mdi-numeric-5-box icon"></i>In the first
                  Form, Please fill in the mandatory fields (Point 1).
                </li>
                <li>
                  <i className="mdi mdi-numeric-6-box icon"></i>In the second
                  Form, enter your qualification, experience and language
                  details.
                </li>
                <li>
                  <i className="mdi mdi-numeric-7-box icon"></i>Click on 'Add'
                  to enter further details.
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

export default InstructionsNewRegistration;
