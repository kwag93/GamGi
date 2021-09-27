import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import dummy from '../db/mentalData.json';
import MentalList from '../selfCheck/MentalList';

const { Content } = Layout;

const StyledContent = styled(Content)`
  width: 80rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin-top: 3rem;
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

const MentalDisorder = () => {
  const onClick = (e) => {
    setkey(e.key);
  };

  const [showCanvos, setShowCanvos] = useState(false);
  const [key, setkey] = useState(1);
  const addToCanvos = () => {
    setShowCanvos(true);
  };
  // console.log(addToCanvos);

  return (
    <div>
      <HeaderContainer />
      <TopBox />
      <StyledLayout>
        <SubMenuBar />
        <StyledLayout style={{ padding: '0 100px 24px' }}>
          <Menu onClick={onClick} mode="horizontal" defaultSelectedKeys="1">
            {dummy.menu.map((title) => (
              <Menu.Item
                onClick={addToCanvos}
                key={title.id}
                icon={<MailOutlined />}
              >
                {title.title}
              </Menu.Item>
            ))}
          </Menu>

          <StyledContent>
            <MentalList keys={key} />
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default MentalDisorder;
