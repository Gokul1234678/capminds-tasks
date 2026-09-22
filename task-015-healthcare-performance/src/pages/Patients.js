import {
    useMemo,
    useState,
    useCallback,
} from "react";

import PatientCard from "../components/PatientCard";

const patients = [
    { id: 1, name: "John Doe", age: 32 },
    { id: 2, name: "David Smith", age: 45 },
    { id: 3, name: "Michael Johnson", age: 28 },
    { id: 4, name: "Robert Brown", age: 51 },
    { id: 5, name: "James Wilson", age: 39 },
    { id: 6, name: "William Davis", age: 42 },
    { id: 7, name: "Richard Miller", age: 36 },
    { id: 8, name: "Joseph Moore", age: 29 },
    { id: 9, name: "Thomas Taylor", age: 55 },
    { id: 10, name: "Charles Anderson", age: 41 },
    { id: 11, name: "Daniel Thomas", age: 34 },
    { id: 12, name: "Matthew Jackson", age: 47 },
];

function Patients() {
    console.log("Patients rendered");
    const [count, setCount] = useState(0);

    const [search, setSearch] = useState("");

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    // const handlePatientClick = useCallback((patient) => {
    //     console.log("Selected patient:", patient.name);
    // }, []);

        const handlePatientClick = (patient) => {
        console.log("Selected patient:", patient.name);
    };

    const filteredPatients = useMemo(() => {
        console.log("Filtering patients...");

        return patients.filter((patient) =>
            patient.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <h1 className="mb-4">Patients</h1>

            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search patient..."
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            <div className="row">
                {filteredPatients.map((patient) => (
                    <div
                        className="col-md-4 mb-3"
                        key={patient.id}
                    >
                        <PatientCard
                            patient={patient}
                            onClick={handlePatientClick}
                        />
                    </div>
                ))}
            </div>

            <button
                className="btn btn-secondary mb-3"
                onClick={() => setCount(count + 1)}
            >
                Count: {count}
            </button>
        </div>
    );
}

export default Patients;