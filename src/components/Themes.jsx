function Themes({themes}) {
  function sortThemes(themes) {
    themes.sort((a, b) => {
      const numA = parseInt(a.split(":")[0]);
      const numB = parseInt(b.split(":")[0]);
      return numA - numB;
    });
  }

  sortThemes(themes);

  // Generate links to youtube for each of the themes
  function createThemeLinks(themes) {
    return themes.map((element) => {
      let title = "";

      if (element.includes(":")) {
        const parts = element.split(":");
        title = parts
          .slice(1)
          .join(":")
          .trim()
          .replace(/\(eps.*\)/, "")
          .trim();
      } else {
        title = element.replace(/\(eps.*\)/, "").trim();
      }

      const base_url = "https://www.youtube.com/results?search_query=";
      return base_url + title;
    });
  }

  const themesLinks = createThemeLinks(themes);

  // Zip together the themes with their corresponding links
  const zipThemes = themes.map((element, index) => {
    return [element, themesLinks[index]];
  });

  const themesItems = zipThemes.map((theme, index) => {
    return (
      <div className="opening-themes">
        <a 
          key={index} 
          href={theme[1]} 
          target="_blank" 
          rel="noreferrer"
        >
          {theme[0]}
        </a>
      </div>
    );
  });

  // Display themes
  if (themesItems.length !== 0) {
    return <div>{themesItems}</div>;
  } else {
    return (
      <div className="not-found">
        <span>No themes found.</span>
      </div>
    );
  }
}

export default Themes;