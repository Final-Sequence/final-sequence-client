import React from "react";
import Header from "../../components/header/header";
import {FormattedMessage} from "react-intl";
import styled from "styled-components";
import LivingProofAPI from "../../repository/api/livingProofAPI";


class LivingProofDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {livingProofDetail: {}}
  }

  async componentDidMount() {
    const livingProofDetail = await LivingProofAPI.fetchLivingProofDetail();
    this.setState({livingProofDetail})
  }

  render() {
    const {livingProofDetail} = this.state;
    return (
      <div>
        <Header/>
        <Innner className="ui container">
          <h1 className="ui header red">{livingProofDetail.name}<FormattedMessage id="livingProof.ownLivingProof"/></h1>
          <img src={livingProofDetail.faceImageURL} className="ui fluid image"/>
          <h2 className="ui header">PERSONAL DATA</h2>
          <div className="ui grid">
            {["birthday", "occupation", "motto", "introduction", "postmortemName", "nickname", "height", "weight", "birthplace", "livedPlace", "whereBeen", "academicBackground", "personality", "firstLove", "numberInRelationship", "childhoodLonging", "jobTried", "goodAt", "badAt", "favoriteFood", "dislikeFood", "boast", "hobby", "numberDescendants", "predictingDeathCause", "desiredOffering", "unneededOffering", "messageToFamily", "blog", "propose"]
              .map((propName, i) => (
                <Row livingProofDetail={livingProofDetail} propName={propName} key={i}/>))}
          </div>
          <h2 className="ui header">LIFE CHART</h2>
          <img className="ui fluid image" src={livingProofDetail.lifeChartImageURL} alt="life chart"/>
          <h2 className="ui header">FAMILLY TREE</h2>
          <img className="ui fluid image" src={livingProofDetail.familyTreeImageURL} alt="life chart"/>
        </Innner>
      </div>)
  }
}

const Row = ({livingProofDetail, propName}) => (
  <div className="row">
    <div className="six wide column black"><FormattedMessage id={`livingProof.${propName}`}/></div>
    <div className="ten wide column olive">{livingProofDetail[propName]}</div>
  </div>
)

const Innner = styled.div`
  margin-top: 5vh;
`;

export default LivingProofDetail;
