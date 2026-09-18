import {
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import axios from "axios";
import PatientContext from "../context/PatientContext";

function Dashboard() {
    // Get patient data from Context
    const patient = useContext(PatientContext);

    // Store API users
    const [users, setUsers] = useState([]);

    // Store symptoms
    const [symptoms, setSymptoms] = useState([]);

    // useState input for experiment
    const [stateInput, setStateInput] = useState("");

    // Ref for symptom input
    const symptomInputRef = useRef(null);

    // useRef input for experiment
    const refInput = useRef(null);

    // This runs whenever Dashboard re-renders
    console.log("Component Rendered");

    // Fetch users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );

                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    // Auto-focus symptom input
    useEffect(() => {
        symptomInputRef.current.focus();
    }, []);

    // Add symptom
    const handleAddSymptom = () => {
        const symptom = symptomInputRef.current.value.trim();

        if (symptom !== "") {
            setSymptoms([...symptoms, symptom]);

            // Clear input
            symptomInputRef.current.value = "";
        }
    };

    return (
        <div>
            {/* Patient Information */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">
                        Patient Information
                    </h2>

                    <p>
                        <strong>Name:</strong> {patient.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {patient.email}
                    </p>
                </div>
            </div>

            {/* API Data */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">
                        API Data
                    </h2>

                    {users.length === 0 ? (
                        <p className="text-muted">
                            Loading users...
                        </p>
                    ) : (
                        <div className="row">
                            {users.map((user) => (
                                <div
                                    className="col-md-6 mb-3"
                                    key={user.id}
                                >
                                    <div className="card border">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {user.name}
                                            </h5>

                                            <p className="card-text mb-1">
                                                <strong>Email:</strong>{" "}
                                                {user.email}
                                            </p>

                                            <p className="card-text mb-0">
                                                <strong>City:</strong>{" "}
                                                {user.address.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Symptom Input */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">
                        Symptom Input
                    </h2>

                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a symptom"
                            ref={symptomInputRef}
                        />

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddSymptom}
                        >
                            Add Symptom
                        </button>
                    </div>
                </div>
            </div>

            {/* Symptoms List */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">
                        Symptoms List
                    </h2>

                    {symptoms.length === 0 ? (
                        <p className="text-muted">
                            No symptoms added yet.
                        </p>
                    ) : (
                        <ul className="list-group">
                            {symptoms.map((symptom, index) => (
                                <li
                                    key={index}
                                    className="list-group-item"
                                >
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* useRef vs useState Experiment */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">
                        useRef vs useState Experiment
                    </h2>

                    {/* useState Input */}
                    <div className="mb-3">
                        <label className="form-label">
                            Input using useState
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={stateInput}
                            onChange={(e) =>
                                setStateInput(e.target.value)
                            }
                            placeholder="Type something..."
                        />
                    </div>

                    {/* useRef Input */}
                    <div className="mb-3">
                        <label className="form-label">
                            Input using useRef
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            ref={refInput}
                            placeholder="Type something..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;