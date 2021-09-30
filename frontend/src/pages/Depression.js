import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SubMenuBar from '../components/common/SubMenuBar';
import dummy from '../db/data.json';
import ContentList from '../selfCheck/ContentList';
import palette from '../lib/styles/palette';

const { Content } = Layout;

const StyledContent = styled(Content)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 3rem;
  overflow: 'initial';
  border: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding: 3rem;
`;

const StyledLayout = styled(Layout)`
  background: white;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
`;

const Depression = () => {
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
            {dummy.depression.map((title) => (
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
            <ContentList keys={key} />
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default Depression;
