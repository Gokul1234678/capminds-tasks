const doctors = [
    { id: 1, name: "Dr. Sarah Wilson", specialty: "Cardiology" },
    { id: 2, name: "Dr. Michael Brown", specialty: "Neurology" },
    { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrics" },
    { id: 4, name: "Dr. Robert Miller", specialty: "Orthopedics" },
    { id: 5, name: "Dr. Jessica Taylor", specialty: "Dermatology" },
    { id: 6, name: "Dr. Daniel Anderson", specialty: "Cardiology" },
    { id: 7, name: "Dr. Olivia Thomas", specialty: "Neurology" },
    { id: 8, name: "Dr. James Jackson", specialty: "General Medicine" },
];

function Doctors() {
    console.log("Doctors rendered");

    return (
        <div>
            <h1 className="mb-4">Doctors</h1>

            <div className="row">
                {doctors.map((doctor) => (
                    <div
                        className="col-md-4 mb-3"
                        key={doctor.id}
                    >
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {doctor.name}
                                </h5>

                                <p className="card-text">
                                    <strong>
                                        Specialty:
                                    </strong>{" "}
                                    {doctor.specialty}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctors;