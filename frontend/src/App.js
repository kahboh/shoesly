import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>InteriorVision</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.style}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
