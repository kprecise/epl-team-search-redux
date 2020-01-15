import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./index.css";
import SearchFilter from "../containers/searchFilter";

const App = () => (
    <div className="football-search">
        <Container>
            <Row>
                <Col xs="12">
                    <h1>EPL Team Search <strong>V2</strong></h1> 
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