import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import DepartmentDetailsPage from "./pages/departmentDetailsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
