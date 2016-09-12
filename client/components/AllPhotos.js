import React from 'react';
import Photo from './Photo';

const AllPhotos = React.createClass({
  render() {
    return (
      <div className='all-photos'>
        {this.props.posts.map((post, idx) => <Photo {...this.props} key={idx} idx={idx} post={post} />)}
      </div>
    )
  }
});

export default AllPhotos;
