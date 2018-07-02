import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import "./index.scss";
import MatchHistory from "../matchHistory";

class TeamDetail extends Component {
    render() {
        const { name, id, location, manager, formed, logo, description, jersey, website, teamList, selectMatchHandler, selectedMatch} = this.props;
        return (      
            <div className="team-details">
                <Row>
                    <Col xs="12" sm="6">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </Col>
                    <Col xs="12" sm="6">
                        <p><img className="logo" src={logo} alt={name + " team logo"} />  </p>
                        <h3>Details</h3>
                        <p>
                            Location: {location} <br />
                            Manager: {manager} <br />
                            Year Formed: {formed} <br />
                            Website: <a href={"http://" + website} target="_blank">{website}</a>
                        </p>
                        <hr />
                        <h3>Jersey</h3>
                        <p><img className="jersey" src={jersey} alt={name + " team jersey"}  /></p>
                        <hr />
                        <h3>Match History</h3>
                        <MatchHistory matchSelect={selectedMatch} teamSelected={name} idTeamSelected={id} teamMatchList={teamList} selectMatchupHandler={selectMatchHandler}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TeamDetail;