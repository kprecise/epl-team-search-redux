import axios from 'axios';
import { LIST_TEAMS, TEAM_SELECTED, GET_TEAM_PROFILE, GET_TEAM_MATCHUP } from "../constants";
/*
 * action creators
 */

export function displayTeamList() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
    const request =  axios.get(url);

    return {
        type: LIST_TEAMS,
        payload: request
    }
}

export function getTeamSelected(teamSelected) {
    let teamName = teamSelected;
    return {
        type: TEAM_SELECTED,
        data: {
            teamName: teamName
        }
    }
}

export function getTeamProfile(teamSelected) {
    const url ='https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
    const teamSelectedID = teamSelected
    const request =  axios.get(url+teamSelectedID);
    return {
        type: GET_TEAM_PROFILE,
        payload: request
    }
}

export function getTeamMatchUp(currentTeam, teamOpponent) {
    const url ='https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e='
    const request = axios.get(url + currentTeam + '_vs_' + teamOpponent)
    return {
        type: GET_TEAM_MATCHUP,
        payload: request
    }
}