import { useRef } from 'react';
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";


function App() {

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (e) => {
    pdfExportComponent.current.save();
  }

  return (
    <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize="A4">
      <h1>PDF Generator</h1>
      <p>This is gonna be so cool, you guys!</p>
      <div className="button-area">
        <Button primary={true} onClick={handleExportWithComponent}>Primary Button</Button>
      </div>
      </PDFExport>
    </div>
  );
}

export default App;
