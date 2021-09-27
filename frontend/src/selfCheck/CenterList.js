import React from 'react';
import dummy from '../db/centerData.json';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const ListBox = styled.div`
  width: 70rem;
  background: white;
  padding: 1rem;
`;

const TitleBox = styled.div`
  width: 60rem;
  background: white;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const CenterList = () => {
  return (
    <div>
      <TitleBox>
        <h3>기초정신건강복지센터</h3>
        <BottomLine />
      </TitleBox>

      <ListBox>
        <table border="black">
          <thead>
            <tr align="center" bgcolor="#EBEFF7">
              <td>시,도 명</td>
              <td>센터 명</td>
              <td>주소</td>
              <td>전화번호</td>
            </tr>
          </thead>
          <tbody>
            <td align="center" rowspan="26" bgcolor="#EBEFF7">
              서울특별시
            </td>
            {dummy.Seoul.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="17" bgcolor="#EBEFF7">
              부산광역시
            </td>
            {dummy.Busan.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="9" bgcolor="#EBEFF7">
              대구광역시
            </td>
            {dummy.Daegu.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="12" bgcolor="#EBEFF7">
              인천광역시
            </td>
            {dummy.Incheon.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="6" bgcolor="#EBEFF7">
              광주광역시
            </td>
            {dummy.Gwangju.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="6" bgcolor="#EBEFF7">
              대전광역시
            </td>
            {dummy.Daejeon.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="6" bgcolor="#EBEFF7">
              울산광역시
            </td>
            {dummy.Ulsan.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="2" bgcolor="#EBEFF7">
              세종특별자치시
            </td>
            {dummy.Sejong.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="38" bgcolor="#EBEFF7">
              경기도
            </td>
            {dummy.Gyeonggi.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="19" bgcolor="#EBEFF7">
              강원도
            </td>
            {dummy.Gangwon.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="15" bgcolor="#EBEFF7">
              충청북도
            </td>
            {dummy.Chungbuk.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="17" bgcolor="#EBEFF7">
              충청남도
            </td>
            {dummy.Chungnam.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="15" bgcolor="#EBEFF7">
              전라북도
            </td>
            {dummy.Jeonbuk.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="23" bgcolor="#EBEFF7">
              전라남도
            </td>
            {dummy.Jeonnam.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="26" bgcolor="#EBEFF7">
              경상북도
            </td>
            {dummy.Gyeongbuk.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="21" bgcolor="#EBEFF7">
              경상남도
            </td>
            {dummy.Gyeongnam.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
            <td align="center" rowspan="3" bgcolor="#EBEFF7">
              제주특별자치도
            </td>
            {dummy.Jeju.map((content) => (
              <tr align="center">
                <td>{content.title}</td>
                <td>{content.address}</td>
                <td>{content.call}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListBox>
    </div>
  );
};

export default CenterList;
