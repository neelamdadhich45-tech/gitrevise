import React from "react";

function Student({ student, handleDelete, handleUpdate }) {
  return (
    <>
      {Array.isArray(student) && student.length > 0 ? (
        student.map((item, index) => (
          <tr key={item._id || index}>
            <td>{index + 1}</td>
            <td>{item.name || "-"}</td>
            <td>{item.age || "-"}</td>
            <td>{item.mobile || item.phone || item.mobileNumber || "-"}</td>
            <td>{item.course || "-"}</td>
            <td>{item.email || "-"}</td>
            <td>
              <button
                type="button"
                onClick={() => handleUpdate(item)}
                style={{ marginRight: "8px", cursor: "pointer" }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7">No records found</td>
        </tr>
      )}
    </>
  );
}

export default Student;