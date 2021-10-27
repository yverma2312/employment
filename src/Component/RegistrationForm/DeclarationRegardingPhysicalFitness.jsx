import React from "react";

const DeclarationRegardingPhysicalFitness = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body registrationCard">
              <form className="forms-sample">
                <div className="form-group row">
                  <label
                    for="exampleInputUsername2"
                    className="col-sm-2 col-form-label"
                  >
                    EyeSight :
                  </label>
                  <div className="col-sm-2">
                    <select className="form-control">
                      <option>Normal</option>
                      <option>Corrected</option>
                    </select>
                  </div>
                  <label
                    for="exampleInputUsername2"
                    className="col-sm-2 col-form-label"
                  >
                    Height(Cms) :
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername2"
                      placeholder="Existing Registration Id"
                    />
                  </div>
                  <label
                    for="exampleInputUsername2"
                    className="col-sm-2 col-form-label"
                  >
                    Weight(Kgs) :
                  </label>
                  <div className="col-sm-2">
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
                    className="col-sm-2 col-form-label"
                  >
                    Chest(Cms) :
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeclarationRegardingPhysicalFitness;
