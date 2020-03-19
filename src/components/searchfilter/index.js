import React from "react";

const SearchFilter = ({
    teamName, 
    teamId
}) => {
    return (     
        <option id={teamId}>{teamName}</option>
    );    
}

export default SearchFilter;