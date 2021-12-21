import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState("");
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
    </>
  );
}

export default App;
