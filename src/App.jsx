import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/index.css";
import Home from "./pages/Home";
import Expense from "./pages/Expense";
import Income from "./pages/Income";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Income" element={<Income />} />
          <Route path="/Expense" element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
