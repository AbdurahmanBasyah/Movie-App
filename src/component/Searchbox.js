import React from 'react';

const Searchbox = (props) => {
    
    return (
        <div className="Searchbox col col-sm-4">
            <input className="form-control" placeholder="Search movies..." value={props.value} onChange={(event) => props.setSearchValue(event.target.value)}></input>
        </div>
    )
}

export default Searchbox;