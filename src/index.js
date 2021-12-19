import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [mousePosition, SetMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(e) {
    SetMousePosition({ x: e.pageX, y: e.pageY });
  }

  return (
    <div>
      <p>
        x: {mousePosition.x}, y: {mousePosition.y}
      </p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);

function NewPage() {
  return <div>New Page</div>;
}

setTimeout(ReactDOM.render(<NewPage />, rootNode), 5000);
