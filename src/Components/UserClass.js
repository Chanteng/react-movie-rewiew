import React from 'react'
import axios from 'axios';

class UserClass extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] };
    }

    // async getMovies() {
    //     const response = await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=QGbVVAlLd6e8aBAuMHUCKSjByeRiAuVL");
    //     this.setState ({movies: response.data})
       
    // }

    async getMovies() {
      fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=QGbVVAlLd6e8aBAuMHUCKSjByeRiAuVL`)
      .then((Response) => {
        return Response.json()
      })
      .then((reviews)=> {
        console.log(reviews.results);
        return(
          this.setState({movies: reviews.results})
        )
      })
      
    }

    componentDidMount() {
        this.getMovies();
      }

      componentWillUnmount() {
        this.setState({movies: []})
      }


      render() {
        return (
          <>
            {
              this.state.movies.map((movie, index) => {
  
                return (
                  
                  <div key={index} className="info">
                    <h2>{movie.byline}</h2>
                    <p>{movie.display_title}</p>
                    <p>{movie.headline}</p>
                  </div>
                );
              }
            )}                
          </>
        );
      }

}

export default UserClass;