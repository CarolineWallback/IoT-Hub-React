import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DeviceProvider } from "./contexts/DeviceContext";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <DeviceProvider>
          <Routes>
              <Route path="/" element= {<Home/>}></Route>
          </Routes>
          </DeviceProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
