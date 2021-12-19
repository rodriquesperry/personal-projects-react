import React from "react";
import ReactDOM from "react-dom";

const baseUrl = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = React.useState("rodriquesperry");
  const [user, setUser] = React.useState(null);
  const searchInput = React.useRef();

  //Newer way for handling a promise
  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setUser(data);
  }

  function handleClearInput() {
    searchInput.current.value = "";
    searchInput.current.focus();
  }

  //It's normal to have useEffect close to the state that it is updating
  React.useEffect(() => {
    getUser();
    //Older way for handling a promise
    // fetch(endPoint).then((response) =>
    //   response.json().then((data) => setUser(data))
    // );
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Input User Name"
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      ;
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
