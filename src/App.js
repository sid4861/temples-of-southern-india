
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrderPrint from "./pages/OrderPrint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/order-print" element={<OrderPrint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
