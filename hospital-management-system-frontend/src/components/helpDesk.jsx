import React, { useState, useEffect } from "react";
import axiosInstance, { pharmacyAxiosInstance } from "../utils/axiosInstance";
// import your axios instances

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() === "") return; // Skip empty queries

      try {
        let response;

        if (searchOption === "doctor") {
          response = await axiosInstance.get(`/doctor/${query}/search`);
        } else if (searchOption === "medicine") {
          response = await pharmacyAxiosInstance.get(
            `/pharmacy/${query}/search`
          );
        } else {
          return; // Skip if no option is selected
        }

        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [query, searchOption]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Help Desk</h1>
      <div style={styles.searchBar}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
          placeholder="Enter search query"
        />
      </div>
      <div style={styles.options}>
        <label>
          <input
            type="radio"
            value="doctor"
            checked={searchOption === "doctor"}
            onChange={(e) => setSearchOption(e.target.value)}
          />
          Find Doctor
        </label>
        <label>
          <input
            type="radio"
            value="medicine"
            checked={searchOption === "medicine"}
            onChange={(e) => setSearchOption(e.target.value)}
          />
          Find Medicine
        </label>
      </div>
      <div style={styles.results}>
        {searchResults.map((result, index) => (
          <div key={index} style={styles.resultItem}>
            {result.name}
            {result.medicineName}
          </div>
        ))}
      </div>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  header: {
    color: "#333",
    marginBottom: "20px",
  },
  searchBar: {
    marginBottom: "10px",
  },
  input: {
    width: "300px",
    padding: "10px",
    fontSize: "16px",
  },
  options: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  results: {
    marginTop: "20px",
    textAlign: "left",
  },
  resultItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default SearchPage;
