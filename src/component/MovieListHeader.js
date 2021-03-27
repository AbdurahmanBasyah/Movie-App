import React from 'react';

const MovieListHeader = (props) => {
    
    return (
        <div className='col'>
            <h3 className="heading">{props.heading}</h3>
        </div>
    )
}


export default MovieListHeader;