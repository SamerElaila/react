import React , { Component } from 'react';
import PropTypes from 'prop-types';

class PostCard extends Component {
  render() {
    console.log(this.props);

    return (
      <li className='posts__post'>
        <div className='posts__post-img-wrapper'>
          <img className='posts__post-img' src={this.props.post.image} />
        </div>
        <div className='posts__post-text'>
          <a href={this.props.post.link} target='_blank'>
            <h2 className='posts__post-title'>{this.props.post.title}</h2>
          </a>
          <p className='posts__post-meta'>
            <span className='posts__post-publication'>
              {this.props.post.publication}
            </span>
            <span className='posts__post-date'>
              {this.props.post.date}
            </span>
          </p>
          <p className='posts__post-snippet'>{this.props.post.snippet}</p>
        </div>
      </li>
    );
  }
}

PostCard.propTypes = {
  post: PropTypes.object
};

export default PostCard;
