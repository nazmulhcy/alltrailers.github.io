// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// // import ReactPlayer from "react-player";
// // import Trailer from "../Trailer/Trailer";
// import "./contentModel.css";
// import {
//   img_500,
//   unavailable,
//   unavailableLandscape,
// } from "../../Config/Config";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "50%",
//   height: "80%",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 2,
// };

// export default function BasicModal({ children, media_type, id }) {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [content, setContent] = useState();
//   const [video, setVideo] = useState();
//   const fetchData = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//     );

//     setContent(data);
//     // console.log(data);
//   };

//   const fetchVideo = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//     );
//     console.log(data);
//     setVideo(data.results[0]?.key);
//   };

//   useEffect(() => {
//     fetchData();
//     fetchVideo(); // eslint-disable-next-line
//   }, []);

//   return (
//     <div>
//       <Button onClick={handleOpen}>{children}</Button>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {
//             <>
//               <Button
//                 variant="contained"
//                 startIcon={<YouTubeIcon />}
//                 color="secondary"
//                 target="__blank"
//                 href={`https://www.youtube.com/watch?v=${video}`}
//               >
//                 Watch the Trailer
//               </Button>

//               <span className="ContentModal__title">
//                 {content.name || content.title} (
//                 {(
//                   content.first_air_date ||
//                   content.release_date ||
//                   "-----"
//                 ).substring(0, 4)}
//                 )
//               </span>

//               <span className="ContentModal__description">
//                 {content.overview}
//               </span>
//             </>
//           }
//         </Box>
//       </Modal>
//     </div>
//   );
// }
