import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Profile from "./Pages/Profile/Profile";

import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        {/* <Routes>
            <Route path="/" component={<Trending />} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Routes> */}
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />

              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
