import AnimeCard from "./AnimeCard";
import Themes from "./Themes";
// import EndingThemes from "./EndingThemes";

function AnimeList(props) {
  const animeListItems = props.animeList.map((anime) => (
    <AnimeCard
      anime={anime}
      key={anime.mal_id}
      SetDefaultMain={props.SetDefaultMain}
      SetDefaultSideBar={props.SetDefaultSideBar}
      SetAnimeInfo={props.SetAnimeInfo}
    />
  ));

  // Display 'Anime Cards'
  if (props.defaultMain && props.defaultSideBar) {
    return <div className="anime-list">{animeListItems}</div>;
  }

  // Display 'Anime Themes'
  else if (!props.defaultMain && !props.defaultSideBar) {
    return (
      <div>
        <div className="buttons">
          <button
            className="back-button"
            onClick={() => {
              props.SetDefaultMain(true);
              props.SetDefaultSideBar(true);
            }}
          >
            Back to Home
          </button>

          <a
            className="mal-link"
            href={props.animeInfo.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>Go to MAL</span>
          </a>
        </div>

        <div className="themes">
          <span>Opening Themes:</span>
          <Themes themes={props.openingThemes} />
          <hr />
          <span>Ending Themes:</span>
          <Themes themes={props.endingThemes} />
        </div>
      </div>
    );
  }
}

export default AnimeList;
