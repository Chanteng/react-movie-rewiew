import React from 'react'
import axios from 'axios';

class UserClass extends React.Component {
    constructor() {
        super();
        this.state = { movies: []};
    }

    async getMovies() {
        const response = await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=QGbVVAlLd6e8aBAuMHUCKSjByeRiAuVL");
        this.setState ({movies: response.data})
       
    }

    componentDidMount() {
        this.getMovies();
      }
      render() {
        return (
          <>
            {
              this.state.movies.map((movie) => {
  
                return (
                  <>
                     <h1 key={movie}>{"display_title"}</h1>
                     <h1 key={movie}>{"byline"}</h1>
                     <h1 key={movie}>{"critics_pick"}</h1>
                    
                  </>
                );
              }
            )}                
          </>
        );
      }

}

export default UserClass;