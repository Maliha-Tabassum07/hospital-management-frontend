import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import DepartmentList from "./components/homeDepartmentList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
