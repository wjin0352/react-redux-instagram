import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // index of post
    const idx = this.props.posts.findIndex((post) => post.code === postId);
    // get us the post
    const post = this.props.posts[idx];
    // allows us to loop over nothing, if no comments
    const postComments = this.props.comments[postId] || [];
    // console.log(postComments);
    return (
      <div className='single-photo'>
        <Photo post={post} idx={idx} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
});

export default Single;
