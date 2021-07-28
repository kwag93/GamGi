import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import CalendarPage from './pages/CalendarPage';
import ChallengePage from './pages/ChallengePage';
import MyResponsiveBar from './pages/StatisticPage';

const App = () => {
  return (
    <div>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={CalendarPage} path="/calendar" />
      <Route component={ChallengePage} path="/challenge" />
      <Route component={MyResponsiveBar} path="/statistic"/>
    </div>
  );
};
export default App;
