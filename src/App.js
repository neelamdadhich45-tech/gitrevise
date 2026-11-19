import React, { useState, useEffect } from "react";
import "./App.css";
import Student from "./Student";
import AddStudentForm from "./Studentform";
import NewCount from "./Hello";

function App() {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isedit, setEdit] = useState(false);
  const [isname, setIsname] = useState("");

  // 1. GET API
  async function getdata() {
    const takeresponse = await fetch("https://mymeeshoweb.onrender.com/getdatastudent");
    const takedata = await takeresponse.json();
    setStudent(takedata);
  }

  useEffect(() => {
    getdata();
  }, []);

  // Add Student button click par naya form open karne ke liye
  const handleOpenAddForm = () => {
    setName("");
    setAge("");
    setMobile("");
    setEmail("");
    setCourse("");
    setIsname("");
    setEdit(false);
    setShowForm(true);
  };

  // 2. POST API (Insert)
  const handleSave = async () => {
    if (!name || !age || !mobile || !course || !email) {
      alert("Please Fill all the fields");
      return;
    }

    const newRecord = { name, age, mobile, course, email };

    const optionapi = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecord)
    };

    const response = await fetch("https://mymeeshoweb.onrender.com/insertdatastudent", optionapi);
    const result = await response.json();

    if (result.statuscode == 200) {
      getdata();
      alert("data inserted");
      handleCancel();
    } else {
      alert("data not inserted");
    }
  };

  const handleCancel = () => {
    setName("");
    setMobile("");
    setEmail("");
    setCourse("");
    setAge("");
    setIsname("");
    setShowForm(false);
    setEdit(false);
  };

  // 3. DELETE API (name ke basis par)
  const handleDelete = async (item) => {
    console.log(item, "Deleted");

    const optionapi = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: ""
    };

    const response = await fetch(`https://mymeeshoweb.onrender.com/deletedatastudent/${item.name}`, optionapi);
    const result = await response.json();

    if (result.data?.deletedCount > 0) {
      getdata();
      alert("data deleted");
    } else {
      alert("data not deleted");
    }
  };

  // Edit button click par form fill aur open karne ke liye
  const handleUpdate = (item) => {
    setName(item.name || "");
    setAge(item.age || "");
    setCourse(item.course || "");
    setMobile(item.mobile || item.phone || item.mobileNumber || "");
    setEmail(item.email || "");
    setIsname(item.name || "");
    setEdit(true);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 4. PUT API (Update)
  const handleUpdateData = async () => {
    if (!name || !age || !mobile || !course || !email) {
      alert("Please fill all the Fields");
      return;
    }

    const reqbody = { name, age, mobile, course, email };

    const optionapi = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqbody)
    };

    const response = await fetch(`https://mymeeshoweb.onrender.com/putdatastudent?name=${isname}`, optionapi);
    const result = await response.json();

    if (result.data?.modifiedCount > 0) {
      getdata();
      alert("data Updated");
      handleCancel();
    } else {
      alert("data not Updated");
    }
  };

  return (
    <div>
      <h2>Hello</h2>
      <h3>Sirsa</h3>
      <NewCount /> 

      <AddStudentForm
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        mobile={mobile}
        setMobile={setMobile}
        email={email}
        setEmail={setEmail}
        course={course}
        setCourse={setCourse}
        showForm={showForm}
        setShowForm={setShowForm}
        isedit={isedit}
        handleSave={handleSave}
        handleUpdateData={handleUpdateData}
        handleCancel={handleCancel}
        getdata={getdata}
      />

      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px"
          }}
        >
          <h1 style={{ margin: 0 }}>Student Record</h1>
          <button
            type="button"
            onClick={handleOpenAddForm}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            + Add Student
          </button>
        </div>

        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Sr. no</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Student
              student={student}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;