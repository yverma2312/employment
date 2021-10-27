import React, { useState } from "react";

const BasicInformation = () => {
  const [state, setState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    urbanRural: "",
    maritalStatus: "",
    religion: "",
    category: "",
    categoryCetrificateNo: "",
    categoryIssuedBy: "",
    anyDisability: "No",
    anyDisabilityType: "",
    anyDisabilitySubType: "",
    anyDisabilityPercent: "",
    anyDisabilityCertificateNo: "",
    anyDisabilityIssuedBy: "",
    exServiceMan: "No",
    exServiceManNameOfForce: "",
    exServiceManDateOfJoining: "",
    exServiceManReasonForDischarge: "",
    exServiceManDateOfDischarge: "",
    exServiceManRank: "",
    exServiceManRegiServNo: "",
    priorityAdmissibleToExServicePersonnell: "None",
    priorityAdmissibleToExServicePersonnelCertificateNo: "",
  });
  const InputChange = (e) => {
    const { name, value } = e.target;
    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const function_Category = (
    <>
      <label className="col-sm-2 col-form-label">Certificate No:</label>

      <div className="col-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder=" Enter Certificate No"
          name="categoryCetrificateNo"
          value={state.categoryCetrificateNo}
          onChange={InputChange}
        />
      </div>
      <label className="col-sm-2 col-form-label">Issued By:</label>

      <div className="col-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder=""
          name="categoryIssuedBy"
          value={state.categoryIssuedBy}
          onChange={InputChange}
        />
      </div>
    </>
  );
  const function_AnyDisabilityFirstRow = (
    <>
      <label className="col-sm-2 col-form-label">Type :</label>

      <div className="col-sm-2">
        <select
          className="form-control"
          name="anyDisabilityType"
          value={state.anyDisabilityType}
          onChange={InputChange}
        >
          <option> Visually </option>
          <option>No </option>
        </select>
      </div>
      <label className="col-sm-2 col-form-label">Sub Type:</label>
      <div className="col-sm-2">
        <select
          className="form-control"
          name="anyDisabilitySubType"
          value={state.anyDisabilitySubType}
          onChange={InputChange}
        >
          <option> Blind </option>
          <option>No </option>
        </select>
      </div>
    </>
  );
  const function_AnyDisabilitySecondRow = (
    <>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Disability % :</label>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="anyDisabilityPercent"
            value={state.anyDisabilityPercent}
            onChange={InputChange}
          />
        </div>

        <label className="col-sm-2 col-form-label">Certificate No:</label>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="anyDisabilityCertificateNo"
            value={state.anyDisabilityCertificateNo}
            onChange={InputChange}
          />
        </div>
        <label className="col-sm-2 col-form-label">Issued By:</label>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="anyDisabilityIssuedBy"
            value={state.anyDisabilityIssuedBy}
            onChange={InputChange}
          />
        </div>
      </div>
    </>
  );
  const function_ExServiceManFirstRow = (
    <>
      <label className="col-sm-2 col-form-label">Name Of Force</label>

      <div className="col-sm-2">
        <select
          className="form-control"
          name="exServiceManNameOfForce"
          value={state.exServiceManNameOfForce}
          onChange={InputChange}
        >
          <option>Army </option>
          <option>Nevy </option>
        </select>
      </div>
      <label className="col-sm-2 col-form-label">Date of Joining:</label>

      <div className="col-sm-2">
        <input
          type="date"
          className="form-control"
          placeholder=" "
          name="exServiceManDateOfJoining"
          value={state.exServiceManDateOfJoining}
          onChange={InputChange}
        />
      </div>
    </>
  );
  const function_ExServiceManSecondRow = (
    <>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Date of Discharge :</label>

        <div className="col-sm-2">
          <input
            type="date"
            className="form-control"
            placeholder=" "
            name="exServiceManDateOfDischarge"
            value={state.exServiceManDateOfDischarge}
            onChange={InputChange}
          />
        </div>
        <label className="col-sm-2 col-form-label">Rank :</label>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="exServiceManRank"
            value={state.exServiceManRank}
            onChange={InputChange}
          />
        </div>
        <label className="col-sm-2 col-form-label">
          Reason for Discharge :* :
        </label>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="exServiceManReasonForDischarge"
            value={state.exServiceManReasonForDischarge}
            onChange={InputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Regi/Serv.No:</label>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="exServiceManRegiServNo"
            value={state.exServiceManRegiServNo}
            onChange={InputChange}
          />
        </div>
      </div>
    </>
  );

  const function_PriorityAdmissibleToExServicePersonnel = (
    <>
      <label className="col-sm-2 col-form-label">Certificate No:</label>

      <div className="col-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder=" "
          name="priorityAdmissibleToExServicePersonnelCertificateNo"
          value={state.priorityAdmissibleToExServicePersonnelCertificateNo}
          onChange={InputChange}
        />
      </div>
    </>
  );
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
                    First Name :*
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Enter First Name"
                      value={state.firstName}
                      onChange={InputChange}
                    />
                  </div>
                  <label
                    for="exampleInputUsername2"
                    className="col-sm-2 col-form-label"
                  >
                    Middle Name :*
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Middle Name"
                      name="middleName"
                      value={state.middleName}
                      onChange={InputChange}
                    />
                  </div>
                  <label
                    for="exampleInputUsername2"
                    className="col-sm-2 col-form-label"
                  >
                    Last Name :*
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      name="lastName"
                      value={state.lastName}
                      onChange={InputChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Father's Name:
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Father Name"
                      name="fatherName"
                      value={state.fatherName}
                      onChange={InputChange}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">
                    Mother's Name:
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Mother Name"
                      name="motherName"
                      value={state.motherName}
                      onChange={InputChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Date of Birth:
                  </label>

                  <div className="col-sm-2">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="First Name"
                      name="dateOfBirth"
                      value={state.dateOfBirth}
                      onChange={InputChange}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Gender:</label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="gender"
                      value={state.gender}
                      onChange={InputChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Urban/Rural:
                  </label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="urbanRural"
                      value={state.urbanRural}
                      onChange={InputChange}
                    >
                      <option>Urban</option>
                      <option>Rural</option>
                    </select>
                  </div>
                  <label className="col-sm-2 col-form-label">
                    Marital Status:
                  </label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="maritalStatus"
                      value={state.maritalStatus}
                      onChange={InputChange}
                    >
                      <option>Married</option>
                      <option>Unmarried</option>
                    </select>
                  </div>
                  <label className="col-sm-2 col-form-label">Religion :</label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="religion"
                      value={state.religion}
                      onChange={InputChange}
                    >
                      <option> Hindu</option>
                      <option> Muslim</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Category :</label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="category"
                      value={state.category}
                      onChange={InputChange}
                    >
                      <option>GEN </option>
                      <option>OBC </option>
                      <option>SC </option>
                    </select>
                  </div>
                  {state.category === "SC" ? function_Category : ""}
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Any Disability :
                  </label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="anyDisability"
                      value={state.anyDisability}
                      onChange={InputChange}
                    >
                      <option> No</option>
                      <option>Yes </option>
                    </select>
                  </div>
                  {state.anyDisability === "Yes"
                    ? function_AnyDisabilityFirstRow
                    : ""}
                </div>
                {state.anyDisability === "Yes"
                  ? function_AnyDisabilitySecondRow
                  : ""}
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Ex-Serviceman :
                  </label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="exServiceMan"
                      value={state.exServiceMan}
                      onChange={InputChange}
                    >
                      <option>No </option>
                      <option>Yes </option>
                    </select>
                  </div>
                  {state.exServiceMan === "Yes"
                    ? function_ExServiceManFirstRow
                    : ""}
                </div>
                {state.exServiceMan === "Yes"
                  ? function_ExServiceManSecondRow
                  : ""}
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Priority Admissible to Ex-Service Personnel:
                  </label>

                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      name="priorityAdmissibleToExServicePersonnell"
                      value={state.priorityAdmissibleToExServicePersonnell}
                      onChange={InputChange}
                    >
                      <option>None </option>
                      <option>Priority 1 </option>
                      <option>Priority 2 </option>
                    </select>
                  </div>
                  {state.priorityAdmissibleToExServicePersonnell !== "None"
                    ? function_PriorityAdmissibleToExServicePersonnel
                    : ""}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
