import React from "react";
import ReactDOM from "react-dom";

const endPoint = "https://api.github.com/users/rodriquesperry";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch(endPoint);
      const data = await response.json();
      setUser(data);
    }
    getUser();
    // fetch(endPoint).then((response) =>
    //   response.json().then((data) => setUser(data))
    // );
  }, []);

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt="Avatar" />
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
