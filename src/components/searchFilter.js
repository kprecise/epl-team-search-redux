import React, { Component } from "react";
import TeamProfile from "./teamProfile";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { displayTeamList, getTeamSelected, getTeamProfile } from "../actions/action-types";
import "./index.scss";

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTeamProfile: false,
            currentTeam: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.props.displayTeamList();
    }   

    handleChange(e) {
        let selectedTeamId = e.target.options[e.target.selectedIndex].getAttribute('id');
        this.props.getTeamSelected(e.target.value);
        this.props.getTeamProfile(selectedTeamId);
        this.setState({ showTeamProfile: true, currentTeam: e.target.value });
    }

    render() {
        const IsShowTeamProfile = this.state.showTeamProfile
        return (  
            <div>
                <form className="search-results">
                    <label htmlFor="teamList">Choose a team</label>
                    <select id="teamList" onChange={this.handleChange}>
                        <option id="choose">-----</option>
                        {
                            this.props.teamsList.map(team => {
                                return (
                                    <option key={team.idTeam} id={team.idTeam}>{team.strTeam}</option>     
                                );
                            }) 
                        } 
                    </select>
                </form> 
                { IsShowTeamProfile &&
                    <TeamProfile />
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({displayTeamList, getTeamSelected, getTeamProfile}, dispatch);
}

const mapStateToProps = ({teamsList, teamSelected, teamProfile}) => {
    return {teamsList, teamSelected, teamProfile}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);