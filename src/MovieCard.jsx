/* preferable when we create one in react */

import React from 'react';

const MovieCard = ({movie})=>{/* we used destructioring */
    return (
        <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title} />
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;