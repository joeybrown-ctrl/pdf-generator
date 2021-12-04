import { useRef, useState } from 'react';
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import logo from './logo.png';
import sampleData from './invoice-data.json';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  // ChartCategoryAxisItem,
  // ChartTitle,
  // ChartLegend
} from "@progress/kendo-react-charts";
import { DropDownList } from './@progress/kendo-react-dropdowns';


function App() {

  const pdfExportComponent = useRef(null);
  const [layoutSelection, setLayoutSelection] = useState();
  const dData = [
    { text: "A4", value: "size-a4" }, 
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" }
  ];
  // const contentArea = useRef(null);

  const handleExportWithComponent = (e) => {
    pdfExportComponent.current.save();
  }

  // const handleExportWithMethod = (e) => {
  //   savePDF(contentArea.current, { paperSize: "A4" })
  // }

  return (
    <div id="example">


      <div className="box wide hidden-on-narrow">
        <div className="box-col">
          <h4>Select a Page Size</h4>
          <DropDownList
            data={dData}
            textField="text"
            dataItemKey="value"
          >

          </DropDownList>
        </div>
        <div className="box-col">
          <h4>Export PDF</h4>
          <Button primary={true} onClick={handleExportWithComponent}>Export</Button>
        </div>
      </div>


      <div className="app-content">
        <div className="page-container hidden-on-narrow">
              <PDFExport ref={pdfExportComponent}>
                <div>
                  <div className="inner-page">
                    <div className="pdf-header">
                      <span className="company-logo">
                        <img src={logo} alt="Company Logo" /> Sweet Spot
                      </span>
                      <span className="invoice-number">Invoice #777</span>
                    </div>
                    <div className="pdf-footer">
                      <p>
                        My House<br />
                        My Rules<br />
                        Planet Earth
                      </p>
                    </div>
                    <div className="addresses">
                      <div className="for">
                        <h3>Invoice For</h3>
                        <p>
                          Tank Serpe-Brown<br />
                          Casa de FatCat<br />
                          Planet Earth
                        </p>
                      </div>

                      <div className="from">
                        <h3>From</h3>
                        <p>
                          Me Myself & I <br />
                          Right Here<br />
                          Planet Earth
                        </p>
                        <p>
                          Invoice ID: 777<br />
                          Invoice Date: 12.04.2021<br />
                          Due Date: 01.01.2022
                        </p>
                      </div>
                    </div>
                    <div className="pdf-chart">
                      <Chart style={{ height: 280 }}>
                        <ChartSeries>
                          <ChartSeriesItem
                              type="donut"
                              data={sampleData}
                              categoryField="services"
                              field="price"
                          >
                            <ChartSeriesLabels
                                color="#fff"
                                background="none"
                            />
                          </ChartSeriesItem>
                        </ChartSeries>
                      </Chart>
                    </div>
                    <div className="pdf-body">
                      <div id="grid"></div>
                      <p className="signature">
                        Signature: ________________ <br /><br />
                        Date: 12.04.2021
                      </p>
                    </div>
                  </div>
                </div>
              </PDFExport>
        </div>
      </div>
    </div>
  );
}

export default App;
