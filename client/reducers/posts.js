//post reducer will call when post action will occure

function posts(state = [], action) {
    console.log('the post will change')
    console.log(state, action);
    return state;
}

export default posts;