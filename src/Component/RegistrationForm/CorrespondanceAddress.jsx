import React, { useState } from "react";

const CorrespondanceAddress = (props) => {
  const [state, setState] = useState({
    correspondanceAddress: "",
    correspondanceLocality: "",
    correspondanceState: "",
    correspondancePin: "",
    correspondanceMobile: "",
    correspondanceEmail: "",
    correspondanceTel: "",
  });
  // console.warn("State", data);

  /*<======= Send state data to Registration Form ===========>*/

  props.sendCorrespondanceAddressData(state);

  /* <======== Input Change Function ========>*/
  const InputChange = (e) => {
    const { name, value } = e.target;
    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body registrationCard">
              <form className="forms-sample">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Address :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="correspondanceAddress"
                      value={state.correspondanceAddress}
                      onChange={InputChange}
                      placeholder="Address"
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Locality :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="correspondanceLocality"
                      value={state.correspondanceLocality}
                      onChange={InputChange}
                      placeholder=" Locality"
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">State :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="correspondanceState"
                      value={state.correspondanceState}
                      onChange={InputChange}
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Pin :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="correspondancePin"
                      value={state.correspondancePin}
                      onChange={InputChange}
                      placeholder="Pin"
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Mobile :</label>

                  <div className="col-sm-2">
                    <input
                      type="phone"
                      className="form-control"
                      name="correspondanceMobile"
                      value={state.correspondanceMobile}
                      onChange={InputChange}
                      placeholder="Mobile No"
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">
                    E-Mail : (To be used for all future Communication) :
                  </label>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="correspondanceEmail"
                      value={state.correspondanceEmail}
                      onChange={InputChange}
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Tel :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="correspondanceTel"
                      value={state.correspondanceTel}
                      onChange={InputChange}
                      placeholder="Telephone No"
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

export default CorrespondanceAddress;
