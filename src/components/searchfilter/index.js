import React, { Component } from "react";

class SearchFilter extends Component {

    render() {
        const { teamName, teamId} = this.props;
        return (     
            <option id={teamId}>{teamName}</option>
        );
    }
}

export default SearchFilter;