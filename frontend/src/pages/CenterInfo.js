import React, { useState } from 'react';
import { Menu, Layout, Dropdown } from 'antd';
import { MailOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import CenterList from '../selfCheck/CenterList';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const StyledContent = styled(Content)`
  width: 80rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin-top: 2rem;
  overflow: 'initial';
`;

const StyledLayout = styled(Layout)`
  background: white;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
`;

const CenterInfo = () => {
  const onClick = (e) => {
    console.log('click', e);
    setkey(e.key);
  };

  const [showCanvos, setShowCanvos] = useState(false);
  const [key, setkey] = useState(1);
  const addToCanvos = () => {
    setShowCanvos(true);
  };

  return (
    <div>
      <HeaderContainer />
      <TopBox />
      <StyledLayout>
        <SubMenuBar />
        <StyledLayout style={{ padding: '0 100px 24px' }}>
          <Menu
            onClick={onClick}
            mode="horizontal"
            defaultSelectedKeys={'centerinfo'}
          >
            <Menu.Item
              onClick={onClick}
              key="selfcheck"
              icon={<MailOutlined />}
            >
              <Link to="/selfcheck">정신건강 정보</Link>
            </Menu.Item>
            <Menu.Item />

            <Menu.Item
              onClick={onClick}
              key="centerinfo"
              icon={<MailOutlined />}
              to="/centerInfo"
            >
              상담센터 정보
            </Menu.Item>
          </Menu>
          <StyledContent>
            <CenterList />
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default CenterInfo;
