import React from "react";

const Experience = () => {
  return (
    <div className="ag-experience-container">
      <div className="ag-experience-title">
        <div>
          <h2>experience</h2>
          <p>Showcasing my development journey</p>
        </div>
      </div>

      <div className="ag-experience-content">
        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-logo">A</div>

          <div className="ag-experience-experience-details">
          <h1>Unimarck Pharma Ltd.</h1>
            <h2>Junior Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa, necessitatibus consectetur veritatis
              voluptatum facere quis minus quisquam blanditiis facilis
              repellendus quo? Nesciunt, repellendus natus?
            </p>
          </div>

          <div className="ag-experience-experience-time-period">
            [July, 2024 - Present]
          </div>
        </div>


        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-logo">A</div>

          <div className="ag-experience-experience-details">
            <h1>Echo Web studio</h1>
            <h2>Junior Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa, necessitatibus consectetur veritatis
              voluptatum facere quis minus quisquam blanditiis facilis
              repellendus quo? Nesciunt, repellendus natus?
            </p>
          </div>

          <div className="ag-experience-experience-time-period">
            [July, 2024 - Present]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
