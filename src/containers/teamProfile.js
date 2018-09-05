import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTeamProfile } from '../actions/action-types';
import TeamMatchUps from "./TeamMatchUps";
import "./index.scss";

class TeamProfile extends Component {
    render() {
        const result = this.props.teamProfile[0];
        const teamDataLength = this.props.teamProfile;        
        if (teamDataLength.length > 0) {
            return (
                <div className="team-profile">
                    <div key={result.idTeam}>
                        <Row>
                            <Col xs="12" sm="6">                            
                                <h2>{result.strTeam}</h2>
                                <p>{result.strDescriptionEN}</p>
                            </Col>
                            <Col xs="12" sm="6">
                                <p><img className="logo" src={result.strTeamBadge} alt={result.strTeam + " team logo"} />  </p>
                                <h3>Details</h3>
                                <p>
                                    Location: {result.strStadiumLocation} <br />
                                    Manager: {result.strManager} <br />
                                    Year Formed: {result.intFormedYear} <br />
                                    Website: <a href={"http://" + result.strWebsite} target="_blank">{result.strWebsite}</a>
                                </p>
                                <hr />
                                <h3>Jersey</h3>
                                <p><img className="jersey" src={result.strTeamJersey} alt={result.strTeam + " team jersey"}  /></p>
                                <hr />
                                <h3>Match History</h3>
                                <TeamMatchUps currentTeam={result.strTeam} />
                            </Col>
                        </Row>                
                    </div>                
                </div>
            )
        } else {
            return (
                <div>Loading....</div>
            )
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getTeamProfile}, dispatch);
}

function mapStateToProps({teamProfile}) {
    return {teamProfile}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile);

