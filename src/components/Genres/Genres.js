import { Chip } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  //   genres,
  //   setGenres,
  type,
  setPage,
}) => {
  // const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const handleAdd = (chipToAdd) => {
    setSelectedGenres([...selectedGenres, chipToAdd]);
    setGenres(genres.filter((chip) => chip.id !== chipToAdd.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    // return () => {
    //   setGenres({}); // unmounting
    // };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color="primary"
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            style={{ margin: 2, backgroundColor: "white" }}
            label={genre.name}
            key={genre.id}
            onClick={() => handleAdd(genre)}
            clickable
            size="small"
            // onClick={() => alert(`clicked on ${genre.name}`)}
          />
        ))}
    </div>
  );
};

export default Genres;
