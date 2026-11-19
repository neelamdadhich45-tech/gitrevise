import React from "react";

function AddStudentForm({
  name,
  setName,
  age,
  setAge,
  mobile,
  setMobile,
  email,
  setEmail,
  course,
  setCourse,
  showForm,
  isedit,
  handleSave,
  handleUpdateData,
  handleCancel,
}) {
  if (!showForm) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isedit) {
      handleUpdateData();
    } else {
      handleSave();
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isedit ? "Update Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button type="button" onClick={handleCancel} style={styles.cancelBtn}>
            Cancel
          </button>
          <button type="submit" style={styles.addBtn}>
            {isedit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

// Simple Inline CSS (Bina Bootstrap ke)
const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #aaa",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "10px",
  },
  cancelBtn: {
    padding: "8px 15px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  addBtn: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddStudentForm;