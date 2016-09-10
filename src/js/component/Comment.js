import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {data} = this.props;
    let commentList = data.map((dataContent, index) => {
      return (
        <div key={index} className="comment">
          <div className="comment-text"> {dataContent.comment}</div>
          <div className="author">
            Author: <span> {dataContent.author} </span>
          </div>
        </div>);
    });
    return (
      <div className="comments">
       {commentList}
      </div>
    );
  }
}

export default Comment;
