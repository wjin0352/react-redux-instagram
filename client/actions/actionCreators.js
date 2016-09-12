// All our actions representing the things that can happen in our application

// increment for likes (index is which post to like)
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, idx) {
  return {
    type: 'REMOVE_COMMENT',
    idx,
    postId
  }
}
