import React,{useEffect,useState} from 'react'
import './RowPoster.css'
import { API_KEY, imageUrl } from '../../Constants/constants'
import axios from '../../axios'

function RowPoster() {
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>

            <img className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>
            )}
            </div>
    </div>
  )
}

export default RowPoster