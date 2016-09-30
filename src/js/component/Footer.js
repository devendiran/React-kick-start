import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footer">
        <div className="container">
          <p className="text-muted credit">
            Example courtesy { this.props.info }
          </p>
        </div>
      </div>
      );
  }
}

export default Footer;