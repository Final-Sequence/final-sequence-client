import React from "react";
import LanguageSelector from "./languageSelector";
import styled from "styled-components";

const Header = () => (
  <div className="ui container">
    <TableContainer>
      <MiddleItem>
        <img src="/images/logos/logo.png" alt="logo"/>
      </MiddleItem>
      <RightItem><LanguageSelector/></RightItem>
    </TableContainer>
  </div>);

const TableContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;
const MiddleItem = styled.div`
  display: block;
`;

const RightItem = styled.div`
  display: block;
  text-align: right;
`;
export default Header;
