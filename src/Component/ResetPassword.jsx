import React from "react";
import MenuBar from "../LayOut/MenuBar";

const ResetPassword = () => {
  return (
    <>
      <section>
        <MenuBar />
        <div className="sectionTop">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <form class="form-sample">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Email :</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"> </label>
                        <div class="col-sm-9">
                          <button type="submit" class="btn btn-outline-success">
                            Get Email OTP
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">
                          Enter Email OTP:
                        </label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">
                          Password :
                        </label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">
                          Confirm Password :
                        </label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" submitButton">
                    <button
                      type="submit"
                      class="btn btn-outline-info btn-sm ml-4 mb-2 "
                    >
                      <i class="mdi mdi-file-check btn-icon-prepend"></i>
                      Submit
                    </button>
                    <button class="btn btn-outline-danger btn-sm ml-2 mb-2">
                      <i className="mdi mdi-refresh"></i>
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
