// HomeDepartmentList.jsx

import React from "react";
import { Link } from "react-router-dom";
import useDepartmentHook from "../hooks/useDepartmentHook";
import { useNavigate } from "react-router-dom";
import "./HomeDepartmentList.css"; // Import the CSS file

const HomeDepartmentList = () => {
  const navigate = useNavigate();
  const { departments, handleSubmit, errors } = useDepartmentHook();

  // const handleDepartmentClick = (departmentId) => {
  //   navigate(`/department/${departmentId}`);
  // };

  return (
    <div className="department-list-container">
      {departments &&
        departments.map((department) => {
          return (
            <div key={department.id} className="department-item">
              <Link to={`/department/${department.id}`}>
                <p>{department.name}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default HomeDepartmentList;
