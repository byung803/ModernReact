import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew2 extends Component {
  render() {
    return (
        <div className="text-xs-center">
          <h3>질문 2</h3>
          <h5>서 있거나 조금 걷다보면 다리쪽으로 통증 및 저림이 나타난다</h5>
          <Link to="/posts/que2" className="btn btn-primary">예</Link>
          <Link to="/posts/que2" className="btn btn-danger">아니요</Link>
        </div>
    );
  }
}

// connect => mapStateToProps, mapDispatchToProps
// reduxForm => formConfig, mapStateToProps, mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsNew2);

// user types something in,,, recored it on application state
/*
state ==={
    PostsNewForm: {
      title: '....',
      categories: '....',
      content: '....'
  }
}
*/
