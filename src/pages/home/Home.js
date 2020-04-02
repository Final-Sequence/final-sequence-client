import React from "react";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import {FormattedMessage} from "react-intl";
import styled from "styled-components";


const Home = () => {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <div className="ui vertical striped segment">
        <div className="ui middle aligned stackable grid container">
          <Title><h2 className="ui header"><FormattedMessage id="home.services"/></h2></Title>
          <Row className="row">
            <div className="eight wide column">
              <h3 className="ui header"><FormattedMessage id="menu.kaimyou"/></h3>
              <p><FormattedMessage id="home.kaimyou.description1"/></p>
              <p><FormattedMessage id="home.kaimyou.description2"/></p>
            </div>
            <div className="six wide right floated column">
              <img src="images/home/kaimyou_price.png" className="ui large bordered rounded image"/>
            </div>
          </Row>
          <Row className="row">
            <div className="six wide column">
              <img src="images/home/kaimyou_price.png" className="ui large bordered rounded image"/>
            </div>
            <div className="eight wide right floated column">
              <h3 className="ui header"><FormattedMessage id="menu.tomb"/></h3>
              <p><FormattedMessage id="home.tomb.description1"/></p>
              <p><FormattedMessage id="home.tomb.description2"/></p>
            </div>
          </Row>
          <Row className="row">
            <div className="eight wide column">
              <h3 className="ui header"><FormattedMessage id="menu.funeral"/></h3>
              <p><FormattedMessage id="home.funeral.description1"/></p>
              <p><FormattedMessage id="home.funeral.description2"/></p>
            </div>
            <div className="six wide right floated column">
              <img src="images/home/kaimyou_price.png" className="ui large bordered rounded image"/>
            </div>
          </Row>
          <Title><h2 className="ui header"><FormattedMessage id="home.price"/></h2></Title>
          <Row className="row">かんがえちゅう</Row>
        </div>
      </div>
    </div>
  )
};

const Title = styled.div`
  margin-top: 5vh;
`;
const Row = styled.div`
  margin-top: 5vh;
`;

export default Home;
