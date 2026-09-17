import { useState } from "react";
import "./App.css";

import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import UserDetails from "./components/UserDetails";

function App() {
  // String
  const [name, setName] = useState("Gokul");

  // Number
  const [age, setAge] = useState(24);

  // Boolean
  const [isActive, setIsActive] = useState(true);

  // Array
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
  ]);

  // Object
  const [userDetails, setUserDetails] = useState({
    email: "gokul@example.com",
    location: "Tamil Nadu",
    role: "Frontend Developer",
  });

  // Show / hide update form
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formActive, setFormActive] = useState(false);
  const [formSkills, setFormSkills] = useState([]);

  // New skill
  const [newSkill, setNewSkill] = useState("");

  // Success message
  const [message, setMessage] = useState("");

  // Open edit form function
  const handleEdit = () => {
    setFormName(name);
    setFormAge(age);
    setFormEmail(userDetails.email);
    setFormLocation(userDetails.location);
    setFormRole(userDetails.role);
    setFormActive(isActive);
    setFormSkills(skills);

    setNewSkill("");
    setMessage("");
    setIsEditing(true);
  };

  // Add skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setFormSkills([...formSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  // Remove skill
  const handleRemoveSkill = (index) => {
    // Remove skill at the specified index by creating a new array without that skill
    setFormSkills(
      formSkills.filter((_, skillIndex) => skillIndex !== index)
    );
  };

  // Update user
  const handleUpdate = (e) => {
    e.preventDefault();

    // Update main states
    setName(formName);
    setAge(Number(formAge));
    setIsActive(formActive);
    setSkills(formSkills);

    setUserDetails({
      email: formEmail,
      location: formLocation,
      role: formRole,
    });

    setMessage("User updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="container py-5">

      {/* Heading */}
      <h1 className="text-center mb-4">
        User Profile Management
      </h1>

      {/* Edit Button */}
      <div className="text-center mb-4">
        <button
          className="btn btn-primary"
          onClick={handleEdit}
        >
          Edit Profile
        </button>
      </div>

      {/* Profile */}
      <ProfileCard
        name={name}
        age={age}
        isActive={isActive}
      />

      {/* Skills */}
      <Skills skills={skills} />

      {/* User Details */}
      <UserDetails userDetails={userDetails} />

      {/* Success Message */}
      {message && (
        <div className="alert alert-success">
          {message}
        </div>
      )}

      {/* Update Form */}
      {isEditing && (
        <div className="card shadow-sm mt-4">

          <div className="card-body">

            <h3 className="mb-4">
              Update Profile
            </h3>

            <form onSubmit={handleUpdate}>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                />
              </div>

              {/* Age */}
              <div className="mb-3">
                <label className="form-label">
                  Age
                </label>

                <input
                  type="number"
                  className="form-control"
                  value={formAge}
                  onChange={(e) => setFormAge(e.target.value)}
                  min="18"
                  max="100"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  required
                />
              </div>

              {/* Location */}
              <div className="mb-3">
                <label className="form-label">
                  Location
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  required
                />
              </div>

              {/* Role */}
              <div className="mb-3">
                <label className="form-label">
                  Role
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={formRole}
                  onChange={(e) => setFormRole(e.target.value)}
                  required
                />
              </div>

              {/* Skills */}
              <div className="mb-3">

                <label className="form-label">
                  Skills
                </label>

                {/* Current skills */}
                <div className="mb-3">
                  {formSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2"
                    >
                      {skill}

                      <button
                        type="button"
                        className="btn-close btn-close-white ms-2"
                        onClick={() =>
                          handleRemoveSkill(index)
                        }
                      ></button>
                    </span>
                  ))}
                </div>

                {/* Add skill */}
                <div className="input-group">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a skill"
                    value={newSkill}
                    onChange={(e) =>
                      setNewSkill(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleAddSkill}
                  >
                    Add Skill
                  </button>

                </div>

              </div>

              {/* Active Status */}
              <div className="form-check mb-4">

                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={formActive}
                  onChange={(e) =>
                    setFormActive(e.target.checked)
                  }
                />

                <label className="form-check-label">
                  Active Status
                </label>

              </div>

              {/* Buttons */}
              <button
                type="submit"
                className="btn btn-success me-2"
              >
                Update User
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;