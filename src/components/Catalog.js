import React, { Component } from 'react';
import Movie from './Movie';
import '../styles/catalog.css'

class Catalog extends Component {

    render() {
        const budget = this.props.budget
        return (
            <div>
                <div id='budget'>Budget: {budget}&#36;</div>
                <hr></hr>
                <div id='rented'>
                    <p>Rented:</p>
                    {this.props.movies.map((m, i) => {
                        return (
                            m.isRented ?
                                <div key={i}>
                                    <Movie movie={m} toggleRented={this.props.toggleRented} />
                                </div>
                                : null
                        )
                    })}
                </div><hr></hr>
                <div id='catalog'>
                    <p>Catalog:</p>

                    {this.props.movies.map((m, i) => {
                        return (
                            <div key={i}>
                                <Movie movie={m} toggleRented={this.props.toggleRented} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Catalog;