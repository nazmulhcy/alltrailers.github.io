import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import BasicPagination from "../../components/PaginationUi/PaginationUi";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hooks/useGenre";
const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numPage, setNumPage] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreForUrl = useGenre(selectedGenres);
  console.log(selectedGenres);
  // const [genres, setGenres] = useState([]);

  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`
    );
    setContent(data.results);
    setNumPage(data.total_pages);
    // console.log(data.results);
  };
  useEffect(() => {
    fetchMovie();
  }, [page, genreForUrl]);
  // eslint-disable-next-line
  return (
    <div>
      <span className="page"> Movies</span>
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        // genres={genres}
        // setGenres={setGenres}
        type="movie"
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <span className="pageNum">Page:{page}</span>
      {numPage > 1 && <BasicPagination setPage={setPage} numPage={numPage} />}
    </div>
  );
};

export default Movies;
