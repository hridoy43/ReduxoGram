import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

//import comment
class Single extends Component {
    render() {
        const i = this.props.posts.findIndex((item) => item.code === this.props.params.postId)
        const post = this.props.posts[i];
        console.log(post);

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments />

            </div>
        );
    }

}
export default Single;