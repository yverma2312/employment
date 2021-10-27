// App.js
import React, { useState, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import MenuBar from "../LayOut/MenuBar";
import ToolkitProviderTable from "./ToolkitProviderTable";
const StatusofNotifiedVacancies = () => {
  const history = useHistory();
  const [loadTableData, setLoadTableData] = useState({
    apiData: [],
  });

  /*<======= Load Table Data from API and Set to State ===========>*/

  useMemo(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const resp = result.data;
      setLoadTableData({ apiData: resp });
    }
    fetchData();
  }, []);

  /*<=======  Function for Table Action Column Details Button  ===========>*/

  const actionDetailsButton = (cell, row) => {
    if (row.id) {
      return (
        <>
          <button
            className="btn btn-inverse-success btn-sm"
            onClick={(SubmitButton) => {
              history.push(`/CoveredNonCNVAct1959/${row.id}`);
            }}
          >
            Details
          </button>
        </>
      );
    }
  };

  /*<======= Table Columns Name ===========>*/

  const TableColumns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "email", text: "Email", sort: true },
    { dataField: "body", text: "Description", sort: true },
    {
      formatter: actionDetailsButton,
      dataField: "btn",
      text: "Action",
      csvExport: false,
    },
  ];
  /*<======= Component Return ===========>*/

  return (
    <section>
      <MenuBar />
      <div className="InnerSection">
        <div className="InnerSectionBox">
          {/* <=======  ToolKit Proverder Component for Table (search field, clear button, Table API Data)   ===========>*/}

          <ToolkitProviderTable State={loadTableData} Columns={TableColumns} />
        </div>
      </div>
    </section>
  );
};

export default StatusofNotifiedVacancies;
