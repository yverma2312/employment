import React from "react";
import { NavLink } from "react-router-dom";
import MenuBar from "../LayOut/MenuBar";

const LoginForm = () => {
  return (
    <>
      <section>
        <MenuBar />
        <div className="InnerSection">
          <div className="InnerSectionBox">
            <div class="card">
              <div class="card-body">
                <form class="forms-sample">
                  <div class="form-group row">
                    <label class="col-sm-1 col-form-label">Login as: </label>
                    <div class="col-sm-3">
                      <select class="form-control">
                        <option>Select</option>
                        <option>Candidate</option>
                        <option>Employer</option>
                        <option>Department</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputUsername2"
                      class="col-sm-1 col-form-label"
                    >
                      User Name
                    </label>
                    <div class="col-sm-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputUsername2"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="exampleInputPassword2"
                      class="col-sm-1 col-form-label"
                    >
                      Password
                    </label>
                    <div class="col-sm-3">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword2"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div class=" ml-6 mb-4">
                    <button
                      type="submit"
                      class="btn btn-outline-info btn-sm ml-4 mb-2 "
                    >
                      <i class="mdi mdi-file-check btn-icon-prepend"></i>
                      Login
                    </button>
                    <button class="btn btn-outline-danger btn-sm ml-2 mb-2">
                      <i className="mdi mdi-refresh"></i>
                      Reset
                    </button>

                    <ul>
                      <li className="mb-1">
                        <NavLink exact to="/ResetPassword">
                          Forgot Password
                        </NavLink>
                      </li>
                      <li className="mb-1">
                        <NavLink exact to="/">
                          New Registration
                        </NavLink>
                      </li>
                      <li className="mb-1">
                        <NavLink exact to="/">
                          Update Email and Mobile number (For Registration
                          Before 2021)
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="disclaimer">
                    Disclaimer: The Directorate of Employment does not accept
                    the responsiblity for the correctness of the information
                    provided by the Candidates. Anybody using the information
                    provided on this website would need to conduct verification
                    at user end wherever required.
                  </div>
                </form>
              </div>
            </div>
            <div className="importantInstruction">
              <h4>Important Instructions </h4>
              <ul>
                <li>
                  <i className="mdi mdi-numeric-1-box icon"></i>Select the
                  required User Type ('Candidate' for Jobseekers) in 'Login As'
                </li>
                <li>
                  <i className="mdi mdi-numeric-2-box icon"></i>Enter the
                  correct User ID and wait for the 'Login' button to be
                  activated. It will be activated only if the User ID is
                  correctly entered.
                </li>
                <li>
                  <i className="mdi mdi-numeric-3-box icon"></i>If the 'Login'
                  button is not activated, kindly re-check the User ID.
                </li>
                <li>
                  <i className="mdi mdi-numeric-4-box icon"></i>If the User ID
                  is correct and the 'Login' is not activated, delete the last
                  character and re-enter it. Wait for the Login to be activated.
                </li>
                <li>
                  <i className="mdi mdi-numeric-5-box icon"></i>If 'Login'
                  button is activated, enter the Password and click on 'Login'.
                </li>
                <li>
                  <i className="mdi mdi-numeric-6-box icon"></i>If you have
                  forgotten your Password, click on 'Forgot Password'. ID.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
