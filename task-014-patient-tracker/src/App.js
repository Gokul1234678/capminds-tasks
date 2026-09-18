import PatientContext from "./context/PatientContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const patient = {
    name: "John Doe",
    email: "patient@test.com",
  };

  return (
    <PatientContext.Provider value={patient}>
      <Navbar />

      <div className="container py-4">
        <h1 className="text-center mb-4">
          Patient Data & Symptom Tracker
        </h1>

        <Dashboard />
      </div>
    </PatientContext.Provider>
  );
}

export default App;