import React from 'react';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const StyledSider = styled(Sider)`
  overflow: 'auto';
  height: '100vh';
  position: 'fixed';
  left: 0;
`;

const SubMenuBar = () => {
  const onClick = (e) => {
    console.log('click', e);
  };

  return (
    <div>
      <StyledSider>
        <Menu onClick={onClick} style={{ width: 256 }} mode="inline">
          <Menu.Item key="sub1" icon={<AppstoreOutlined />}>
            <Link to="/depression">우울증</Link>
          </Menu.Item>

          <Menu.Item key="sub2" icon={<SettingOutlined />}>
            <Link to="/stress">스트레스</Link>
          </Menu.Item>

          <Menu.Item key="sub3" icon={<AppstoreOutlined />}>
            <Link to="/panicDisorder">공황장애</Link>
          </Menu.Item>

          <Menu.Item key="sub4" icon={<SettingOutlined />}>
            <Link to="/mentalDisorder">정신장애 </Link>
          </Menu.Item>

          <Menu.Item key="sub5" icon={<AppstoreOutlined />}>
            <Link to="/suicide">자살 위험성</Link>
          </Menu.Item>

          <Menu.Item key="sub6" icon={<SettingOutlined />}>
            <Link to="/anxiety">불안</Link>
          </Menu.Item>

          <Menu.Item key="sub7" icon={<MailOutlined />}>
            <Link to="/centerInfo">상담센터 정보</Link>
          </Menu.Item>
        </Menu>
      </StyledSider>
    </div>
  );
};

export default SubMenuBar;
