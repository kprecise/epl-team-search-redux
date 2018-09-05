import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTeamMatchUp, displayTeamList } from '../actions/action-types'
import "./index.scss";

class TeamMatchUps extends Component {
    constructor(props) {
        super(props);
        this.chooseMatchUp = this.chooseMatchUp.bind(this);
        this.props.displayTeamList();
    }    
    chooseMatchUp(e) {
        let teamOpponent = e.target.value;
        this.props.getTeamMatchUp(this.props.currentTeam, teamOpponent);
    }    
    render() {
        console.log('props are', this.props)
        const { currentTeam } = this.props;
        const orderResultsByDate = this.props.teamMatchUp.sort((a, b) => {
            return new Date(b.dateEvent) - new Date(a.dateEvent);   
        });        
        return (      
            <div className="match-history">
                <label htmlFor="choose-opponent">Pick an opponent from the dropdown list:</label>
                <select id="choose-opponent" onChange={this.chooseMatchUp} role="listbox">
                    <option title="Choose">Choose opponent</option>
                    
                    {this.props.teamsList.map(x => {
                        if ( currentTeam === x.strTeam) {
                            return (
                                <option className="disabled" key={x.idTeam} disabled>{x.strTeam}</option>   
                            );
                        } else {
                            return (
                                <option key={x.idTeam}>{x.strTeam}</option>   
                            );                       
                        }

                    })}

                </select>
                <div className="match-details">
                    <h4>Results</h4>
                    <ul>
                    {orderResultsByDate.map(i => {
                        return (
                            <li key={i.idEvent}>
                                <span className="date">{i.dateEvent}</span>
                                <span className="event">{i.strEvent} {i.intHomeScore} - {i.intAwayScore}</span>
                            </li>
                        );
                    })}   
                    </ul>
                </div>
            </div>
        );     
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getTeamMatchUp, displayTeamList}, dispatch);
}

function mapStateToProps({teamsList, teamMatchUp}) {
    return {teamsList, teamMatchUp}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMatchUps);

