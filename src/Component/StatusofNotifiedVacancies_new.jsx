// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
function App() {
  const [state, setState] = useState({
    apiData: [],
  });

  useEffect(async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const resp = result.data;
    setState({ apiData: resp });
  }, []);

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "animal", text: "Animal", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const paginationList = paginationFactory({
    page: 1,
    // sizePerPage: 10,
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "50",
        value: 50,
      },

      {
        text: "All",
        value: state.apiData.length,
      },
    ],
    alwaysShowAllBtns: false,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  const { SearchBar, ClearSearchButton } = Search;
  const { ExportCSVButton } = CSVExport;
  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>
          Export to CSV
        </button>
      </div>
    );
  };
  return (
    <section>
      <div className="sectionTop">
        <div className=" grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <ToolkitProvider
                bootstrap4
                keyField="id"
                data={state.apiData}
                columns={columns}
                search
                exportCSV
              >
                {(props) => (
                  <div>
                    <h6>Input something at below input field:</h6>
                    <SearchBar {...props.searchProps} />
                    <ClearSearchButton {...props.searchProps} />
                    <MyExportCSV {...props.csvProps} />

                    <hr />
                    <BootstrapTable
                      hover
                      pagination={paginationList}
                      {...props.baseProps}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
