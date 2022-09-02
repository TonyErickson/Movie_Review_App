import React from 'react';

  const SearchBox = (props) => {
	return (
		<div className='container-searchfield'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Enter a title of a movie ...'></input>
		</div>
	)
};

export default SearchBox;



