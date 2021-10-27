import React, { useState } from "react";

const PermanentAddress = (props) => {
  const [isDisabled] = useState(false);
  const [state, setState] = useState({
    permanentAddress: "",
    permanentLocality: "",
    permanentState: "",
    permanentPin: "",
    permanentMobile: "",
    permanentCity: "",
    permanentTel: "",
    checkBoxSelect: "false",
  });
  // console.log(state);

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

  /*<======= Send state data to Registration Form ===========>*/

  props.sendPermanentAddressData(state);

  /* <======== CheckBox Value Function ========>*/
  const f_CheckBox = state.checkBoxSelect === "false" ? "true" : "false";

  /* <======== Disabled Value Function ========>*/
  const f_Disabled =
    state.checkBoxSelect === "false" ? isDisabled : !isDisabled;

  /* <======== Input Filed Value Function ========>*/
  const f_PermanentAddress =
    state.checkBoxSelect === "false"
      ? state.permanentAddress
      : (state.permanentAddress =
          props.dataCorrespondance.correspondanceAddress);
  const f_PermanentLocality =
    state.checkBoxSelect === "false"
      ? state.permanentLocality
      : (state.permanentLocality =
          props.dataCorrespondance.correspondanceLocality);
  const f_PermanentState =
    state.checkBoxSelect === "false"
      ? state.permanentState
      : (state.permanentState = props.dataCorrespondance.correspondanceState);
  const f_PermanentMobile =
    state.checkBoxSelect === "false"
      ? state.permanentMobile
      : (state.permanentMobile = props.dataCorrespondance.correspondanceMobile);
  const f_PermanentPin =
    state.checkBoxSelect === "false"
      ? state.permanentPin
      : (state.permanentPin = props.dataCorrespondance.correspondancePin);
  const f_PermanentTel =
    state.checkBoxSelect === "false"
      ? state.permanentTel
      : (state.permanentTel = props.dataCorrespondance.correspondanceTel);

  /* <======== All States Name  ========>*/

  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body registrationCard">
              <div className="form-check form-check-flat form-check-info">
                <label className="form-check-label">
                  <input
                    name="checkBoxSelect"
                    type="checkbox"
                    className="form-check-input"
                    value={f_CheckBox}
                    onChange={InputChange}
                  />
                  If Residencial address is as address
                  <i className="input-helper"></i>
                </label>
              </div>
              <form className="forms-sample">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Address :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="permanentAddress"
                      value={f_PermanentAddress}
                      disabled={f_Disabled}
                      onChange={InputChange}
                      placeholder="Existing Registration Id"
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Locality :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="permanentLocality"
                      className="form-control"
                      value={f_PermanentLocality}
                      onChange={InputChange}
                      disabled={f_Disabled}
                      placeholder="Existing Registration Id"
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">State :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="permanentState"
                      className="form-control"
                      value={f_PermanentState}
                      onChange={InputChange}
                      disabled={f_Disabled}
                      placeholder="Existing Registration Id"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Pin :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="permanentPin"
                      className="form-control"
                      placeholder="First Name"
                      value={f_PermanentPin}
                      onChange={InputChange}
                      disabled={f_Disabled}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Mobile :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="permanentMobile"
                      className="form-control"
                      placeholder="First Name"
                      value={f_PermanentMobile}
                      onChange={InputChange}
                      disabled={f_Disabled}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">City:</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="permanentCity"
                      className="form-control"
                      placeholder="First Name"
                      value={state.permanentCity}
                      onChange={InputChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Tel :</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="permanentTel"
                      className="form-control"
                      placeholder="First Name"
                      value={f_PermanentTel}
                      onChange={InputChange}
                      disabled={f_Disabled}
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

export default PermanentAddress;
