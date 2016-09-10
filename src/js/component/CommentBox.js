import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
class CommentBox extends React.Component {
  constructor() {
    super();

    const data = [{
      'author':'Sam',
      'comment': 'Woow'
    },{
      'author':'Micke',
      'comment': 'Micke Woooew'
    }];

    this.state = {data};
  }
  handelSubmit(comment) {
    const {data} = this.state;
    data.push({
      'author': comment.author,
      'comment': comment.text
    });
    this.setState({data});
  }
  render() {
    var style = {
      'height': '200px',
      'width': '400px',
      'margin': 'auto'
    };

    return (
      <div className="coment-box" style={style}>
        <CommentList data={this.state.data}/>
        <CommentForm refs="hey" handelSubmit={this.handelSubmit.bind(this)} />
      </div>
    );
  }
}

export default CommentBox;
