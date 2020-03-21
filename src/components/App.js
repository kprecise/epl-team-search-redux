import React from "react";
import SearchFilter from "./searchFilter";
import { Container, Row, Col } from "reactstrap";
import "./index.css";

const App = () => (
    <div className="football-search">
        <Container>
            <Row>
                <Col xs="12">
                    <h1>EPL Team Search</h1> 
                </Col>
            </Row>
            <Row>
                <Col xs="12">  
                    <SearchFilter />                    
                </Col>
            </Row>
        </Container>
    </div>
);
  
export default App;