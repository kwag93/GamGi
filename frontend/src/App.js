import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import CalendarPage from './pages/CalendarPage';
import ChallengePage from './pages/ChallengePage';
import MyResponsiveBar from './pages/StatisticPage';
import Emotion from './pages/Emotion';
import SelfCheckPage from './pages/SelfCheckPage';
import PostViewer from './components/posts/PostViewer';
import Depression from './pages/Depression';
import ContentList from './selfCheck/ContentList';
import TitleList from './selfCheck/TitleList';



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
      <Route component={MyResponsiveBar} path="/statistic" />
      <Route component={Emotion} path="/emotion" />
      <Route component={SelfCheckPage} path="/selfcheck" />
      <Route component={PostViewer} path="/viewer" />
      <Route component={Depression} path="/depression" />
      
      <Switch>
        <Route component={ContentList} path="/ContentList" />
        <Route component={TitleList} path="/TitleList" />
      </Switch>
    </div>
  );
};
export default App;
