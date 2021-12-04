import { useRef } from 'react';
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";


function App() {

  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (e) => {
    pdfExportComponent.current.save();
  }

  const handleExportWithMethod = (e) => {
    savePDF(contentArea.current, { paperSize: "A4" })
  }

  return (
    <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div ref={contentArea}>
          <h1>PDF Generator</h1>
          <p>This is gonna be so cool, you guys!</p>
          <div className="button-area">
            <Button primary={true} onClick={handleExportWithComponent}>Primary Button</Button>
            <Button onClick={handleExportWithMethod}>Export with Method</Button>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}

export default App;
