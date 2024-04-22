import { useEffect } from "react";
import { useState } from "react";

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
    }else{
        setShowDropdown(false);
    }
  }
  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
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
      <input
        value={searchParam}
        type="text"
        placeholder="Search..."
        name="search"
        onChange={handleChange}
      />
    </div>
  );
}
