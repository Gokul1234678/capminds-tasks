import { useState } from "react";
import usePatient from "../hooks/usePatient";

const AddPatient = () => {
  const [name, setName] = useState("");
  const { addPatient } = usePatient();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addPatient(name.trim());
    setName("");
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h4 className="fw-bold mb-1">Add Patient</h4>
        <p className="text-muted mb-4">Enter the patient's name to add them to the list.</p>
        <form onSubmit={handleSubmit}>
          <label className="form-label fw-semibold">Patient Name</label>
          <div className="input-group input-group-lg">
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter patient name" />
            <button type="submit" className="btn btn-primary px-4">Add Patient</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;