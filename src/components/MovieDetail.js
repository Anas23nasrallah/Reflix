import React, { Component } from 'react';
import '../styles/movieDetail.css'

class MovieDetail extends Component {

    render() {
        const id = parseInt(this.props.match.params.id)
        const movie = this.props.movies.find(m => m.id === id)
        return (
            <div className='movie-details'>
                <p className='movie-title'>{movie.title} ({movie.year})</p>
                <img src={movie.img} style={{ height: '400px', width: '400px' }} alt=''></img>
                <p className='movie-description'>{movie.descrShort}</p><br></br>
            </div>
        );
    }
}

export default MovieDetail;