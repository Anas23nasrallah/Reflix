import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css'

class Landing extends Component {

    constructor() {
        super()
        this.state = {
            users: [
                {
                    name: 'Anas',
                    backgroundColor: 'red',
                    budget: 3
                },
                {
                    name: 'Maayan',
                    backgroundColor: 'lightseagreen',
                    budget: 12
                },
                {
                    name: 'Lihi',
                    backgroundColor: 'green',
                    budget: 32
                },
                {
                    name: 'Danny',
                    backgroundColor: 'white',
                    budget: 32
                }
            ]
        }
    }

    render() {
        return (
            this.state.users.map((u, i) => 
                <Link to="/catalog" key={i}>
                    <div style={{ backgroundColor: u.backgroundColor }} className='user'><p className='user-name'>{u.name}</p></div>
                </Link>
            )
        );
    }
}

export default Landing;