import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ReactPlayer from "react-player";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import "./Model.css";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../Config/Config";
import { autocompleteClasses } from "@mui/material";

const style = {
  // width: "200%",
  height: "80%",
  overflow: "scroll",
  backgroundColor: "#39445a",
  border: "1px solid #282c34",
  borderRadius: 10,
  color: "white",
  boxShadow: 50,
  pt: 10,
  px: 20,
  pb: 10,
};

function ChildModal({ video }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<YouTubeIcon />}
        color="secondary"
      >
        Watch the Trailer
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        // aria-labelledby="child-modal-title"
        // aria-describedby="child-modal-description"
      >
        <div>
          <Box className="child_box">
            <Button onClick={handleClose}>
              <HighlightOffTwoToneIcon />
            </Button>
            <div className="child_video">
              <ReactPlayer
                className="reactPlay"
                width="100%"
                url={`https://www.youtube.com/watch?v=${video}`}
              />
              <br />
              <span>
                <b> Double Click for Full Screen</b>
              </span>
            </div>
          </Box>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    // console.log(data);
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo(); // eslint-disable-next-line
  }, []);
  return (
    <>
      <div onClick={handleOpen} className="media">
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="parent-modal-title"
        // aria-describedby="parent-modal-description"
      >
        <div className="allModel">
          <Box
            style={{
              ...style,
              // width: 300,
              position: "absolute",
            }}
            className="box_class"
          >
            <div
              style={{
                padding: 20,
              }}
            >
              {content && (
                <div className="Model">
                  <div className="ContentModal">
                    <img
                      src={
                        content.poster_path
                          ? `${img_500}/${content.poster_path}`
                          : unavailable
                      }
                      alt={content.name || content.title}
                      className="ContentModal__portrait"
                    />
                    <img
                      src={
                        content.backdrop_path
                          ? `${img_500}/${content.backdrop_path}`
                          : unavailableLandscape
                      }
                      alt={content.name || content.title}
                      className="ContentModal__landscape"
                    />
                    <div className="ContentModal__about">
                      <span className="ContentModal__title">
                        {content.name || content.title} (
                        {(
                          content.first_air_date ||
                          content.release_date ||
                          "-----"
                        ).substring(0, 4)}
                        )
                      </span>
                      {content.tagline && (
                        <i className="tagline">{content.tagline}</i>
                      )}

                      <span className="ContentModal__description description">
                        {content.overview}
                      </span>
                      <Button className="video_button">
                        <ChildModal video={video} />
                      </Button>

                      <Button onClick={handleClose}>
                        <HighlightOffTwoToneIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Box>
        </div>
      </Modal>
    </>
  );
}
