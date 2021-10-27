import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import ReactToPrint from "react-to-print";
import MenuBar from "../LayOut/MenuBar";
const CoveredNonCNVAct1959 = React.forwardRef((props, refReactToPrint) => {
  const { id } = useParams();
  const [getIdData, setGetIdData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      const resp = result.data;
      setGetIdData(resp);
    }
    fetchData();
  }, [id]);

  const BasicInformation = (
    <div style={{ margin: "10px" }}>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft">Request ID :</div>
        <div className="col-md-6 informationRight">{getIdData.id}</div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft">Organisation Name :</div>
        <div className="col-md-6 informationRight">No Record Found!!</div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft">Organisation Type :</div>
        <div className="col-md-6 informationRight">No Record Found!!</div>
      </div>
    </div>
  );
  const ConatctDetails = (
    <div style={{ margin: "10px" }}>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Name :</div>
        <div className="col-md-6 informationRight">{getIdData.name}</div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Designation :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Address :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Email :</div>
        <div className="col-md-6 informationRight">{getIdData.email} </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Mobile :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Contact No. :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
    </div>
  );
  const VacancyDetails = (
    <div style={{ margin: "10px" }}>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Post :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> No. of Vacancy:</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Nature of Vacancy:</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Offered Pay :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
    </div>
  );
  const PostRequirements = (
    <div style={{ margin: "10px" }}>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Total Experience:</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Gender Preference :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Preferred Locality:</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft">Age Between :</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Selection Criteria:</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
      <div className="row informationRow">
        <div className="col-md-6 informationLeft"> Remarks (If any):</div>
        <div className="col-md-6 informationRight">No Record Found!! </div>
      </div>
    </div>
  );

  return (
    <>
      <div ref={refReactToPrint}>
        <div className="InnerSectionBox">
          <h4>Basic Information</h4>
          {BasicInformation}
          <h4>Contact Details</h4>
          {ConatctDetails}
          <h4>Vacancy Details </h4>
          {VacancyDetails}
          <h4> Post Requirements</h4>
          {PostRequirements}
        </div>
      </div>
    </>
  );
});

const PrintButtonNavbar = () => {
  const componentRef = React.useRef();

  return (
    <>
      <section>
        <MenuBar />
        <div className="InnerSection" style={{ textAlign: "right" }}>
          <ReactToPrint
            trigger={() => (
              <button
                className="btn btn-inverse-secondary btn-icon mdi mdi-print"
                title="Print"
                style={{ margin: "5px" }}
              >
                <i className="mdi mdi-printer"> </i>
              </button>
            )}
            content={() => componentRef.current}
          />
          <CoveredNonCNVAct1959 ref={componentRef} />
        </div>
      </section>
    </>
  );
};

export default PrintButtonNavbar;
