import React from "react";
import { img_300, unavailable } from "../../Config/Config";
import "./singleContent.css";
import { Badge } from "@mui/material";
// import BasicModal from "../ContentModel/ContentModel";
import NestedModal from "../ContentModel/Model";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div>
      {/* //{" "} */}
      <NestedModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average.toFixed(1)}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </NestedModal>
    </div>
  );
};

export default SingleContent;
