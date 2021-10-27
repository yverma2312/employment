import React, { useState } from "react";
import MenuBar from "../LayOut/MenuBar";
import BasicInformation from "./RegistrationForm/BasicInformation";
import CorrespondanceAddress from "./RegistrationForm/CorrespondanceAddress";
import DeclarationRegardingPhysicalFitness from "./RegistrationForm/DeclarationRegardingPhysicalFitness";
import PermanentAddress from "./RegistrationForm/PermanentAddress";

const RegistrationForm = () => {
  /*=========> get Correspondance Address Data  ==========>*/
  const [isCorrespondance, setIsCorrespondance] = useState({});

  /*=========> get Permanent Address Data  ==========>*/
  const [isPermanent, setIsPermanent] = useState({});

  /*=========> get Registration Form Data  ==========>*/
  const registrationFormData = {
    /*=========> get Correspondance Address Form Data  ==========>*/
    formCorrespondanceAddress: isCorrespondance.correspondanceAddress,
    formCorrespondanceLocality: isCorrespondance.correspondanceLocality,
    formCorrespondanceState: isCorrespondance.correspondanceState,
    formCorrespondancePin: isCorrespondance.correspondancePin,
    formCorrespondanceMobile: isCorrespondance.correspondanceMobile,
    formCorrespondanceEmail: isCorrespondance.correspondanceEmail,
    formCorrespondanceTel: isCorrespondance.correspondanceTel,

    /*=========> get Permanent Address Form Data  ==========>*/
    formPermanentAddress: isPermanent.permanentAddress,
    formPermanentLocality: isPermanent.permanentLocality,
    formPermanentState: isPermanent.permanentState,
    formPermanentPin: isPermanent.permanentPin,
    formPermanentMobile: isPermanent.permanentMobile,
    formPermanentCity: isPermanent.permanentCity,
    formPermanentTel: isPermanent.permanentTel,
  };
  // console.log("registrationForm", registrationFormData);

  return (
    <>
      <section>
        <MenuBar />

        <div className="InnerSection">
          <div className="InnerSectionBox">
            <h4>Basic Information</h4>
            <BasicInformation />
            <h4>Declaration Regarding Physical Fitness</h4>
            <DeclarationRegardingPhysicalFitness />
            <h4>Correspondance Address </h4>
            <CorrespondanceAddress
              sendCorrespondanceAddressData={setIsCorrespondance}
            />
            <h4>Permanent Address</h4>
            <PermanentAddress
              dataCorrespondance={isCorrespondance}
              sendPermanentAddressData={setIsPermanent}
            />
            <div className="submitButton">
              <button type="submit" className="btn btn-outline-info btn-sm">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationForm;
