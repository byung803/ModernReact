import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsQue3 extends Component {
  render() {
    return (
        <div className="text-xs-center">
          <h3>질문 4</h3>
          <h5>허리가 뻣뻣함과 통증을 느끼고 스트레칭이나 운동시 더 심해진다.</h5>
          <Link to="/posts/que4" className="btn btn-primary">예</Link>
          <Link to="/posts/que4" className="btn btn-danger">아니요</Link>
        </div>
    );
  }
}

// connect => mapStateToProps, mapDispatchToProps
// reduxForm => formConfig, mapStateToProps, mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsQue3);

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
