// All doctors List.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMedicineHook from "../hooks/useMedicineHook";

const AllMedicineList = () => {
  const navigate = useNavigate();
  const { medicines, handleSubmit, errors } = useMedicineHook();

  // const handleDepartmentClick = (departmentId) => {
  //   navigate(`/department/${departmentId}`);
  // };

  return (
    <div className="department-list-container">
      {medicines &&
        medicines.map((medicine) => {
          return (
            <div key={medicine.id} className="department-item">
              <div className="doctor-details">
                <h4>{medicine.specialId}</h4>
                <h3>{medicine.medicineName}</h3>
                <p>{medicine.genericName}</p>
                <p>Qualification: {medicine.sideEffect}</p>
                {/* <p>Designation: {doctor.designationDTO.name}</p>
                <p>Specialties:</p>
                <ul>
                  {doctor.specialtyList.map((specialty, index) => (
                    <p key={index}>{specialty}</p>
                  ))}
                </ul> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllMedicineList;
