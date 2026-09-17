function ProfileCard({ name, age, isActive }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h3 className="card-title">
          {name}
        </h3>

        <p>
          <strong>Age:</strong> {age}
        </p>

        <p>
          <strong>Status:</strong>{" "}

          {isActive ? (
            <span className="badge bg-success">
              Active
            </span>
          ) : (
            <span className="badge bg-danger">
              Inactive
            </span>
          )}
        </p>

      </div>
    </div>
  );
}

export default ProfileCard;