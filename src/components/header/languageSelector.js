import styled from "styled-components";
import React from "react";
import {useSelector} from "react-redux";
import {changeLanguage} from "../../stores";

const LanguageSelector = () => {
  const localeSelector = state => state.intl.locale;
  const locale = useSelector(localeSelector);
  return (
    <Container className="field">
      <div className="ui">
        <Select
          onChange={e => {
            changeLanguage(e.target.value);
          }}
          value={locale}
        >
          <option value="ja">&#x1F1EF;&#x1F1F5;日本語</option>
          <option value="en">&#x1f1fa;&#x1f1f8;English</option>
        </Select>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 3vw;
`;

const Select = styled.select`
  background: none;
  border: none;
  width: 10vw;
`;

export default LanguageSelector;
