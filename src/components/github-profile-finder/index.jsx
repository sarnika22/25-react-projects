import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./style.css";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("sarnika22");
  const [userData, setUserdata] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
      setUserdata(data);
      setLoading(false);
      setUsername("");
    }

  }

  function handleSubmit()
  {
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading... Please Wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search by username"
          placeholder="github username.."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}> onSearch</button>
      </div>
      { userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
