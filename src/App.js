import React from 'react';
import { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Catalog from './components/Catalog'
import Landing from './components/Landing'
import MovieDetail from './components/MovieDetail';



class App extends Component {

  constructor() {
    super()
    this.state = {
      movies:
        [
          { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
          { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
          { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
          { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
        ],
      budget: 10
    }

  }

  toggleRented = (id) => {
    const movies = [...this.state.movies]
    let budget = this.state.budget
    if (movies.find(m => m.id === id).isRented) {
      budget += 3
    } else {
      if (budget < 3) {
        alert('your budget is not enough')
        return
      }
      budget -= 3
    }
    movies.find(m => m.id === id).isRented = !movies.find(m => m.id === id).isRented
    this.setState({
      movies,
      budget
    })

  }

  render() {
    return (
      <Router >
        <div>
          <div>
            <div className='header-link'> <Link to="/" ><p className='header-text'>Home</p></Link></div>
            <div className='header-link'> <Link to="/catalog" ><p className='header-text'>Catalog</p></Link></div>
            <div className='header-link' id>REFLIX</div>
            <hr></hr>

            <Route exact path="/" component={Landing} />
            <Route exact path="/catalog" render={() => <Catalog movies={this.state.movies} toggleRented={this.toggleRented} budget={this.state.budget} />} />
            <Route exact path='/movies/:id' render={({ match }) => < MovieDetail match={match} movies={this.state.movies} />} />
          </div>
        </div>

      </Router>
    );
  }

}

export default App;
