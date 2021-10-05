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
import Emotion from './pages/Emotion';
import SelfCheckPage from './pages/SelfCheckPage';
import PostViewer from './components/post/PostViewer';
import Depression from './pages/Depression';
import ContentList from './selfCheck/ContentList';
import TitleList from './selfCheck/TitleList';
import Anxiety from './pages/Anxiety';
import MentalDisorder from './pages/MentalDisorder';
import Stress from './pages/Stress';
import Suicide from './pages/Suicide';
import CenterList from './selfCheck/CenterList';
import CenterInfo from './pages/CenterInfo';
import DropMenu from './pages/DropMenu';
import DropdownBox from './selfCheck/DropdownBox';
import AnxietyCheck from './pages/AnxietyCheck';
import DepressionCheck from './pages/DepressionCheck';
import MentalCheck from './pages/MentalCheck';
import StressCheck from './pages/StressCheck';
import SuicideCheck from './pages/SuicideCheck';
import AlcoholCheck from './pages/AlcoholCheck';
import Alcohol from './pages/Alcohol';

const App = () => {
  return (
    <div>
      <Route component={LoginPage} path="/" exact />
      <Route
        component={PostListPage}
        path={['/postlist/@:username', '/postlist']}
        exact
      />
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
      <Route component={Alcohol} path="/Alcohol" />
      <Route component={Stress} path="/Stress" />
      <Route component={Suicide} path="/suicide" />
      <Route component={CenterList} path="/centerList" />
      <Route component={CenterInfo} path="/centerinfo" />
      <Route component={DropMenu} path="/dropdown" />
      <Route component={DropdownBox} path="/dropdownbox" />
      <Route component={AnxietyCheck} path="/anxietycheck" />
      <Route component={DepressionCheck} path="/depressioncheck" />
      <Route component={MentalCheck} path="/mentalcheck" />
      <Route component={AlcoholCheck} path="/alcoholCheck" />
      <Route component={StressCheck} path="/stresscheck" />
      <Route component={SuicideCheck} path="/suicidecheck" />
    </div>
  );
};
export default App;
