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
import AllPatientTable from "./pages/allPatientTablePage";
import AllScheduleList from "./components/allScheduleList";
import DoctorDashboard from "./pages/doctorDashboardPage";
import Telemedicine from "./components/telemedicine";
import AllCommunityList from "./components/allCommunityList";
import PatientCommunityList from "./components/patientCommunityList";
import DoctorAppointmentList from "./components/doctorAppointmentList";
function App() {
  const handleJoinAppointment = (appointmentId) => {
    // Handle logic when joining an online appointment
    window.open(`/room/${appointmentId}`, "_blank");
    // Add your API call or other logic here
  };
  return (
    <div className="App">
      <Header />
      <button onClick={() => handleJoinAppointment(5)}>Telemedicine</button>
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
        <Route path="/patient/all" exact element={<AllPatientTable />} />
        <Route
          path="/doctor/register"
          exact
          element={<DoctorRegistrationPage />}
        />
        <Route
          path="/room/:roomId"
          element={<Telemedicine key={window.location.pathname} />}
        />
        <Route path="/schedule/all" exact element={<AllScheduleList />} />
        <Route path="/telemedicine" exact element={<Telemedicine />} />
        <Route path="/admin/dashboard" exact element={<AdminDashboardPage />} />
        <Route path="/doctor/dashboard" exact element={<DoctorDashboard />} />
        <Route
          path="/patient/dashboard"
          exact
          element={<PatientDashboardPage />}
        />
        <Route path="/all/community" exact element={<PatientCommunityList />} />
        <Route
          path="/all/doctor/view"
          exact
          element={<DoctorAppointmentList />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
