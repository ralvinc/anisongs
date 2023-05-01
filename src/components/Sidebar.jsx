import AnimeInfo from "./AnimeInfo";

function Sidebar(props) {
  if (!props.defaultMain && !props.defaultSideBar) {
    return <AnimeInfo animeInfo={props.animeInfo} />;
  } else if (props.topAiringAnime && props.topUpcomingAnime) {
    const topAiringAnimeItems = props.topAiringAnime.map((anime) => {
      return (
        <button
          key={anime.mal_id}
          className="top-airing-anime-items"
          onClick={() => {
            props.SetDefaultMain(false);
            props.SetDefaultSideBar(false);
            props.SetAnimeInfo(anime);
          }}
        >
          <img src={anime.images.jpg.large_image_url} alt="Anime image" />
          <span>{anime.title}</span>
        </button>
      );
    });

    const topUpcomingAnimeItems = props.topUpcomingAnime.map((anime) => {
      return (
        <button
          key={anime.mal_id}
          className="top-airing-anime-items"
          onClick={() => {
            props.SetDefaultMain(false);
            props.SetDefaultSideBar(false);
            props.SetAnimeInfo(anime);
          }}
        >
          <img src={anime.images.jpg.large_image_url} alt="Anime image" />
          <span>{anime.title}</span>
        </button>
      );
    });

    return (
      <div className="default-side-bar">
        <div className="top-airing-anime">
          <h2>Top Airing Anime</h2>
          {topAiringAnimeItems}
        </div>
        <br />

        <div className="top-upcoming-anime">
          <h2>Top Upcoming Anime</h2>
          {topUpcomingAnimeItems}
        </div>
      </div>
    );
  }
}

export default Sidebar;
