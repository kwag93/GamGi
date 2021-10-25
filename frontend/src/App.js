import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import CalendarPage from './pages/CalendarPage';
import Gamgi from './pages/Gamgi';
import MyResponsiveBar from './pages/StatisticPage';
import Emotion from './pages/Emotion';
import SelfCheckPage from './pages/SelfCheckPage';
import PostViewer from './components/post/PostViewer';
import Depression from './pages/Depression';
import ContentList from './selfCheck/ContentList';
import TitleList from './selfCheck/TitleList';
import Anxiety from './pages/Anxiety';
import Obsession from './pages/Obsession';
import Stress from './pages/Stress';
import Suicide from './pages/Suicide';
import CenterList from './selfCheck/CenterList';
import CenterInfo from './pages/CenterInfo';
import DropMenu from './pages/DropMenu';
import DropdownBox from './selfCheck/DropdownBox';
import AnxietyCheck from './pages/AnxietyCheck';
import DepressionCheck from './pages/DepressionCheck';
import ObsessionCheck from './pages/ObsessionCheck';
import StressCheck from './pages/StressCheck';
import SuicideCheck from './pages/SuicideCheck';
import PhysicalCheck from './pages/PhysicalCheck';
import PhysicalDisability from './pages/PhysicalDisability';
import Calculator from './pages/Calculator';
import Auth from './hoc/auth';

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
      <Route component={Auth(WritePage, true)} path="/write" />
      <Route component={Auth(PostPage, true)} path="/@:username/:postId" />
      <Route component={Auth(CalendarPage, true)} path="/calendar" />
      <Route component={Gamgi} path="/gamgi" />
      <Route component={Auth(MyResponsiveBar, true)} path="/statistic" />
      <Route component={Auth(Emotion, true)} path="/emotion" />
      <Route component={Auth(SelfCheckPage, true)} path="/selfcheck" />
      <Route component={Auth(PostViewer, true)} path="/viewer" />
      <Route component={Auth(Depression, true)} path="/depression" />
      <Route component={Auth(ContentList, true)} path="/ContentList" />
      <Route component={Auth(TitleList, true)} path="/TitleList" />
      <Route component={Auth(Anxiety, true)} path="/Anxiety" />
      <Route component={Auth(Obsession, true)} path="/Obsession" />
      <Route
        component={Auth(PhysicalDisability, true)}
        path="/Physicaldisability"
      />
      <Route component={Auth(Stress, true)} path="/Stress" />
      <Route component={Auth(Suicide, true)} path="/suicide" />
      <Route component={Auth(CenterList, true)} path="/centerList" />
      <Route component={Auth(CenterInfo, true)} path="/centerinfo" />
      <Route component={Auth(DropMenu, true)} path="/dropdown" />
      <Route component={Auth(DropdownBox, true)} path="/dropdownbox" />
      <Route component={Auth(AnxietyCheck, true)} path="/anxietycheck" />
      <Route component={Auth(DepressionCheck, true)} path="/depressioncheck" />
      <Route component={Auth(ObsessionCheck, true)} path="/obsessionCheck" />
      <Route component={Auth(PhysicalCheck, true)} path="/physicalCheck" />
      <Route component={Auth(StressCheck, true)} path="/stresscheck" />
      <Route component={Auth(SuicideCheck, true)} path="/suicidecheck" />
      <Route component={Auth(Calculator, true)} path="/calculator" />
    </div>
  );
};
export default App;
