import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import DepartmentDetailsPage from "./pages/departmentDetailsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllDoctorPage from "./pages/allDoctorsPage";
import PatientLoginPage from "./pages/patientLoginPage";
import DoctorLoginPage from "./pages/doctorLoginPage";
import AllMedicinePage from "./pages/allMedicinePage";
import RegistrationFormPage from "./pages/registrationFormPage";
import PatientLandingPage from "./pages/patientLandingPage";
import DoctorLandingPage from "./pages/doctorLandingPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/department/:departmentId"
          element={<DepartmentDetailsPage />}
        />
        <Route path="/doctor/all" exact element={<AllDoctorPage />} />
        <Route
          path="/patient/registration"
          exact
          element={<RegistrationFormPage />}
        />
        <Route path="/patient/login" exact element={<PatientLoginPage />} />
        <Route path="/doctor/login" exact element={<DoctorLoginPage />} />
        <Route path="/medicine/all" exact element={<AllMedicinePage />} />
        <Route path="/patient/landing" exact element={<PatientLandingPage />} />
        <Route path="/doctor/landing" exact element={<DoctorLandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
