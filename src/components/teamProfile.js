import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTeamProfile } from "../actions/action-types";
import TeamMatchUps from "./TeamMatchUps";
import "./index.scss";

class TeamProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFullCopy: false,
            copyLink: false
        }
        this.previewCopy = this.previewCopy.bind(this);
        this.toggleCopyPreviewSize = this.toggleCopyPreviewSize.bind(this);
    }  

    previewCopy(copy) {
        if (this.state.showFullCopy) {
            return copy;
        } else {
            return copy.substr(0, 200);
        }
    } 

    toggleCopyPreviewSize(e) {
        e.preventDefault();
        this.setState(prevState => ({
            showFullCopy: !prevState.showFullCopy,
            copyLink: !prevState.copyLink
        }));
    }

    render() {
        const result = this.props.teamProfile[0];
        const teamDataLength = this.props.teamProfile;  
        const teamLengthExists = teamDataLength.length > 0;
        const isShowMore = this.state.copyLink;
        return (
            teamLengthExists ?
                <div className="team-profile">
                    <div key={result.idTeam}>
                        <Row>
                            <Col xs="12">
                                <img className="banner" src={result.strTeamBanner} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <h2>
                                    <span>{result.strTeam}</span>
                                </h2>
                            </Col>
                        </Row>                        
                        <Row>
                            <Col xs="12" sm="6">
                                <p>
                                    {this.previewCopy(result.strDescriptionEN)}
                                    <a className="paraLink" onClick={this.toggleCopyPreviewSize} href="#">...show {isShowMore ? 'less' : 'more'}</a>
                                </p>
                                <hr /> 
                                <h3>Club Badge</h3>
                                <div className="centred"><img className="logo" src={result.strTeamBadge} alt={result.strTeam + " team logo"} /></div>
                               
                                <hr /> 
                                <h3>Jersey</h3>
                                <div className="centred"><img className="jersey" src={result.strTeamJersey} alt={result.strTeam + " team jersey"} /></div>                                 
                           
                           
                            </Col>
                            <Col xs="12" sm="6">
                                <hr className="hr-mobile" />
                                <h3>Details</h3>
                                <p>
                                    Location: {result.strStadiumLocation} <br />
                                    Stadium: {result.strStadium} <br />
                                    Year Formed: {result.intFormedYear}
                                </p>
                                <hr/>
                                <h3>Match History</h3>
                                <TeamMatchUps 
                                    currentTeam={result.strTeam}   
                                /> 
                                <hr />
                                <p>
                                    <h3>Links</h3>
                                    Website: <a href={"http://" + result.strWebsite} target="_blank">{result.strWebsite}</a><br />
                                    Facebook: <a href={"http://" + result.strFacebook} target="_blank">{result.strFacebook} </a><br />
                                    Twitter:  <a href={"http://" + result.strTwitter} target="_blank">{result.strTwitter}</a> <br />
                                    Instagram: <a href={"http://" + result.strInstagram} target="_blank">{result.strInstagram}</a><br />
                                </p>                                
                            </Col>
                        </Row>                
                    </div>                
                </div>
            : "Loading...."
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTeamProfile}, dispatch);
}

const mapStateToProps = ({teamProfile}) => {
    return {teamProfile}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile);

