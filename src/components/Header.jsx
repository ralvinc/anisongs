import ToggleSfwText from "./ToggleText";

function Header(props) {
  if (props.defaultMain && props.defaultSideBar) {
    return (
      <>
        <div className="logo">
          <img src="../logo.png" />
          <h1 className="default-h1">AniSongs</h1>
        </div>

        <div className="search-container">
          <ToggleSfwText isChecked={props.isChecked} />
          <label className="switch">
            <input
              type="checkbox"
              checked={props.isChecked}
              onChange={() => {
                props.SetIsChecked(!props.isChecked);

                if (props.isChecked === true) {
                  props.SetSfwToggle("");
                } else {
                  props.SetSfwToggle("&sfw=true");
                }
              }}
            />
            <span className="slider"></span>
          </label>

          <form
            className="search-box"
            onSubmit={props.searchHandler}
          >
            <input
              type="search"
              placeholder="Search for an anime..."
              required
              value={props.search}
              onChange={(e) => props.SetSearch(e.target.value)}
            />
          </form>
        </div>
      </>
    );
  } else {
    return (
      <div className="logo">
        <img src="../logo.png" />
        <h1>AniSongs</h1>
      </div>
    );
  }
}

export default Header;
