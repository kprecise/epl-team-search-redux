import React from "react";
import { Row, Col } from "reactstrap";
import "./index.scss";

const TeamDetail  = ({
    name,
    location,
    manager,
    formed,
    logo,
    description,
    jersey,
    website
}) => {
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
                </Col>
            </Row>
        </div>
    );
}       

export default TeamDetail;