import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import jsPDF from "jspdf";
import "jspdf-autotable";
const ToolkitProviderTable = ({ State, Columns }) => {
  /*<=======  Search  and Clear Serch Inpud filld Input Box ===========>*/

  const { SearchBar, ClearSearchButton } = Search;

  /*<=======  Function for Table Data Generate To Print   ===========>*/

  const generateToPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      theme: "grid",
      head: [Columns.map((val) => val.text)],
      columns: Columns.map((val, index) => ({
        key: index,
        dataKey: val.dataField,
      })),
      body: State.apiData,
    });

    doc.save("download.pdf");
  };

  /*<=======  Function for Table Data Generate To Pdf   ===========>*/

  const generateToPrint = () => {
    var doc = new jsPDF();
    doc.setFontSize(12);
    doc.autoTable({
      theme: "grid",
      head: [Columns.map((val) => val.text)],
      columns: Columns.map((val, index) => ({
        key: index,
        dataKey: val.dataField,
      })),
      body: State.apiData,
    });
    doc.autoPrint();
    doc.output("dataurlnewwindow");
  };
  /*<=======  Function for Table Data Export To Csv  ===========>*/

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };

    return (
      <div>
        <button
          className="btn btn-inverse-success btn-icon "
          title="Export to CSV"
          onClick={handleClick}
        >
          <i className="mdi mdi-file-excel"> </i>
        </button>
      </div>
    );
  };
  /*<======= PagiNation List  ===========>*/

  const paginationList = paginationFactory({
    page: 1,
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: ">",
    prePageText: "<",

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
        value: State.apiData.length,
      },
    ],
    showTotal: false,
  });
  /*<=======  Component Return Data   ===========>*/

  return (
    <>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={State.apiData}
        columns={Columns}
        search
        exportCSV
        loading={true}
      >
        {(props) => (
          <>
            {/*  <=======  Comppnent for  Search Input Field===========>*/}

            <SearchBar
              {...props.searchProps}
              placeholder="Search..."
              style={{ width: "300px", height: "35px" }}
            />

            {/*  <=======  Comppnent for  Clear Button===========>*/}
            <ClearSearchButton
              className="btn btn-inverse-danger clearButton btn-icon mdi mdi-close"
              text=""
              {...props.searchProps}
            />

            {/*  <=======  Right Side Button (Print, Pdf, Csv) ===========>*/}

            <div
              style={{
                display: "flex",
                float: "right",
              }}
              className="tablebutton"
            >
              {/*  <=======  Button for Print Table===========>*/}

              <button
                className="btn btn-inverse-secondary btn-icon  mdi mdi-print"
                title="Go to Print"
                onClick={generateToPrint}
              >
                <i className="mdi mdi-printer"> </i>
              </button>

              {/*  <=======  Button for Generate Pdf File from Table===========>*/}

              <button
                className="btn btn-inverse-warning  btn-icon  mdi mdi-print"
                title="Download Pdf"
                onClick={generateToPdf}
              >
                <i className="mdi mdi-file-pdf"> </i>
              </button>

              {/*  <=======  Button for Export to CSV from Table===========>*/}

              <MyExportCSV {...props.csvProps} />
            </div>

            {/*  <=======  Table Data from API Table===========>*/}

            <BootstrapTable
              keyField="id"
              hover
              condensed
              pagination={paginationList}
              {...props.baseProps}
              noDataIndication="No Record Found"
            />
          </>
        )}
      </ToolkitProvider>
    </>
  );
};

export default ToolkitProviderTable;
