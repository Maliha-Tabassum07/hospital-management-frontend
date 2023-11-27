import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css"; // Make sure to update the CSS for table styling
import useCommunityHook from "../hooks/useCommunityHook";

const AllCommunityList = () => {
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
          </tr>
        </thead>
        <tbody>
          {communities &&
            communities.map((community) => (
              <tr key={community.id}>
                <td>{community.id}</td>
                <td>{community.name}</td>
                <td>{community.rule}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCommunityList;
