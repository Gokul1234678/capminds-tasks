import usePatient from "../hooks/usePatient";

const PatientList = () => {
  const { patients, deletePatient } = usePatient();

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">Patient List</h4>
            <p className="text-muted mb-0">All registered patients</p>
          </div>
          <span className="badge bg-primary rounded-pill fs-6 px-3 py-2">{patients.length} Patients</span>
        </div>
        {patients.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">No patients added</h5>
            <p className="text-muted mb-0">Add a patient using the form above.</p>
          </div>
        ) : (
          <div className="list-group">
            {patients.map((patient, index) => (
              <div key={index} className="list-group-item d-flex justify-content-between align-items-center border rounded mb-2 p-3">
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "42px", height: "42px" }}>
                    {index + 1}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-semibold">{patient}</h6>
                    <small className="text-muted">Patient</small>
                  </div>
                </div>
                <button className="btn btn-outline-danger btn-sm" onClick={() => deletePatient(index)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientList;