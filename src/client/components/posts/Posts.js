import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Posts.css';
import PostCard from '../postsCard/postsCard';

class Posts extends Component {
  render() {
    // console.log(this.props);
    const { posts } = this.props;
    console.log(posts);

    return (
      <article className='posts'>
        <ul className='posts__post-list'>
          {
            posts.map(myPost => {
              return <PostCard post={myPost} key={`posts__post@${myPost.id}`} />;
            })
          }
        </ul>
      </article>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  post: PropTypes.object
};

export default Posts;
