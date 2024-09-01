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
      // when you have time, add css that,
      // on hover:, tells users to click on the embed to open the site in another window
      samples.innerHTML =
      '<a target="_blank"><embed src="https://msstake.github.io/PantherLoungeDatabase"></a>';
      break;
      case "art":
samples.innerHTML =
      '<img src="photos/melting.png" alt="Oct 13, 2022">';
        break;
      case "tumblrThemes":
        // add tumblr themes later
        break;
      default:
        samples.innerHTML = '<p id="change"> </p>'
        break;
  }
}
