import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsResult extends Component {
  render() {
    return (
        <div className="text-xs-center">
          <h3>결과</h3>
          <h4>
          1. 허리디스크 손상
          </h4>
          <h5>현재 허리디스크의 확률이 24%입니다. 허리디스크에 좋은 운동으로는 고양이 자세, 악어 자세, 허리비틀기 자세가 있습니다.</h5>
          <h4>2. 척추협착증
          </h4>
          <h5>현재 척추협착증일 확률이 12%입니다. 허리디스크에 좋은 운동으로는 고양이 자세, 악어 자세, 허리비틀기 자세가 있습니다.</h5>
          <h4>3. 요추 신경근병증
          </h4>
          <h5>현재 요추신경근병증일 확률이 7%입니다. 허리디스크에 좋은 운동으로는 고양이 자세, 악어 자세, 허리비틀기 자세가 있습니다.</h5>
          <h4>4. 감염성 척추염
          </h4>
          <h5>현재 감염성 척추염일 확률이 7%입니다. 허리디스크에 좋은 운동으로는 고양이 자세, 악어 자세, 허리비틀기 자세가 있습니다.</h5>
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
    );
  }
}

// connect => mapStateToProps, mapDispatchToProps
// reduxForm => formConfig, mapStateToProps, mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
}, null, { createPost })(PostsResult);

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
