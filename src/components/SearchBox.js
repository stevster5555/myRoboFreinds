import React from 'react';

function SearchBox({searchfield, searchChange})
{
	return(
		<div>
			<input 
				className='pa3 ba  b--green br3 bg-lightest-blue' 
				type='search' 
				placeholder='search robot'
				onChange={searchChange}

			/>
		</div>

		);

}

export default SearchBox;