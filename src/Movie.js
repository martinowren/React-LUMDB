import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = ({ movie }) => (
    <Link to={`/${movie.id}`}>
        <Overdrive id={movie.id} duration="500">
            {`${POSTER_PATH}${movie.poster_path}` ? <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} /> : <p>Bilde finnes ikke</p>}

        </Overdrive>
    </Link>

)

export default Movie

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        id: PropTypes.string,
    }).isRequired,
}

export const Poster = styled.img`
    box-shadow: 
        0 1px 1px rgba(0,0,0,0.12),
        0 2px 2px rgba(0,0,0,0.12),
        0 4px 4px rgba(0,0,0,0.12),
        0 8px 8px rgba(0,0,0,0.12),
        0 16px 16px rgba(0,0,0,0.12),
        0 32px 32px rgba(0,0,0,0.12),
        0 64px 64px rgba(0,0,0,0.12);
`

// Med prop-types kan du definere hva slags props man forventer
