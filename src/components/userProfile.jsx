import React from "react";

const UserProfile = ({ data }) => {
  return (
    <div>
      <h1 className="headingL">User Profile</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={cellStyle}>
              <strong>Customer ID:</strong>
            </td>
            <td style={cellStyle}>{data.Customer_ID}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Gender:</strong>
            </td>
            <td style={cellStyle}>{data.Gender}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Married:</strong>
            </td>
            <td style={cellStyle}>{data.Married}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Dependents:</strong>
            </td>
            <td style={cellStyle}>{data.Dependents}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Education:</strong>
            </td>
            <td style={cellStyle}>{data.Education}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Applicant Income:</strong>
            </td>
            <td style={cellStyle}>{data.ApplicantIncome}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Property Area:</strong>
            </td>
            <td style={cellStyle}>{data.Property_Area}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Username:</strong>
            </td>
            <td style={cellStyle}>{data.Username}</td>
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

export default UserProfile;
