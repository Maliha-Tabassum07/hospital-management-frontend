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
import AdminDashboardPage from "./pages/adminDashboardPage";
import DoctorRegistrationPage from "./pages/doctorRegistrationPage";
import PatientDashboardPage from "./pages/patientDashboardPage";
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
        <Route
          path="/doctor/register"
          exact
          element={<DoctorRegistrationPage />}
        />
        <Route path="/admin/dashboard" exact element={<AdminDashboardPage />} />
        <Route
          path="/patient/dashboard"
          exact
          element={<PatientDashboardPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
