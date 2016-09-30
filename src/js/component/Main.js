import React from "react";

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Sticky footer</h1>
        </div>
        <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>
        <p>Use the sticky footer with a fixed navbar if need be, too.</p>
      </div>
      );
  }
}

export default Main;