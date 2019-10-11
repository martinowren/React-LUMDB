import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movie'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            movie: {},
        }
    }


    async componentDidMount() {
        try {
            // eslint-disable-next-line react/prop-types
            const { match } = this.props
            // eslint-disable-next-line react/prop-types
            const result = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=a4f92f085fc7a3c8549a0d224c44cdf9&language=en-US`)
            const movie = await result.json()
            this.setState({
                movie,
            })
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        const { movie } = this.state
        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>
                    <Overdrive id={movie.id} duration="500">
                        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                    </Overdrive>

                    <div>
                        {movie.title ? (<h1>{movie.title}</h1>) : (<h1>Tittel eksisterer ikke</h1>)}
                        {movie.release_date ? (<h3>{movie.release_date}</h3>) : (<h3>Lanseringsdato ikke kjent</h3>)}
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>

            </MovieWrapper>
        )
    }
}


export default MovieDetail


const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${(props) => props.backdrop}) no-repeat
    background-size: cover;
`
const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`
