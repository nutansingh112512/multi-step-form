import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Step1 from "./pages/Step1.jsx";
import Step2 from "./pages/Step2.jsx";
import Step3 from "./pages/Step3.jsx";
import Step4 from "./pages/Step4.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={ store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/1" element={<Step1 />} />
        <Route path="/2" element={<Step2 />} />
        <Route path="/3" element={<Step3 />} />
        <Route path="/4" element={<Step4 />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
