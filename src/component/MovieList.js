import React from 'react';

const MovieList = (props) => {
    const LikedComponent = props.LikedComponent;
    const BookmarkedComponent = props.BookmarkedComponent;

    return (<div className="MovieList">
        {props.movies.map((movie, index) => <div className="Card">
            <img src = {movie.Poster} alt="movie"></img>
                <div className="MovieAddOn"> 
                    <div onClick={() => {
                        try{
                            props.HandleLikedMovies(movie);
                        }
                            catch(err){
                                props.HandleBookmarkMovies(movie);
                            }
                        }
                    } >
                        <LikedComponent />
                    </div>
                    <div className="title">
                        {movie.Title}
                    </div>
                    <div onClick={() => {
                        try{
                             props.HandleBookmarkMovies(movie);
                        }
                            catch(err){
                                props.HandleLikedMovies(movie);
                            }
                        }
                    }>
                        <BookmarkedComponent />
                    </div>
                </div>
            </div>
            )
        }
    </div>
    )
}

export default MovieList;