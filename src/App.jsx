// App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [showMembers, setShowMembers] = useState(false);

  const members = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
  ];

  return (
    <div className="app">
      {/* Logo */}
      <img src="/OER LOGO.png" alt="OER Logo" className="logo" />

      {/* Team Name */}
      <h1 className="team-name">OER ESPORTS</h1>

      {/* Members Button */}
      <button onClick={() => setShowMembers(!showMembers)} className="members-btn">
        Members
      </button>

      {/* Members List */}
      {showMembers && (
        <div className="members-list">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              {member}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
