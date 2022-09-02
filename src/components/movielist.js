import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './movie';
import SearchBox from './moviesearch';
import "../App.css";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className= 'homepage'>
			<h3 className="title">Movie Review</h3>
		
		<div className='container'>
			<div className='row1'>
				
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row2'>
				<MovieList movies={movies} />
			</div>
		</div>
		</div>
	);
};

export default Home;