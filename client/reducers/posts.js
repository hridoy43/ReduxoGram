//post reducer will call when post action will occure

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;