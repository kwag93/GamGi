import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';
import CalendarPage from './pages/CalendarPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Hi SY</title>
      </Helmet>
      <Route component={LoginPage} exact path="/" />
      <Route component={PostListPage} exact path={['/postlist/@:username', '/postlist']} />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={CalendarPage} path="/calendar" />
    </>
  );
};
export default App;
