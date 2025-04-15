import React from "react";

const Projects = () => {
  return (
    <div className="ag-projects-container">
      <div className="ag-projects-title">
        <div>
          <h2>Projects</h2>
          <p>Showcasing my Selected Works</p>
        </div>
      </div>

      <div className="ag-projects-content">
        <div className="ag-projects">
          <img src="Uniqaya-mockup.jpg" alt="Project 1" />
        </div>

        <div className="ag-projects">
          <img src="Uniqaya-mockup.jpg" alt="Project 2" />
        </div>

        <div className="ag-projects">
          <img src="Uniqaya-mockup.jpg" alt="Project 3" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
