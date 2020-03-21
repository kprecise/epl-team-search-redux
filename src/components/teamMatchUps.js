import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTeamMatchUp, displayTeamList } from "../actions/action-types";
import "./index.scss";

class TeamMatchUps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamOpponentSelected: false
        }
        this.chooseMatchUp = this.chooseMatchUp.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }  

    chooseMatchUp() {
        const teamOpponent = event.target.value;
        this.props.getTeamMatchUp(this.props.currentTeam, teamOpponent);
        this.setState({teamOpponentSelected: true})
    }  

    formatDate(date) {
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        var newDate  = new Date(date);
        return newDate.toLocaleDateString("en-CA", options);
    }  

    render() {
        const orderResultsByDate = this.props.teamMatchUp.sort((a, b) => {
            return new Date(b.dateEvent) - new Date(a.dateEvent);   
        }); 
        const isOpponentSelected = this.state.teamOpponentSelected; 
        return (
            <div className="match-history">
                <label htmlFor="choose-opponent">Pick an opponent from the dropdown list:</label>
                <select id="choose-opponent" onChange={event => this.chooseMatchUp()} role="listbox">
                    <option title="Choose">Choose opponent</option>
                    {
                        this.props.teamsList.map(team => {
                            if ( this.props.currentTeam === team.strTeam) {
                                return (
                                    <option className="disabled" key={team.idTeam} disabled>{team.strTeam}</option>   
                                );
                            } else {
                                return (
                                    <option key={team.idTeam}>{team.strTeam}</option>   
                                );                       
                            }
                        })
                    }
                </select>
                { isOpponentSelected &&
                <div className="match-details">
                    <h4>Results</h4>
                    <ul>
                    { 
                        orderResultsByDate.map(game => {
                            return (
                                <li key={game.idEvent}>
                                    <p><span className="date">{this.formatDate(game.dateEvent)}</span><br />
                                    {game.strEvent} {game.intHomeScore} - {game.intAwayScore}</p>
                                </li>
                            );
                        })
                    }   
                    </ul>
                </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTeamMatchUp, displayTeamList}, dispatch);
}

const mapStateToProps = ({teamsList, teamMatchUp}) => {
    return {teamsList, teamMatchUp}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMatchUps);

