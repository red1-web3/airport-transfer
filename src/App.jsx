import { Route, Routes, Navigate } from "react-router-dom";

import CarsPage from "./Pages/CarsPage";
import Home from "./Pages/Home";
import ExtraPage from "./Pages/ExtraPage";
import DetailsPage from "./Pages/DetailsPage";
import PaymentPage from "./Pages/PaymentPage";
import FaqPage from "./Pages/FaqPage";
import PrivacyPage from "./Pages/PrivacyPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/car" element={<CarsPage />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
