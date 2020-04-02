import React from "react";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const Menu = () => (
  <div className="ui container">
    <div className="ui center aligned grid">
      <Link to="/ai-kaimyou"><FormattedMessage id="menu.kaimyou"/></Link>
      <Link to="/online-funeral"><FormattedMessage id="menu.funeral"/></Link>
      {/*ライブ中継*/}
      <Link to="/online-tomb"><FormattedMessage id="menu.tomb"/></Link>
      {/*フェイスブック*/}
      <Link to="/online-sutra"><FormattedMessage id="menu.sutra"/></Link>
    </div>
  </div>);

export default Menu;
