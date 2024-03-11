import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
