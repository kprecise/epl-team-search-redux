import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTeamMatchUp, displayTeamList } from "../actions/action-types";
import "./index.scss";

const TeamMatchUps = ({
    currentTeam,
    teamMatchUp,
    teamsList,
    getTeamMatchUp
}) => {
    const orderResultsByDate = teamMatchUp.sort((a, b) => {
        return new Date(b.dateEvent) - new Date(a.dateEvent);   
    });  

    const chooseMatchUp = () => {
        const teamOpponent = event.target.value;
        getTeamMatchUp(currentTeam, teamOpponent);
    }  

    const formatDate = (date) => {
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        var newDate  = new Date(date);
        return newDate.toLocaleDateString("en-CA", options);
    }  

    return (
        <div className="match-history">
            <label htmlFor="choose-opponent">Pick an opponent from the dropdown list:</label>
            <select id="choose-opponent" onChange={event => chooseMatchUp()} role="listbox">
                <option title="Choose">Choose opponent</option>
                {
                    teamsList.map(team => {
                        if ( currentTeam === team.strTeam) {
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
            <div className="match-details">
                <h4>Results</h4>
                <ul>
                { 
                    orderResultsByDate.map(game => {
                        return (
                            <li key={game.idEvent}>
                                <span className="date">{formatDate(game.dateEvent)}</span>
                                <span className="event">{game.strEvent} {game.intHomeScore} - {game.intAwayScore}</span>
                            </li>
                        );
                    })
                }   
                </ul>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTeamMatchUp, displayTeamList}, dispatch);
}

const mapStateToProps = ({teamsList, teamMatchUp}) => {
    return {teamsList, teamMatchUp}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMatchUps);

