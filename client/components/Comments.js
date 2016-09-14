import React from 'react';

const Comments = React.createClass({
  renderComment(comment, idx) {
    return (
      <div className='comment' key={idx} >
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-content' onClick={this.props.removeComment.bind(null, this.props.params.postId, idx)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault();
    // const postId = this.props.params.postId;
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // with these variables I now call a dispatch method for adding a comment.  The reducer does the rest and returns some new state.
    // dispatch(addComment(postId, author, comment));
    // but we set the dispatch to props in our application so we can do this.
    this.props.addComment(postId, author, comment);
    // now the comments reducer will give your app the new state with the new comment on top of the old comments.
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className='comment-div'>
        {this.props.postComments.map(this.renderComment)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
});

export default Comments;
