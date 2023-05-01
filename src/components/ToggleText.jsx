function ToggleSfwText({ isChecked }) {
  if (isChecked) {
    return (
      <div className="toggle-text">
        <span>SFW</span>
        <br />
        <span>Only</span>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ToggleSfwText;
