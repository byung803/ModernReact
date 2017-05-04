import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsQue0 from './components/posts_que0';
import PostsQue1 from './components/posts_que1';
import PostsQue2 from './components/posts_que2';
import PostsQue3 from './components/posts_que3';
import PostsQue4 from './components/posts_que4';
import PostsResult from './components/posts_result';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} /> // IndexRoute 가 Root directory로 나옴
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/que0" component={PostsQue0} />
    <Route path="posts/que1" component={PostsQue1} />
    <Route path="posts/que2" component={PostsQue2} />
    <Route path="posts/que3" component={PostsQue3} />
    <Route path="posts/que4" component={PostsQue4} />
    <Route path="posts/result" component={PostsResult} />
  </Route>
);
// google.com/  => renders App
