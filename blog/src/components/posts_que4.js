import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsQue4 extends Component {
  render() {
    return (
        <div className="text-xs-center">
          <h3>질문 5</h3>
          <h5>배변, 기침, 재채기를 할 때 허리 통증이나 다리 통증을 악화시키기도 한다.</h5>
          <Link to="/posts/result" className="btn btn-primary">예</Link>
          <Link to="/posts/result" className="btn btn-danger">아니요</Link>
        </div>
    );
  }
}

// connect => mapStateToProps, mapDispatchToProps
// reduxForm => formConfig, mapStateToProps, mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsQue4);

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
