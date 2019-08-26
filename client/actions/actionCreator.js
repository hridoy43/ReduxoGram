//increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add Commnet
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}


//remove comment
export function removeComment(postId, comment_index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        comment_indexexport
    }
}