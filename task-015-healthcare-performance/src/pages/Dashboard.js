import { useMemo } from "react";

const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "David Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Robert Brown" },
    { id: 5, name: "James Wilson" },
    { id: 6, name: "William Davis" },
    { id: 7, name: "Richard Miller" },
    { id: 8, name: "Joseph Moore" },
    { id: 9, name: "Thomas Taylor" },
    { id: 10, name: "Charles Anderson" },
    { id: 11, name: "Daniel Thomas" },
    { id: 12, name: "Matthew Jackson" },
];

const doctors = [
    { id: 1, name: "Dr. Sarah Wilson" },
    { id: 2, name: "Dr. Michael Brown" },
    { id: 3, name: "Dr. Emily Davis" },
    { id: 4, name: "Dr. Robert Miller" },
    { id: 5, name: "Dr. Jessica Taylor" },
    { id: 6, name: "Dr. Daniel Anderson" },
    { id: 7, name: "Dr. Olivia Thomas" },
    { id: 8, name: "Dr. James Jackson" },
];

function Dashboard() {
    console.log("Dashboard rendered");

    const totalPatients = useMemo(() => {
        console.log("Calculating total patients...");

        return patients.length;
    }, []);

    const totalDoctors = useMemo(() => {
        console.log("Calculating total doctors...");

        return doctors.length;
    }, []);

    return (
        <div>
            <h1 className="mb-4">
                Healthcare Dashboard
            </h1>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                Total Patients
                            </h5>

                            <h2 className="text-primary">
                                {totalPatients}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                Total Doctors
                            </h5>

                            <h2 className="text-success">
                                {totalDoctors}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;