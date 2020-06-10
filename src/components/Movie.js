import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/movie.css'

class Movie extends Component {

    toggleRented = () => {
        this.props.toggleRented(this.props.movie.id)
    }

    render() {

        const movie = this.props.movie
        const isRented = movie.isRented
        return (
            <div >
                {!isRented ?
                    <div className='movie'>
                        <Link to={'/movies/' + movie.id}>
                            <img src={movie.img} style={{ height: '300px', width: '300px' }} alt=''></img>
                        </Link>
                        <button onClick={this.toggleRented}>+</button>
                    </div>
                    :
                    <div className='movie'>
                        <Link to={'/movies/' + movie.id}>
                            <img src={movie.img} style={{ height: '300px', width: '300px' }} alt=''></img>
                        </Link>
                        <button onClick={this.toggleRented}>-</button>
                    </div>
                }

            </div>
        );
    }
}

export default Movie;