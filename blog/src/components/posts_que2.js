import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsQue2 extends Component {
  render() {
    return (
        <div className="text-xs-center">
          <h3>질문 3</h3>
          <h5>똑바로 누워서 못잔다.</h5>
          <Link to="/posts/que3" className="btn btn-primary">예</Link>
          <Link to="/posts/que3" className="btn btn-danger">아니요</Link>
        </div>
    );
  }
}

// connect => mapStateToProps, mapDispatchToProps
// reduxForm => formConfig, mapStateToProps, mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsQue2);

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
