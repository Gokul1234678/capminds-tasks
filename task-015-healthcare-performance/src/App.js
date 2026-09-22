import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import Dashboard from "./pages/Dashboard";

const Patients = lazy(() => import("./pages/Patients"));
const Doctors = lazy(() => import("./pages/Doctors"));

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
          >
            Healthcare App
          </Link>

          <div>
            <Link to="/" className="btn btn-light me-2">
              Dashboard
            </Link>

            <Link to="/patients" className="btn btn-light me-2"> Patients
            </Link>

            <Link to="/doctors" className="btn btn-light" >
              Doctors
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-4">

        <Suspense fallback={<p>Loading page...</p>}>

          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/patients"
              element={<Patients />}
            />

            <Route
              path="/doctors"
              element={<Doctors />}
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;