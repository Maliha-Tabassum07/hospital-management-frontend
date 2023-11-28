import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css"; // Make sure to update the CSS for table styling
import useCommunityHook from "../hooks/useCommunityHook";

const PatientCommunityList = () => {
  const navigate = useNavigate();
  const { communities, handleSubmit, errors } = useCommunityHook();

  return (
    <div className="community-list">
      <div className="table-header">
        <h2 className="table-title">Community List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {communities &&
            communities.map((community) => (
              <tr key={community.id}>
                <td>{community.id}</td>
                <td>{community.name}</td>
                <td>{community.rule}</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          &larr;
        </button>
      </div>
    </div>
  );
};

export default PatientCommunityList;
