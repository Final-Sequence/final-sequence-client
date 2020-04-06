import React from "react";
import LanguageSelector from "./languageSelector";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const Header = () => (
  <div className="ui container">
    <TableContainer>
      <Link to="/">
        <Title>
          <img src="/images/logos/logo.png" alt="logo" className="ui image"/>
        </Title>
      </Link>
      <RightItems>
        <Link to="/#service>"><Black><FormattedMessage id="header.service"/></Black></Link>
        <Link to="/#price>"><Black><FormattedMessage id="header.price"/></Black></Link>
        <Link to="/#contact>"><Black><FormattedMessage id="header.contact"/></Black></Link>
        <div style={{marginTop: "-0.15vw"}}><LanguageSelector/></div>
      </RightItems>
    </TableContainer>
  </div>);

const TableContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  display: block;
  width: 25vw;
  margin-left: -2vw;
`;
const Black = styled.div`
  color: black;
  margin-right: 4vw;
`;

const RightItems = styled.div`
  display: flex;
  text-align: right;
  color: black;
`;
export default Header;
