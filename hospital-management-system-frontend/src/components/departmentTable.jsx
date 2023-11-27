import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import useDepartmentHook from "../hooks/useDepartmentHook";

const DepartmentTable = () => {
  const navigate = useNavigate();
  const { departments } = useDepartmentHook();

  const handleUpdateClick = () => {
    // Handle the update action
  };

  const handleCreateClick = () => {
    // Handle the create action
  };

  return (
    <div className="department-table-container">
      <div className="table-header">
        <h2 className="table-title">Department List</h2>
        <button onClick={handleCreateClick}>Create</button>
      </div>

      <div className="department-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Floor No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments &&
              departments.map((department) => (
                <tr key={department.id}>
                  <td>{department.name}</td>
                  <td>{department.description}</td>
                  <td>{department.floorNo}</td>
                  <td>
                    <button onClick={handleUpdateClick}>Update</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentTable;
