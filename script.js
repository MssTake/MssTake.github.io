// change theme
function changeTheme(selection) {
  theme = document.getElementsByTagName('link')[1];
  switch (selection) {
    case "artDeco":
      theme.href = 'artDeco.css';
      break;
    case "minimalist":
      theme.href = 'minimalist.css';
      break;
    case "typographic":
      theme.href = 'typographic.css';
      break;
    default:

  }
}

// reveal samples
function showSamples(selection) {
  var samples = document.getElementById("change");
    switch (selection) {
    case "webApplications":
      samples.innerHTML =
      '<embed src="https://msstake.github.io/PantherLoungeDatabase"> </br> <button> <a target="_blank" href="https://msstake.github.io/PantherLoungeDatabase>Open in a new window</a></button>';
      break;
      case "art":
samples.innerHTML =
      '<img src="assets/photos/melting.png" alt="Oct 13, 2022">';
      break;
      default:
        samples.innerHTML = '<p id="change"> </p>'
        break;
  }
}
