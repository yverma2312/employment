import React from "react";
import MenuBar from "../LayOut/MenuBar";
const CheckForExistingUsers = () => {
  return (
    <>
      <section>
        <MenuBar />
        <div className="InnerSection">
          <div className="InnerSectionBox">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <form className="forms-sample">
                      <div className="form-group row">
                        <label
                          for="exampleInputUsername2"
                          className="col-sm-3 col-form-label"
                        >
                          Existing Registration Id:
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsername2"
                            placeholder="Existing Registration Id"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputEmail2"
                          className="col-sm-3 col-form-label"
                        >
                          First Name:
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail2"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputMobile"
                          className="col-sm-3 col-form-label"
                        >
                          Father's/ Husband's/ Guardian's Name:
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputMobile"
                            placeholder="Father's/ Husband's/ Guardian's Name"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputPassword2"
                          className="col-sm-3 col-form-label"
                        >
                          Date of Birth :
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="date"
                            className="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="exampleInputConfirmPassword2"
                          className="col-sm-3 col-form-label"
                        >
                          Gender:
                        </label>

                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            id="exampleSelectGender"
                          >
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>

                      <div className="submitButton">
                        <button
                          type="submit"
                          className="btn btn-outline-info btn-sm"
                        >
                          <i className="mdi mdi-file-check btn-icon-prepend"></i>
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-danger btn-sm ml-2"
                        >
                          <i className="mdi mdi mdi-close-circle btn-icon-prepend"></i>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckForExistingUsers;
