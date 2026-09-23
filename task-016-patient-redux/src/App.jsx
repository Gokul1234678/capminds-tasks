import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";

function App() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">Patient Management</h1>
          <p className="text-muted">Manage your patients easily</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <AddPatient />
            <PatientList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;