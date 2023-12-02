import React from "react";
import useGym from "../hooks/useGym";
import useContent from "../hooks/useContents";
import { useAuthContext } from "../hooks/useAuthContext";

const Gym = () => {
  const { user } = useAuthContext();

  const { data } = useGym();
  const { username } = useContent();

  return (
    <>
      {" "}
      {user ? (
        <div>
          <p className="headingM">Welcome {username}</p>

          <h1 className="headingL">Gym</h1>
          {data[0]["class_id"] && (
            <div>
              <h2>Class Schedule</h2>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={headerCellStyle}>Class ID</th>
                    <th style={headerCellStyle}>Coach ID</th>
                    <th style={headerCellStyle}>Start Time</th>
                    <th style={headerCellStyle}>End Time</th>
                    <th style={headerCellStyle}>Class Type</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((classInfo) => (
                    <tr key={classInfo.class_id}>
                      <td style={cellStyle}>{classInfo.class_id}</td>
                      <td style={cellStyle}>{classInfo.coach_id}</td>
                      <td style={cellStyle}>{classInfo.start_time}</td>
                      <td style={cellStyle}>{classInfo.end_time}</td>
                      <td style={cellStyle}>{classInfo.class_type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <h1 className="headingL loginmsg">Please Login First</h1>
      )}
    </>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px", // Adjust as needed
};

const headerCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  background: "#f2f2f2",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default Gym;
