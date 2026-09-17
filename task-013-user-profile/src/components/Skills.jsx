function Skills({ skills }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h3 className="card-title mb-3">
          Skills
        </h3>

        {skills.map((skill, index) => (
          <span
            key={index}
            className="badge bg-primary me-2"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
  );
}

export default Skills;