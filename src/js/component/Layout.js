import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Sample React App",
      companyName: 'Ideas2it'
    }
  }

  render() { 

    console.log('..............hey ddd', );
    return (
      <div className="main-container">
        <Header title={this.state.title}></Header>
          {this.props.children}
        <Footer info={this.state.companyName}></Footer>
      </div>
      );
  }
}

export default Layout
