function AnimeCard(props) {
  // Check if anime exists in MAL
  if (props.anime.approved) {
    return (
      <div className="anime-card">
        <button
          onClick={() => {
            props.SetDefaultMain(false);
            props.SetDefaultSideBar(false);
            props.SetAnimeInfo(props.anime);
          }}
        >
          <img src={props.anime.images.jpg.large_image_url} alt="Anime image" />
        </button>

        <span>{props.anime.title}</span>
      </div>
    );
  }
}

export default AnimeCard;
