import React from 'react';
import ReactDOM from "react-dom";
class CommentForm extends React.Component {
  constructor(){
    super();
    this.state = {
      comment: {
        text:'',
        author:''
      }
    }
  }
  handelInputChange(e) {
    let {comment} = this.state;
    comment.text = e.target.value;
     this.setState({comment});
  }
  handelAuthorChange(e) {
    let {comment} = this.state;
    comment.author = e.target.value;
    console.log(comment);
     this.setState({comment});
  }

  handelFormSubmit(event){
     event.preventDefault();
     let {comment} = this.state;
     this.props.handelSubmit(comment);
     comment.text = '';
     comment.author = '';
     this.setState(comment);
     ReactDOM.findDOMNode(this.refs.author).value = '';
     ReactDOM.findDOMNode(this.refs.text).value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelFormSubmit.bind(this)}>
          <input ref="author" placeholder="Author" onChange={this.handelAuthorChange.bind(this)}></input>
          <input ref="text" placeholder="Comment" onChange={this.handelInputChange.bind(this)}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
