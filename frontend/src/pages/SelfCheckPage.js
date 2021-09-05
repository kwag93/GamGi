import React, { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import SelfcheckButton from '../selfCheck/SelfcheckButton';
import CenterInfo from '../selfCheck/CenterInfo';

const { Content } = Layout;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin: 0;
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

const SelfCheckPage = () => {
  const onClick = (e) => {
    console.log('click', e);
  };

  const [buttonState, setButtonState] = useState(false);
  const openButton = () => {
    console.log(openButton);
    setButtonState(true);
    console.log(setButtonState);
  };

  const [centerState, setCenterState] = useState(false);
  const openCenter = () => {
    console.log(openCenter);
    setCenterState(true);
    console.log(setCenterState);
  };

  useEffect(() => {
    if (setButtonState === true) {
      console.log('자가진단 메뉴');
    }
    if (setCenterState === true) {
      console.log('센터정보 메뉴');
    }
  });

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
            defaultSelectedKeys={'selfcheck'}
          >
            <Menu.Item
              onClick={openButton}
              key="selfcheck"
              icon={<MailOutlined />}
            >
              정신건강 정보
            </Menu.Item>
            <Menu.Item />
            <Menu.Item
              onClick={openCenter}
              key="centerinfo"
              icon={<MailOutlined />}
            >
              상담센터 정보
            </Menu.Item>
          </Menu>
          <StyledContent className="site-layout-background">
            <SelfcheckButton state={buttonState} />
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default SelfCheckPage;
