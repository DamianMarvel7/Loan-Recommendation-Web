import React from "react";

const DietProfile = ({ data }) => {
  return (
    <div>
      <h1 className="headingL">User Diet Profile</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={cellStyle}>
              <strong>User ID:</strong>
            </td>
            <td style={cellStyle}>{data.user_id}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Name:</strong>
            </td>
            <td style={cellStyle}>{data.name}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Weight (kg):</strong>
            </td>
            <td style={cellStyle}>{data.weight_kg}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Height (cm):</strong>
            </td>
            <td style={cellStyle}>{data.height_cm}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Age:</strong>
            </td>
            <td style={cellStyle}>{data.age}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Gender:</strong>
            </td>
            <td style={cellStyle}>{data.gender}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Activity Level:</strong>
            </td>
            <td style={cellStyle}>{data.activity_level}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Goal:</strong>
            </td>
            <td style={cellStyle}>{data.goal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default DietProfile;
