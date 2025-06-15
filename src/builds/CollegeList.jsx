import React, { useEffect, useState } from 'react';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/colleges') // adjust if hosted elsewhere
      .then(response => response.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Colleges in Karnataka</h2>
      <ul>
        {colleges.map((college, index) => (
          <li key={index} className="mb-2 p-2 border rounded shadow">
            <strong>{college.College_Name}</strong><br />
            UG Fee: {college.UG_fee}<br />
            PG Fee: {college.PG_fee}<br />
            Rating: {college.Rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;
