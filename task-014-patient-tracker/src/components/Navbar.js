import { useContext } from "react";
import PatientContext from "../context/PatientContext";

function Navbar() {
  const patient = useContext(PatientContext);

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          Patient Tracker
        </span>

        <span className="text-white">
          Welcome, {patient.name}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;