import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const DepartmentDetailsPage = () => {
  const navigate = useNavigate();
  const { departmentId } = useParams();
  const [departmentDetails, setdepartmentDetails] = useState();
  const [doctorDepartmentList, setDoctorDepartmentList] = useState([]);
  const [errors, setErrors] = useState();
  //   useEffect(() => {
  //     axiosInstance.get(`/department/${departmentId}/get`).then((resp) => {
  //       const data = resp.data;
  //       setdepartmentDetails(data);
  //     });
  //   }, []);

  const fetchDept = () => {
    axiosInstance.get(`/department/${departmentId}/get`).then((resp) => {
      const data = resp.data;
      setdepartmentDetails(data);
    });
  };

  useEffect(() => {
    axiosInstance
      .get(`/doctor/${departmentId}/all`)
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setDoctorDepartmentList(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  useEffect(() => {
    fetchDept();
  }, []);

  return (
    <div className="container">
      <div className="">
        <h2>Name: {departmentDetails?.name}</h2>
        <h3>Floor Number: {departmentDetails?.floorNo}</h3>
        <p>Description: {departmentDetails?.description}</p>
      </div>

      <div className="doctor-list-container">
        <div>
          {doctorDepartmentList &&
            doctorDepartmentList.map((doctor) => (
              <div key={doctor.id}>
                <h2>Doctor Id: {doctor.specialId}</h2>
                {/* Display the doctor's image */}
                {doctor.imageUrl && (
                  <img
                    src={doctor.imageUrl}
                    alt={`Dr. ${doctor.name}`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
                <h3>Name: {doctor.name}</h3>
                <h4>Qualification: {doctor.qualification}</h4>
                <h4>Designation: {doctor.designationDTO.name}</h4>
                <h4>Specialty List:</h4>

                {doctor.specialtyList &&
                  doctor.specialtyList.map((specialty, index) => (
                    <p key={index}>{specialty}</p>
                  ))}
              </div>
            ))}
        </div>
      </div>

      {/* Back button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr;
      </button>
    </div>
  );
};

export default DepartmentDetailsPage;
