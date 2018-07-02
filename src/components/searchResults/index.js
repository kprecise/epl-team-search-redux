import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import SearchFilter from "../searchfilter";
import axios from 'axios';
import TeamDetail from "../teamDetail";
import "./index.scss";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamSelected: false,
            teams: [],
            teamDetail: [],
            selectedMatch: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.chooseFixture = this.chooseFixture.bind(this);
    }

    handleChange(e) {
        const url ='https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
        let id = e.target.options[e.target.selectedIndex].getAttribute('id');
        axios.get(url+id)
        .then(response => {
            this.setState({teamSelected: true}); 
            this.setState({teamDetail: response.data.teams['0']}); 
            console.log(response.data.teams['0']);
            return response
            
        })
        .catch (response => {

        }) 
    } 

    chooseFixture(e) {
        console.log('hit');
        const url ='https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=';
        let teamOpponent = e.target.value;
        let team = this.state.teamDetail.strTeam;
        let search_term = team;
        axios.get(url+ team + '_vs_' + teamOpponent)
        .then(response => {
            this.setState({selectedMatch: response.data.event}); 
            
            console.log(response);
            return response
            
        })
        .catch (response => {

        })         
    }

    componentDidMount() {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(response => {
            this.setState({teams: response.data.teams}); 
            console.log(response.data.teams);
            return response
        })
        .catch (response => {

        }) 
    }

    render() {
        const isTeamSelected = this.state.teamSelected;
        let teamDetailsDisplay;
        if (isTeamSelected) {
            teamDetailsDisplay = <TeamDetail id={this.state.teamDetail.idTeam} key={this.state.teamDetail.idTeam} name={this.state.teamDetail.strTeam} location={this.state.teamDetail.strStadiumLocation} manager={this.state.teamDetail.strManager} formed={this.state.teamDetail.intFormedYear} logo={this.state.teamDetail.strTeamBadge} description={this.state.teamDetail.strDescriptionEN} website={this.state.teamDetail.strWebsite} jersey={this.state.teamDetail.strTeamJersey} selectMatchHandler={this.chooseFixture} teamList={this.state.teams} selectedMatch={this.state.selectedMatch} />;
        } else {
            teamDetailsDisplay = <div>No team selected</div>
        }     
        return (      
            <div>
            <Container>
                <Row>
                    <Col xs="12">
                        <h1>EPL Search Tool</h1> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">  
                        <form className="search-results">
                            <label htmlFor="teamList">Choose a team</label>
                            <select onChange={this.handleChange} id="teamList">
                                <option>Select</option>
                                {this.state.teams.map(i => {
                                    return (
                                        <SearchFilter teamName={i.strTeam} key={i.idTeam} teamId={i.idTeam} />   
                                    );
                                })}
                            </select>
                         </form>                       
                    </Col>
                </Row>
                <Row>
                    <Col xs="12"> 
                        {teamDetailsDisplay}
                    </Col>
                </Row>

            </Container>

            </div>
        );
    }
}

export default SearchResults;