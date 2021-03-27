import React, {useEffect, useState} from 'react';
import MovieList from './MovieList';
import MovieListHeader from './MovieListHeader';
import Searchbox from './Searchbox';
import LikedMovies from './LikedMovies';
import BookmarkedMovies from './BookmarkedMovies';
import UnlikedMovies from './UnlikedMovies';
import UnbookmarkedMovies from './UnbookmarkedMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Container = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [likeMovie, setAddLikeMovie] = useState([]);
    const [bookmarkMovie, setBookmarkMovie] = useState([]);

    const notify = (message) =>{
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3500
        });
    }

    const saveLikedToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-liked', JSON.stringify(items))
    }
    const saveBookmarkedToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-bookmarked', JSON.stringify(items))
    }

    const getMovie = async (searchValue) => {
        const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=b1a2c737`;

        const response  = await fetch(url);
        const responseJSON = await response.json();
        
        if(responseJSON.Search){
            setMovies(responseJSON.Search);
        }
    };

    useEffect(() => {
        getMovie(searchValue);
    }, [searchValue])

    useEffect(() => {
        const moviesLiked = JSON.parse(localStorage.getItem('react-movie-app-liked'));
        if(moviesLiked){
            setAddLikeMovie(moviesLiked);
        }
        
    }, [])
    useEffect(() => {
        const moviesBookmarked = JSON.parse(localStorage.getItem('react-movie-app-bookmarked'));
        if(moviesBookmarked){
            setBookmarkMovie(moviesBookmarked);
        }
        
    }, [])


    /* ---- Beginning of Like and Bookmark Function ---- */
    const addLikedMovie = (movie) => {
        const newLikedList = [...likeMovie];
        if(!(newLikedList.includes(movie))){
            newLikedList.push(movie);
        }
        console.log(movie);
        setAddLikeMovie(newLikedList);
        notify("\"" + movie.Title +"\" added to liked videos")
        saveLikedToLocalStorage(newLikedList);
    }

    const removeLikedMovie = (movie) => {
        const newLikedList = [...likeMovie];
        let outputList = [];
        for(let i = 0; i < newLikedList.length; i++){
            if(newLikedList[i] !== movie){
                outputList.push(newLikedList[i]);
            }
        }
        setAddLikeMovie(outputList);
        saveLikedToLocalStorage(outputList);
    }

    const addBookmarkedMovie = (movie) => {
        const newBookmarkedList = [...bookmarkMovie];
        if(!(newBookmarkedList.includes(movie))){
            newBookmarkedList.push(movie);
        }
        setBookmarkMovie(newBookmarkedList);
        notify("\"" + movie.Title +"\" added to watch later. \n Don't forget to watch it (^^)")
        saveBookmarkedToLocalStorage(newBookmarkedList);
    }

    const removeBookmarkMovie = (movie) => {
        const newBookmarkedList = [...bookmarkMovie];
        let outputList = [];
        for(let i = 0; i < newBookmarkedList.length; i++){
            if(newBookmarkedList[i] !== movie){
                outputList.push(newBookmarkedList[i]);
            }
        }
        setBookmarkMovie(outputList);
        saveBookmarkedToLocalStorage(outputList);
    }

    /* ---- End of Like and Bookmark Function ---- */

    return(
            <div className="Container container-fluid">
                {/* Liked Movies */}
                <div className="navbar-container row d-flex align-items-center mb-2">
                    <MovieListHeader heading="Liked Movies"/>
                </div>
                <div className="row movies">
                    <div>
                        <MovieList movies = {likeMovie} LikedComponent = {UnlikedMovies} BookmarkedComponent = {UnlikedMovies} HandleLikedMovies = {removeLikedMovie}/>
                    </div>
                </div>



                {/* Bookmarked Movies */}
                <div className="navbar-container row d-flex align-items-center mb-2">
                    <MovieListHeader heading="Watch Later" />
                </div>
                <div className="row movies">
                    <div>
                        <MovieList movies = {bookmarkMovie} LikedComponent = {UnbookmarkedMovies} BookmarkedComponent = {UnbookmarkedMovies} HandleBookmarkMovies = {removeBookmarkMovie}/>
                    </div>
                </div>


                {/* Search Movies */}
                <div className="navbar-container row d-flex align-items-center mb-2">
                    <MovieListHeader heading="Discover New Movies" className="list-title"/>
                    <Searchbox searchValue = {searchValue} setSearchValue = {setSearchValue}/>
                </div>
                <div className="row movies">
                    <MovieList movies = {movies} LikedComponent = {LikedMovies} BookmarkedComponent = {BookmarkedMovies} HandleLikedMovies = {addLikedMovie} HandleBookmarkMovies = {addBookmarkedMovie}/>
                </div>
            </div>

        );
}

export default Container;