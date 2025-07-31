import React from 'react'
import {Image_CDN} from '../utils/constants'

const MovieCard = ({posterPath}) => {
   
  return (
    <div className='w-40 m-2 '>
        <img alt="movie poster" 
        src={Image_CDN + posterPath}/>

    </div>
  )
}
/*image path -> https://image.tmdb.org/t/p/w500 +  */
export default MovieCard