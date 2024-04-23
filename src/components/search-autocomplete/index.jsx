import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUser, setfilteredUser] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        user && user.length
          ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setfilteredUser(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setfilteredUser([]);
  }
  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUser(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
    setLoading(true);
  }, []);

  console.log(user, filteredUser);

  return (
    <div className=".search-autocomplete-container">
      {loading ? (
        <h1>Loading! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          placeholder="Search..."
          name="search"
          onChange={handleChange}
        />
      )}
      {showDropdown && <Suggestions hanldeClick={handleClick} data={filteredUser} />}
    </div>
  );
}
