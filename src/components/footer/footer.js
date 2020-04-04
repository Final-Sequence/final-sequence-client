import React from "react";
import styled from "styled-components";

const Footer = () => (
  <div className="ui  vertical footer segment">
    <div className="ui container">
      <div>©CHANT-THROUGH Ltd all right reserved</div>
    </div>
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
export default Footer;
