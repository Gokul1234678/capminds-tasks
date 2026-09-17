function UserDetails({ userDetails }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h3 className="card-title mb-3">
          User Details
        </h3>

        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>

        <p>
          <strong>Location:</strong> {userDetails.location}
        </p>

        <p>
          <strong>Role:</strong> {userDetails.role}
        </p>

      </div>
    </div>
  );
}

export default UserDetails;