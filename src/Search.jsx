import React from 'react'
import _ from 'lodash'

const Search = ({searching}) => {

  return( 
    <input
      type="search"
      placeholder='Search recipes...'
      className='shadow-lg p-2 rounded'
      name=""
      id="search-i"
      onChange={_.debounce(searching,800)}
    />
  )
}

export default Search