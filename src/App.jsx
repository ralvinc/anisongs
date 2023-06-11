import { useState, useCallback, useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AnimeList from "./components/AnimeList";

function App() {
  const [topAiringAnime, SetTopAiringAnime] = useState(null);
  const [topUpcomingAnime, SetTopUpcomingAnime] = useState(null);

  const [isChecked, SetIsChecked] = useState(false);
  const [sfwToggle, SetSfwToggle] = useState("");

  const [search, SetSearch] = useState("");
  const [animeList, SetAnimeList] = useState([]);
  const [animeInfo, SetAnimeInfo] = useState([]);

  const [defaultSideBar, SetDefaultSideBar] = useState(true);
  const [defaultMain, SetDefaultMain] = useState(true);

  const [openingThemes, SetOpeningThemes] = useState([]);
  const [endingThemes, SetEndingThemes] = useState([]);

  // Fetch 'Top Airing & Upcoming Animes'
  const fetchTopAnimeData = useCallback((filter, limit) => {
    fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        if (filter === "airing") {
          SetTopAiringAnime(data.data);
        } else if (filter === "upcoming") {
          SetTopUpcomingAnime(data.data);
        }
      });
  }, []);

  useEffect(() => {
    if (!topAiringAnime) {
      fetchTopAnimeData("airing", 5);
    }

    if (!topUpcomingAnime) {
      fetchTopAnimeData("upcoming", 5);
    }
  }, []);

  // Fetch 'Queried Animes' from User
  const searchAnime = (query) => {
    fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&limit=25${sfwToggle}`
    )
      .then((response) => response.json())
      .then((data) => SetAnimeList(data.data));
  };

  const searchHandler = (e) => {
    e.preventDefault();

    searchAnime(search);

    SetDefaultMain(true);
    SetDefaultSideBar(true);
  };

  // Fetch and Store 'Anime Themes' from the Anime that the User picked
  const searchAnimeThemes = () => {
    if (!animeInfo) {
      return;
    }

    fetch(`https://api.jikan.moe/v4/anime/${animeInfo.mal_id}/themes`)
      .then((response) => response.json())
      .then((data) => {
        SetOpeningThemes(data.data.openings);
        SetEndingThemes(data.data.endings);
      });
  }

  useEffect(() => {
    if (animeInfo && animeInfo.mal_id) {
      searchAnimeThemes();
    }
  }, [animeInfo]);

  return (
    <div>
      <div className="header">
        <Header
          defaultMain={defaultMain}
          defaultSideBar={defaultSideBar}
          isChecked={isChecked}
          SetIsChecked={SetIsChecked}
          SetSfwToggle={SetSfwToggle}
          searchHandler={searchHandler}
          search={search}
          SetSearch={SetSearch}
        />
      </div>

      <div className="body-container">
        <div className="body">
          <div className="side-bar">
            <Sidebar
              defaultMain={defaultMain}
              defaultSideBar={defaultSideBar}
              SetDefaultMain={SetDefaultMain}
              SetDefaultSideBar={SetDefaultSideBar}
              SetAnimeInfo={SetAnimeInfo}
              topAiringAnime={topAiringAnime}
              topUpcomingAnime={topUpcomingAnime}
              animeInfo={animeInfo}
            />
          </div>

          <div className="main-content">
            <AnimeList
              defaultMain={defaultMain}
              defaultSideBar={defaultSideBar}
              SetDefaultMain={SetDefaultMain}
              SetDefaultSideBar={SetDefaultSideBar}
              SetAnimeInfo={SetAnimeInfo}
              animeList={animeList}
              animeInfo={animeInfo}
              openingThemes={openingThemes}
              endingThemes={endingThemes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
