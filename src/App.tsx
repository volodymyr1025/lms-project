import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const SubjectsPage = lazy(() => import("./pages/SubjectsPage"));
const ProfessorDetailsPage = lazy(() => import("./pages/ProfessorDetailsPage"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/professor" element={<ProfessorDetailsPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
