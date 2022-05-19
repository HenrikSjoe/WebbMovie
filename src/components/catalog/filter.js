import { faL, faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import actionLogo1 from "../../img/actionLogo1.png";
import dramaLogo from "../../img/dramaLogo.jpg";
import comedyLogo1 from "../../img/comedyLogo1.webp";
import thrillerLogo from "../../img/thrillerLogo.jpg";
import topScoreLogo from "../../img/topScoreLogo.jpg";
import popularLogo from "../../img/popularLogo.jpg";
import baloonsLogo from "../../img/baloonsLogo.jpg";
import { apiMovies, apiTopScoreOrPopular } from "../../models/apiCatalog";

import MovieList from "./movieList";
import MovieListMobil from "./movieListMobil";

import "../../styles/filter.css";

const Filter = () => {
  const [movies, setMovies] = useState([]);
  const [apiPage, setApiPage] = useState(1);

  const [genreActionChecked, setGenreActionChecked] = useState(false);
  const [genreDramaChecked, setGenreDramaChecked] = useState(false);
  const [genreComedyChecked, setGenreComedyChecked] = useState(false);
  const [genreThrillerChecked, setGenreThrillerChecked] = useState(false);
  const [genreFamilyChecked, setGenereFamilyChecked] = useState(false);
  const [genreTopScoreChecked, setGenreTopScoreChecked] = useState(true);
  const [genrePopularChecked, setGenrePopularChecked] = useState(false);

  //* Api genreNumbers
  //! 28 action
  //! 18 drama
  //! 35 comedy
  //! 53 thriller
  //! 10751 family
  //! top_rated
  //! popular

  useEffect(() => {
    apiTopScoreOrPopular(setMovies, "top_rated");
    
  }, []);

  const handleIncreaseApiPage = (genre, page) => {
    setApiPage(apiPage + 1);
    apiMovies(setMovies, genre, page)
   
  
  };

  // const handleDecreaseApiPage = (genre, pageNumber) => {
  //   apiMovies(setMovies, genre,pageNumber)
  //   setApiPage(apiPage - 1)
    
  // }

  const handleGenre = (input, pageNumber) => {
    // apiMovies(setMovies, input);
    setGenreActionChecked(false);
    setGenreDramaChecked(false);
    setGenreComedyChecked(false);
    setGenreThrillerChecked(false);
    setGenereFamilyChecked(false);
    setGenreTopScoreChecked(false);
    setGenrePopularChecked(false);

    if ("28" === input) {
      setGenreActionChecked(true);
    } else if ("18" === input) {
      setGenreDramaChecked(true);
    } else if ("35" === input) {
      setGenreComedyChecked(true);
    } else if ("53" === input) {
      setGenreThrillerChecked(true);
    } else if ("10751" === input) {
      setGenereFamilyChecked(true);
    } else if ("top_rated" === input) {
      setGenreTopScoreChecked(true);
    } else {
      setGenrePopularChecked(true);
    }
  };

  return (
    <div className="filter-component">
      <div className="filter-categories">
        <h4 className="h4-genre">
          <div className="img-container">
            <img
              src={actionLogo1}
              alt="logo"
              className="actionLogo"
              onClick={() => {
                handleIncreaseApiPage("28", apiPage.toString())
                handleGenre("28")
              }}
              style={{ opacity: genreActionChecked ? 0.8 : 0.5 }}
            />
            <img
              src={dramaLogo}
              alt="logo"
              className="dramaLogo"
              //
              onClick={() => handleGenre("18")}
              style={{ opacity: genreDramaChecked ? 1 : 0.5 }}
            />
            <img
              src={comedyLogo1}
              alt="logo"
              className="comedyLogo"
              onClick={() => handleGenre("35")}
              style={{ opacity: genreComedyChecked ? 1 : 0.5 }}
            />
            <img
              src={thrillerLogo}
              alt="logo"
              className="thrillerLogo"
              onClick={() => handleGenre("53")}
              style={{ opacity: genreThrillerChecked ? 1 : 0.5 }}
            />
            <img
              src={baloonsLogo}
              alt="logo"
              className="familyLogo"
              onClick={() => handleGenre("10751")}
              style={{ opacity: genreFamilyChecked ? 1 : 0.5 }}
            />
            <img
              src={topScoreLogo}
              alt="logo"
              className="topScoreLogo"
              onClick={() => handleGenre("top_rated")}
              style={{ opacity: genreTopScoreChecked ? 1 : 0.5 }}
            />
            <img
              src={popularLogo}
              alt="logo"
              className="popularLogo"
              //
              onClick={() => handleGenre("popular")}
              style={{ opacity: genrePopularChecked ? 1 : 0.5 }}
            />
          </div>
          <div className="label-action-container">
            <label
              className="label-action"
              onClick={() => handleGenre("28")}
              style={{ color: genreActionChecked ? "#B51B1B" : "white" }}
            >
              Action
            </label>
          </div>

          <div className="label-drama-container">
            <label
              className="label-drama"
              onClick={() => handleGenre("18")}
              style={{ color: genreDramaChecked ? "#B51B1B" : "white" }}
            >
              Drama
            </label>
          </div>

          <div className="label-comedy-container">
            <label
              className="label-comedy"
              onClick={() => handleGenre("35")}
              style={{ color: genreComedyChecked ? "#B51B1B" : "white" }}
            >
              Comedy
            </label>
          </div>

          <div className="label-thriller-container">
            <label
              className="label-thriller"
              onClick={() => handleGenre("53")}
              style={{ color: genreThrillerChecked ? "#B51B1B" : "white" }}
            >
              Thriller
            </label>
          </div>

          <div className="label-family-container">
            <label
              className="label-family"
              onClick={() => handleGenre("10751")}
              style={{ color: genreFamilyChecked ? "#B51B1B" : "white" }}
            >
              Family
            </label>
          </div>

          <div className="label-topScore-container">
            <label
              className="label-topScore"
              onClick={() => handleGenre("top_rated")}
              style={{ color: genreTopScoreChecked ? "#B51B1B" : "white" }}
            >
              Top Score
            </label>
          </div>

          <div className="label-popular-container">
            <label
              className="label-popular"
              onClick={() => handleGenre("popular")}
              style={{ color: genrePopularChecked ? "#B51B1B" : "white" }}
            >
              Popular
            </label>
          </div>
        </h4>
      </div>
      <MovieList movieData={movies} />
    </div>
  );
};

export default Filter;
