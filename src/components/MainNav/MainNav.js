import * as React from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import InfoIcon from "@mui/icons-material/Info";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const shoot1 = () => {
    window.open("/", "noopener,noreferrer");
  };
  const shoot2 = () => {
    window.open("/movies", "noopener,noreferrer");
  };
  const shoot3 = () => {
    window.open("/series", "noopener,noreferrer");
  };
  const shoot4 = () => {
    window.open("/search", "noopener,noreferrer");
  };
  const shoot5 = () => {
    window.open("/profile", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        theme: "palette",
        zIndex: 100,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trending"
          onClick={shoot1}
          icon={<WhatshotIcon />}
        />

        <BottomNavigationAction
          label="Movies"
          onClick={shoot2}
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          label="TV Series"
          onClick={shoot3}
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          label="Search"
          onClick={shoot4}
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Info"
          onClick={shoot5}
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
