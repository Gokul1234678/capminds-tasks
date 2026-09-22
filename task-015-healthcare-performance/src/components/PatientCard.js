import React from "react";

function PatientCard({ patient, onClick }) {
    console.log("PatientCard rendered:", patient.name);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {patient.name}
                </h5>

                <p className="card-text">
                    Age: {patient.age}
                </p>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onClick(patient)}
                >
                    Select Patient
                </button>
            </div>
        </div>
    );
}

export default React.memo(PatientCard);