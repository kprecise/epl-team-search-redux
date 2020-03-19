import React from "react";
import "./index.scss";

const MatchHistory = ({
    teamSelected,
    selectMatchupHandler,
    idTeamSelected,
    teamMatchList
}) => {
  
    const orderResultsByDate = this.props.matchSelect.sort((a, b) => {
        return new Date(b.dateEvent) - new Date(a.dateEvent);   
    });

    return (      
        <div className="match-history">
            <label htmlFor="choose-opponent">Pick an opponent from the dropdown list:</label>
            {teamSelected} vs 
            <select id="choose-opponent" onChange={selectMatchupHandler} role="listbox">
                <option title="Choose ">Choose opponent</option>
                {teamMatchList.map(x => {
                    if ( idTeamSelected === x.idTeam ) {
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
                {orderResultsByDate.map(result => {
                    return (
                        <div>
                            <span>{result.dateEvent}</span>
                            {result.strEvent} {result.intHomeScore} - {result.intAwayScore}
                        </div>
                    );
                })}                          
            </div>
        </div>
    );
}

export default MatchHistory;