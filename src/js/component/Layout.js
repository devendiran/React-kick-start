import React from "react";
import CommentBox from './CommentBox';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Sample React App"
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1 className='main-header'>Comment Box {this.state.title}</h1>
        <div className="comment-box-container">
          <CommentBox/>
          <CommentBox/>
        </div>
      </div>
    );
  }
}

export default Layout
