import React from "react";
import Comment from "./Comment.js";

class CommentList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="coment-list">
        <Comment data={this.props.data}/>
      </div>
    );
  }
}

export default CommentList;
