import React from "react";

const About = () => {
  return (
    <div className="ag-about-container">
      <div className="ag-about-text">
        <h1 className="ag-about-text-1">Code.</h1>
        <h1 className="ag-about-text-2">Create.</h1>
        <h1 className="ag-about-text-3">Elevate.</h1>
      </div>

      <div className="ag-about-info">
        <div className="ag-about-info-img">
          <img src="Hero-Banner-Code.jpeg" alt="" />
        </div>

        <div className="ag-about-info-text">
          <p>
            Websites are more than just functional spaces—they're immersive
            experiences where visuals, typography and motion come together to
            tell a story, evoke emotions and create memorable interactions.{" "}
            <br></br> <br></br> Every element, from the smallest detail to the
            overall design plays a role in shaping how users feel and engage
            transforming a simple visit into an inspiring journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
