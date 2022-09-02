import React from 'react';
import Main from './reviewlist';

// movie posters

const MovieInfo = (props) => {
  
	return (
		
		<React.Fragment>
			{props.movies.map((movie) => (
				<div className='image-container d-flex'>
					<img src={movie.Poster} alt='movie'></img>
					<label><Main /></label>
				</div>
		
			))}
		
		</React.Fragment>
	);
};

export default MovieInfo;
