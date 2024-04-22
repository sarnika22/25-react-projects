import { useEffect } from "react";
import { useState } from "react";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("sarnika22");

async function fetchGithubUserData() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
}

  function handleSubmit() {}

  useEffect(() => {
    fetchGithubUserData()    
  },[])
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search by username"
          placeholder="github username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}> onSearch</button>
      </div>
    </div>
  );
}
