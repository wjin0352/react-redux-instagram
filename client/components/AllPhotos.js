import React from 'react';
import Photo from './Photo';

const AllPhotos = React.createClass({
  render() {
    return (
      <div className='all-photos'>
        <p id="intro">
        This site allows users to rate and comment on curated galleries.
        It shows people a list of photos I liked and provides the user ability to comment and upvote photos.<br/>
        <br/>
        To like a picture simply click on the heart icon.  To provide a comment on the
        picture click on the picture itself or the comment link.  Then type your name
        and your comment on the comment box and click
        enter.  To return home click on the top my photos icon.
        </p>
        {this.props.posts.map((post, idx) => <Photo {...this.props} key={idx} idx={idx} post={post} />)}
      </div>
    )
  }
});

export default AllPhotos;
