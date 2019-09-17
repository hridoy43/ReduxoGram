//increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add Commnet
export function addComment(postId, author, comment) {

    console.log('ADD COMMENT TRIGGERED');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}


//remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}