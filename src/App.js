import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";


function App() {
  return (
    <div className="app-content">
      <h1>PDF Generator</h1>
      <p>This is gonna be so cool, you guys!</p>
      <div className="button-area">
        <Button primary={true}>Primary Button</Button>
        <Button>Default Button</Button>
      </div>
    </div>
  );
}

export default App;
