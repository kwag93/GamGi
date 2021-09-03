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
import Anxiety from './pages/Anxiety';
import MentalDisorder from './pages/MentalDisorder';
import PanicDisorder from './pages/PanicDisorder';
import Stress from './pages/Stress';
import Suicide from './pages/Suicide';
import Center from './selfCheck/CenterInfo';

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
      <Route component={ContentList} path="/ContentList" />
      <Route component={TitleList} path="/TitleList" />
      <Route component={Anxiety} path="/Anxiety" />
      <Route component={MentalDisorder} path="/MentalDisorder" />
      <Route component={PanicDisorder} path="/PanicDisorder" />
      <Route component={Stress} path="/Stress" />
      <Route component={Suicide} path="/suicide" />
      <Route component={Center} path="/centerInfo" />
    </div>
  );
};
export default App;
