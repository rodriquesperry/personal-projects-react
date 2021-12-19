import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "Python",
    yearsOfExperience: 0,
  });
  // const [language, setLanguage] = React.useState("python");
  // const [yearsOfExperience, setYearsOfExperience] = React.useState(0);
  function handleBUttonClick(e) {
    setDeveloper({
      language: "JavaScript",
      yearsOfExperience: 0,
    });
  }

  function years(e) {
    setDeveloper({
      ...developer,
      yearsOfExperience: e.target.value,
    });
  }

  return (
    <div>
      <button onClick={handleBUttonClick}>Button Language</button>
      <div>
        <input type="number" onChange={years} />
      </div>

      <p>I am learning {developer.language}</p>
      <p>
        I have {developer.yearsOfExperience} in {developer.language}
      </p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
