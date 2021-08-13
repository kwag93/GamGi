import React from 'react';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const StyledSider = styled(Sider)`
  overflow: 'auto';
  height: '100vh';
  position: 'fixed';
  left: 0;
`;

const StyledContent = styled(Content)`
  background: #fff;
  padding: 100;
  margin: 0;
  overflow: 'initial';
`;

const StyledLayout = styled(Layout)`
  background: #fff;
`;

const SelfCheckPage = () => {
  const handleClick = (e) => {
    console.log('click', e);
  };

  return (
    <div>
      <HeaderContainer />
      <StyledLayout>
        <StyledSider>
          <Menu onClick={handleClick} style={{ width: 256 }} mode="inline">
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="우울증">
              <Menu.Item key="1">개요</Menu.Item>
              <Menu.Item key="2">진단 및 치료</Menu.Item>
              <Menu.Item key="3">스스로 돕는 방법</Menu.Item>
              <Menu.Item key="4">자가진단</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<SettingOutlined />} title="스트레스">
              <Menu.Item key="5">개요</Menu.Item>
              <Menu.Item key="6">진단 및 치료</Menu.Item>
              <Menu.Item key="7">스스로 돕는 방법</Menu.Item>
              <Menu.Item key="8">자가진단</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="공황장애">
              <Menu.Item key="9">개요</Menu.Item>
              <Menu.Item key="10">진단 및 치료</Menu.Item>
              <Menu.Item key="11">스스로 돕는 방법</Menu.Item>
              <Menu.Item key="12">자가진단</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="정신장애">
              <Menu.Item key="13">개요</Menu.Item>
              <Menu.Item key="14">진단 및 치료</Menu.Item>
              <Menu.Item key="15">스스로 돕는 방법</Menu.Item>
              <Menu.Item key="16">자가진단</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<AppstoreOutlined />} title="자살위험성">
              <Menu.Item key="17">개요</Menu.Item>
              <Menu.Item key="18">진단 및 치료</Menu.Item>
              <Menu.Item key="19">스스로 돕는 방법</Menu.Item>
              <Menu.Item key="20">자가진단</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<SettingOutlined />} title="불안">
              <Menu.Item key="21">개요</Menu.Item>
              <Menu.Item key="22">진단 및 치료</Menu.Item>
              <Menu.Item key="23">스스로 돕는 방법</Menu.Item>
              <Menu.Item key="24">자가진단</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<MailOutlined />} title="상담센터 정보">
              <Menu.Item key="25">Option 1</Menu.Item>
              <Menu.Item key="26">Option 2</Menu.Item>
            </SubMenu>
          </Menu>
        </StyledSider>
        <StyledLayout style={{ padding: '0 100px 24px' }}>
          <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="selfcheck" icon={<MailOutlined />}>
              자가진단
            </Menu.Item>
            <Menu.Item />
            <Menu.Item key="centerinfo" icon={<MailOutlined />}>
              상담센터 정보
            </Menu.Item>
          </Menu>
          <StyledContent className="site-layout-background">test</StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default SelfCheckPage;
