function AnimeInfo({ animeInfo }) {
  function AnimeRank() {
    if (animeInfo.rank !== null) {
      return (
        <div className="info">
          <span>Rank: </span>
          {animeInfo.rank}
        </div>
      );
    } else if (
      animeInfo.rank === null &&
      animeInfo.status !== "Not yet aired"
    ) {
      return (
        <div className="info">
          <span>Rank: </span>Not ranked
        </div>
      );
    } else {
      return (
        <div className="info">
          <span>Rank: </span>Not yet aired
        </div>
      );
    }
  }

  function AnimeScore() {
    if (animeInfo.score !== null) {
      return (
        <div className="info">
          <span>Score: </span>
          {animeInfo.score}
        </div>
      );
    } else {
      return (
        <div className="info">
          <span>Score: </span>Not yet aired
        </div>
      );
    }
  }

  return (
    <div className="anime-info">
      <img src={animeInfo.images.jpg.large_image_url} alt="Anime image" />

      <div className="title">{animeInfo.title}</div>
      <div className="title">{animeInfo.title_japanese}</div>
      <br />

      <AnimeRank />
      <AnimeScore />
      <br />

      <div className="info">
        <span>Source: </span>
        {animeInfo.source}
      </div>

      <div className="info">
        <span>Status: </span>
        {animeInfo.status}
      </div>

      <div className="info">
        <span>Rating: </span>
        {animeInfo.rating}
      </div>

      <br />
      <br />

      <a
        className="mal-link"
        href={animeInfo.url}
        target="_blank"
        rel="noreferrer"
      >
        <span>Go to MAL</span>
      </a>
    </div>
  );
}

export default AnimeInfo;
