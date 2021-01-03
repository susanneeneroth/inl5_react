// 'use strict' får en varning att det inte behövs i moduler

import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import './index.css'

class App extends Component {
    state = {
        movies: [
        {
            title: "Nyckeln till frihet",
            desc: "Två fångar blir vänner i fängelset och finner stöd från varandra om möjlig återupprättelse.",
            year: "1994"
        },
        {
            title: "Amelie från Montmartre",
            desc: "Amélie är en oskuldsfull och flicka i Paris som hittar på olika saker för att glädja andra. ",
            year: "2001"
        },
    ]
    };

    removeMovie = (index) => {
        const { movies } = this.state;
    
        this.setState({
            movies: movies.filter((movie, i) => {
                return i !== index
            })
        });
    }

    handleSubmit = movie => {
        this.setState({movies: [...this.state.movies, movie]});
    }
    render() {
        const { movies } = this.state;
      
        return (
            <div>
              <header><h1>Veckans filmlista</h1></header>
                <div className="container">
            <Table 
                movieData={movies}
                removeMovie={this.removeMovie}
            />
            <h3>Lägg till ny film</h3>
            <Form handleSubmit={this.handleSubmit} />
              </div>
          </div>
        )
      }
    
}

export default App