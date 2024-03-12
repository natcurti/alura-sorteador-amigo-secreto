import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuration from "./pages/Configuration";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuration />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
