import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() { // only called once
      this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            로그인
          </Link>

        </div>
          <div className="text-xs-center">
            <img src={'http://www.massagefreo.com.au/wp-content/uploads/2015/12/low-back-pain-300x167.jpg'} alt="boohoo" className="img-responsive" />
          </div>
          <div className="text-xs-center">
            <h3>당신의 허리 건강 테스트</h3>
          </div>
          <div className="text-xs-center">
          <Link to="/posts/que0" className="btn btn-primary">
            시작
          </Link>
          </div>
      </div>
    );
  }
}
/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}
*/

export default connect(null, { fetchPosts })(PostsIndex);
