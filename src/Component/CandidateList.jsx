import React from "react";
import { NavLink } from "react-router-dom";
import MenuBar from "../LayOut/MenuBar";

const CandidateList = () => {
  return (
    <>
      <section>
        <MenuBar />
        <div className="InnerSection">
          <div className="InnerSectionBox">
            <ul>
              <li>
                <NavLink exact to="/NewlyRegisteredCandidateList">
                  <i className="mdi mdi-numeric-1-box-multiple-outline icon"></i>
                  New Registration
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/ValidatedExistingCandidateList">
                  <i className="mdi mdi-numeric-2-box-multiple-outline icon"></i>
                  Validating Existing Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandidateList;
